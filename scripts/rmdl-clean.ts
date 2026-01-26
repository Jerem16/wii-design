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
        [
            "/**",
            " * MANIFEST RMDL (Option A) — stub (clean).",
            " * Ne pas modifier à la main.",
            " */",
            "",
            'import type React from "react";',
            "export type RmdlPageModule = Readonly<{ default: React.ComponentType }>;",
            "export type RmdlPageLoader = () => Promise<RmdlPageModule>;",
            "",
            "export const RMDL_PAGES: Readonly<Record<string, RmdlPageLoader>> = {} as const;",
            "",
            "export async function loadRmdlPage(slug: string): Promise<RmdlPageModule | null> {",
            "  const loader = RMDL_PAGES[slug];",
            "  if (!loader) return null;",
            "  return loader();",
            "}",
            ""
        ].join("\n"),
        "utf-8"
    );
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
