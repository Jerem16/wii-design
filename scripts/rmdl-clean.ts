/**
 * Nettoie les artefacts générés (Option A).
 */
import fs from "node:fs/promises";
import path from "node:path";

const OUT_ROOT = path.join(process.cwd(), "src", "generated", "rmdl");

async function main(): Promise<void> {
  await fs.rm(OUT_ROOT, { recursive: true, force: true });
  await fs.mkdir(path.join(OUT_ROOT, "pages"), { recursive: true });
  await fs.writeFile(
    path.join(OUT_ROOT, "manifest.ts"),
    'import type React from "react";\nexport const RMDL_PAGES: Readonly<Record<string, () => Promise<Readonly<{ default: React.ComponentType }>>>> = {} as const;\n',
    "utf-8",
  );
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
