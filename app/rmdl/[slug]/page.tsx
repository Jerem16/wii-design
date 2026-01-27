import { notFound } from "next/navigation";
import {
  RMDL_PAGES,
  type RmdlPageLoader,
  type RmdlPageModule,
} from "../../../src/generated/rmdl/manifest";
import type { ReactElement } from "react";
type Props = Readonly<{
  params: Promise<Readonly<{ slug: string }>>;
}>;

export default async function Page({ params }: Props): Promise<ReactElement> {
  const { slug } = await params;

  const loader: RmdlPageLoader | undefined = RMDL_PAGES[slug];
  if (!loader) notFound();

  const mod: RmdlPageModule = await loader();
  const Generated = mod.default;

  return <Generated />;
}
