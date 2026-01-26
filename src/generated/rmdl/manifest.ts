/**
 * MANIFEST RMDL (Option A) — généré
 * Ne pas modifier à la main.
 */

import type React from "react";
export type RmdlPageModule = Readonly<{ default: React.ComponentType }>;
export type RmdlPageLoader = () => Promise<RmdlPageModule>;

export const RMDL_PAGES: Readonly<Record<string, RmdlPageLoader>> = {
  "etape-1": () => import("./pages/etape-1"),
} as const;

export async function loadRmdlPage(slug: string): Promise<RmdlPageModule | null> {
  const loader = RMDL_PAGES[slug];
  if (!loader) return null;
  return loader();
}
