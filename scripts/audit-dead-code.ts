import { promises as fs } from "fs";
import path from "path";

type WorkerReference = {
    file: string;
    matches: string[];
};

type AuditOutput = {
    generatedAt: string;
    filesScanned: string[];
    staticImports: Record<string, string[]>;
    dynamicImports: Record<string, string[]>;
    workerStringRefs: WorkerReference[];
    packageScripts: Record<string, string>;
    nextConfigMatches: string[];
    appRouterFiles: string[];
};

const ROOT = process.cwd();
const SCAN_DIRS = ["src", "app", "scripts"];
const IGNORE_DIRS = new Set(["node_modules", ".next", "dist", ".git"]);
const CODE_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);

const isCodeFile = (filePath: string): boolean => {
    return CODE_EXTENSIONS.has(path.extname(filePath));
};

const listFiles = async (dirPath: string): Promise<string[]> => {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const files: string[] = [];

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            if (!IGNORE_DIRS.has(entry.name)) {
                files.push(...(await listFiles(fullPath)));
            }
            continue;
        }
        if (entry.isFile() && isCodeFile(fullPath)) {
            files.push(fullPath);
        }
    }

    return files;
};

const readFileSafe = async (filePath: string): Promise<string> => {
    try {
        return await fs.readFile(filePath, "utf8");
    } catch {
        return "";
    }
};

const collectImports = (content: string): { staticImports: string[]; dynamicImports: string[] } => {
    const staticImports: string[] = [];
    const dynamicImports: string[] = [];
    const staticRegex = /(?:import|export)\s[^"']*?from\s*["']([^"']+)["']/g;
    const requireRegex = /require\(\s*["']([^"']+)["']\s*\)/g;
    const dynamicRegex = /import\(\s*["']([^"']+)["']\s*\)/g;

    let match: RegExpExecArray | null = null;
    while ((match = staticRegex.exec(content)) !== null) {
        staticImports.push(match[1]);
    }
    while ((match = requireRegex.exec(content)) !== null) {
        staticImports.push(match[1]);
    }
    while ((match = dynamicRegex.exec(content)) !== null) {
        dynamicImports.push(match[1]);
    }

    return { staticImports, dynamicImports };
};

const collectWorkerStrings = (content: string): string[] => {
    const matches: string[] = [];
    const workerRegex = /\/workers\/[A-Za-z0-9._-]+/g;
    let match: RegExpExecArray | null = null;

    while ((match = workerRegex.exec(content)) !== null) {
        matches.push(match[0]);
    }

    return matches;
};

const listAppRouterFiles = async (): Promise<string[]> => {
    const appDir = path.join(ROOT, "app");
    try {
        const files = await listFiles(appDir);
        return files
            .map((file) => path.relative(ROOT, file))
            .filter((file) =>
                file.includes("/app/") &&
                (file.endsWith("page.tsx") ||
                    file.endsWith("layout.tsx") ||
                    file.endsWith("route.ts") ||
                    file.endsWith("template.tsx"))
            );
    } catch {
        return [];
    }
};

const runAudit = async (): Promise<AuditOutput> => {
    const files: string[] = [];
    for (const dir of SCAN_DIRS) {
        const fullPath = path.join(ROOT, dir);
        try {
            files.push(...(await listFiles(fullPath)));
        } catch {
            // ignore missing dirs
        }
    }

    const staticImports: Record<string, string[]> = {};
    const dynamicImports: Record<string, string[]> = {};
    const workerStringRefs: WorkerReference[] = [];

    for (const file of files) {
        const content = await readFileSafe(file);
        if (!content) continue;

        const { staticImports: staticRefs, dynamicImports: dynamicRefs } = collectImports(content);
        if (staticRefs.length > 0) {
            staticImports[path.relative(ROOT, file)] = staticRefs;
        }
        if (dynamicRefs.length > 0) {
            dynamicImports[path.relative(ROOT, file)] = dynamicRefs;
        }

        const workerRefs = collectWorkerStrings(content);
        if (workerRefs.length > 0) {
            workerStringRefs.push({
                file: path.relative(ROOT, file),
                matches: workerRefs,
            });
        }
    }

    const packageJsonPath = path.join(ROOT, "package.json");
    const packageScripts: Record<string, string> = {};
    const packageJsonContent = await readFileSafe(packageJsonPath);
    if (packageJsonContent) {
        try {
            const parsed = JSON.parse(packageJsonContent) as { scripts?: Record<string, string> };
            if (parsed.scripts) {
                Object.assign(packageScripts, parsed.scripts);
            }
        } catch {
            // ignore parse errors
        }
    }

    const nextConfigContent = await readFileSafe(path.join(ROOT, "next.config.ts"));
    const nextConfigMatches = nextConfigContent
        ? nextConfigContent.split("\n").filter((line) => line.includes("workers"))
        : [];

    const appRouterFiles = await listAppRouterFiles();

    return {
        generatedAt: new Date().toISOString(),
        filesScanned: files.map((file) => path.relative(ROOT, file)),
        staticImports,
        dynamicImports,
        workerStringRefs,
        packageScripts,
        nextConfigMatches,
        appRouterFiles,
    };
};

const writeOutputs = async (output: AuditOutput): Promise<void> => {
    const outputDir = path.join(ROOT, "docs");
    await fs.mkdir(outputDir, { recursive: true });

    const jsonPath = path.join(outputDir, "audit-dead-code.generated.json");
    await fs.writeFile(jsonPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");

    const markdownPath = path.join(outputDir, "audit-dead-code.generated.md");
    const summaryLines = [
        "# Audit dead code — génération automatique",
        "",
        `Date: ${output.generatedAt}`,
        "",
        `Fichiers scannés: ${output.filesScanned.length}`,
        `Fichiers avec imports statiques: ${Object.keys(output.staticImports).length}`,
        `Fichiers avec imports dynamiques: ${Object.keys(output.dynamicImports).length}`,
        `Références \"/workers/\": ${output.workerStringRefs.length}`,
        "",
        "## Fichiers app router détectés",
        ...output.appRouterFiles.map((file) => `- ${file}`),
        "",
        "## Références workers (string) — aperçu",
        ...output.workerStringRefs.flatMap((entry) =>
            entry.matches.map((match) => `- ${entry.file}: ${match}`)
        ),
    ];

    await fs.writeFile(markdownPath, `${summaryLines.join("\n")}\n`, "utf8");
};

runAudit()
    .then(writeOutputs)
    .catch((error: unknown) => {
        const message = error instanceof Error ? error.message : "Erreur inconnue";
        // eslint-disable-next-line no-console
        console.error("Audit dead code échoué:", message);
        process.exit(1);
    });
