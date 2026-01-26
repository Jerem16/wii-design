/**
 * Compile RMDL -> TSX (Option A)
 * - Sans bibliothèque externe
 * - Produit : `src/generated/rmdl/pages/*.tsx` + `src/generated/rmdl/manifest.ts`
 *
 * Scaffold : logique minimale, à compléter quand lexer/parser/validator seront prêts.
 */
import fs from "node:fs/promises";
import path from "node:path";

import { lex } from "../src/rmdl/lexer";
import { parse } from "../src/rmdl/parser";
import { validate } from "../src/rmdl/validate";
import { sanitize } from "../src/rmdl/sanitize";
import { emitTsxPage } from "../src/rmdl/compiler/emit-tsx";

const CONTENT_ROOT = path.join(process.cwd(), "src", "assets", "data", "rmdl", "pages");
const OUT_PAGES = path.join(process.cwd(), "src", "generated", "rmdl", "pages");
const OUT_MANIFEST = path.join(process.cwd(), "src", "generated", "rmdl", "manifest.ts");

function slugFromFilename(filename: string): string {
  return filename.replace(/\.rmdl$/i, "");
}

async function ensureDir(dir: string): Promise<void> {
  await fs.mkdir(dir, { recursive: true });
}

async function listRmdlFiles(): Promise<ReadonlyArray<string>> {
  const entries = await fs.readdir(CONTENT_ROOT, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".rmdl"))
    .map((e) => e.name);
}

function makeManifest(slugs: ReadonlyArray<string>): string {
  const lines: string[] = [];
  lines.push("/**");
  lines.push(" * MANIFEST RMDL (Option A) — généré");
  lines.push(" * Ne pas modifier à la main.");
  lines.push(" */");
  lines.push("");
  lines.push('import type React from "react";');
  lines.push('export type RmdlPageModule = Readonly<{ default: React.ComponentType }>;');
  lines.push("export type RmdlPageLoader = () => Promise<RmdlPageModule>;");
  lines.push("");
  lines.push("export const RMDL_PAGES: Readonly<Record<string, RmdlPageLoader>> = {");
  for (const slug of slugs) {
    lines.push(`  "${slug}": () => import("./pages/${slug}"),`);
  }
  lines.push("} as const;");
  lines.push("");
  lines.push("export async function loadRmdlPage(slug: string): Promise<RmdlPageModule | null> {");
  lines.push("  const loader = RMDL_PAGES[slug];");
  lines.push("  if (!loader) return null;");
  lines.push("  return loader();");
  lines.push("}");
  lines.push("");
  return lines.join("\n");
}

async function compileOne(filename: string): Promise<{ slug: string; errors: ReadonlyArray<string> } | { slug: string }> {
  const slug = slugFromFilename(filename);
  const inputPath = path.join(CONTENT_ROOT, filename);
  const raw = await fs.readFile(inputPath, "utf-8");

  const tokens = lex(raw);
  const doc = parse(tokens);
  const errors = validate(doc);

  if (errors.length > 0) {
    return { slug, errors: errors.map((e) => e.message) };
  }

  const safe = sanitize(doc);
  const tsx = emitTsxPage({ slug, doc: safe });
  const hasDoubleBraces = /\{\{"/.test(tsx) && /"\}\}/.test(tsx);
  if (hasDoubleBraces) {
    throw new Error(`TSX invalide généré pour "${slug}" (double accolades).`);
  }

  await ensureDir(OUT_PAGES);
  await fs.writeFile(path.join(OUT_PAGES, `${slug}.tsx`), tsx, "utf-8");

  return { slug };
}

async function main(): Promise<void> {
  await ensureDir(OUT_PAGES);

  const files = await listRmdlFiles();
  const slugs: string[] = [];
  const failures: Array<{ slug: string; errors: ReadonlyArray<string> }> = [];

  for (const file of files) {
    const result = await compileOne(file);
    if ("errors" in result) failures.push(result);
    else slugs.push(result.slug);
  }

  await fs.writeFile(OUT_MANIFEST, makeManifest(slugs), "utf-8");

  if (failures.length > 0) {
    const msg = failures
      .map((f) => `- ${f.slug}:\n${f.errors.map((e) => `  • ${e}`).join("\n")}`)
      .join("\n");
    throw new Error(`RMDL compilation échouée :\n${msg}`);
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
