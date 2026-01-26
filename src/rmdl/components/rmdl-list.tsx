import React from "react";

export type RmdlListKind = "l" | "ol" | "l2" | "ol2";

export type RmdlListProps = Readonly<{
  kind: RmdlListKind;
  children: React.ReactNode;
}>;

export function RmdlList(props: RmdlListProps): React.ReactElement {
  const { kind, children } = props;
  const Tag = kind === "ol" || kind === "ol2" ? "ol" : "ul";
  return <Tag className={`rmdl-list rmdl-${kind}`}>{children}</Tag>;
}
