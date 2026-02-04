import { promises as fs } from "node:fs";
import path from "node:path";

type ImportRecord = {
    file: string;
    specifiers: string[];
};

type WorkerStringRecord = {
    file: string;
    matches: string[];
};

type AuditOutput = {
    generatedAt: string;
    rootsScanned: string[];
    totals: {
        filesScanned: number;
        importCount: number;
        workerStringCount: number;
    };
    imports: ImportRecord[];
    workerStringRefs: WorkerStringRecord[];
    appFiles: string[];
    configRefs: {
        packageScripts: Record<string, string>;
        nextConfigPresent: boolean;
    };
};

const ROOT = process.cwd();
const OUTPUT_JSON = path.join(ROOT, "docs", "audit-dead-code.generated.json");
const OUTPUT_MD = path.join(ROOT, "docs", "audit-dead-code.generated.md");

const SOURCE_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);
const IGNORE_DIRS = new Set(["node_modules", ".next", "dist", "build"]);

const IMPORT_FROM_REGEX = /\b(?:import|export)\s+(?:type\s+)?[^'";]*?from\s+['"]([^'"]+)['"]/g;
const IMPORT_SIDE_EFFECT_REGEX = /\bimport\s+['"]([^'"]+)['"]/g;
const WORKER_STRING_REGEX = /\/workers\/[A-Za-z0-9_.-]+/g;

const toRelative = (filePath: string) => path.relative(ROOT, filePath);

const isSourceFile = (filePath: string) => SOURCE_EXTENSIONS.has(path.extname(filePath));

const shouldIgnoreDir = (dirName: string) => IGNORE_DIRS.has(dirName);

const walkDir = async (dir: string): Promise<string[]> => {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files: string[] = [];

    await Promise.all(
        entries.map(async (entry) => {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                if (shouldIgnoreDir(entry.name)) return;
                const nested = await walkDir(fullPath);
                files.push(...nested);
                return;
            }
            if (entry.isFile() && isSourceFile(fullPath)) {
                files.push(fullPath);
            }
        })
    );

    return files;
};

const extractImports = (content: string) => {
    const matches: string[] = [];
    let match: RegExpExecArray | null = IMPORT_FROM_REGEX.exec(content);
    while (match) {
        matches.push(match[1]);
        match = IMPORT_FROM_REGEX.exec(content);
    }

    match = IMPORT_SIDE_EFFECT_REGEX.exec(content);
    while (match) {
        matches.push(match[1]);
        match = IMPORT_SIDE_EFFECT_REGEX.exec(content);
    }

    return matches;
};

const extractWorkerStrings = (content: string) => {
    const matches: string[] = [];
    let match: RegExpExecArray | null = WORKER_STRING_REGEX.exec(content);
    while (match) {
        matches.push(match[0]);
        match = WORKER_STRING_REGEX.exec(content);
    }
    return matches;
};

const readPackageScripts = async () => {
    const packagePath = path.join(ROOT, "package.json");
    const raw = await fs.readFile(packagePath, "utf8");
    const parsed = JSON.parse(raw) as { scripts?: Record<string, string> };
    return parsed.scripts ?? {};
};

const main = async () => {
    const roots = ["src", "app", "scripts"].map((dir) => path.join(ROOT, dir));
    const files = (
        await Promise.all(
            roots.map(async (dir) => {
                try {
                    return await walkDir(dir);
                } catch {
                    return [] as string[];
                }
            })
        )
    ).flat();

    const imports: ImportRecord[] = [];
    const workerStringRefs: WorkerStringRecord[] = [];

    await Promise.all(
        files.map(async (file) => {
            const content = await fs.readFile(file, "utf8");
            const importMatches = extractImports(content);
            if (importMatches.length > 0) {
                imports.push({ file: toRelative(file), specifiers: importMatches });
            }

            const workerMatches = extractWorkerStrings(content);
            if (workerMatches.length > 0) {
                workerStringRefs.push({ file: toRelative(file), matches: workerMatches });
            }
        })
    );

    const appDir = path.join(ROOT, "app");
    let appFiles: string[] = [];
    try {
        appFiles = (await walkDir(appDir)).map(toRelative);
    } catch {
        appFiles = [];
    }

    const packageScripts = await readPackageScripts();
    const nextConfigPresent = await fs
        .access(path.join(ROOT, "next.config.ts"))
        .then(() => true)
        .catch(() => false);

    const output: AuditOutput = {
        generatedAt: new Date().toISOString(),
        rootsScanned: roots.map(toRelative),
        totals: {
            filesScanned: files.length,
            importCount: imports.reduce((acc, item) => acc + item.specifiers.length, 0),
            workerStringCount: workerStringRefs.reduce(
                (acc, item) => acc + item.matches.length,
                0
            ),
        },
        imports,
        workerStringRefs,
        appFiles,
        configRefs: {
            packageScripts,
            nextConfigPresent,
        },
    };

    await fs.writeFile(OUTPUT_JSON, `${JSON.stringify(output, null, 2)}\n`, "utf8");

    const mdSummary = `# Audit dead-code (généré)\n\n`;
    const mdBody = [
        `- Généré le : ${output.generatedAt}`,
        `- Racines scannées : ${output.rootsScanned.join(", ")}`,
        `- Fichiers scannés : ${output.totals.filesScanned}`,
        `- Imports statiques trouvés : ${output.totals.importCount}`,
        `- Références de workers (/workers/*) : ${output.totals.workerStringCount}`,
        "",
        `JSON complet : ${path.relative(ROOT, OUTPUT_JSON)}`,
        "",
        "## Notes",
        "- Cet export ne suit pas les imports dynamiques : à vérifier manuellement.",
        "- Lister les fichiers Next.js via app/* est uniquement informatif.",
        "",
        "## Exécution",
        "```bash",
        "node --import=tsx scripts/audit-dead-code.ts",
        "```",
        "",
    ].join("\n");

    await fs.writeFile(OUTPUT_MD, `${mdSummary}${mdBody}`, "utf8");
};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
