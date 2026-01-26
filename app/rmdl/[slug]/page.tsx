import React from "react";
import { notFound } from "next/navigation";
import { loadRmdlPage } from "../../../src/generated/rmdl/manifest";

type PageProps = Readonly<{
  params: Readonly<{ slug: string }>;
}>;

export default async function Page({ params }: PageProps): Promise<React.ReactElement> {
  const mod = await loadRmdlPage(params.slug);
  if (!mod) return notFound();

  const Comp = mod.default;
  return <Comp />;
}
