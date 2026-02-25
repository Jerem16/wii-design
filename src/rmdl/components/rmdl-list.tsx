import React from "react";

export type RmdlListKind = "l" | "ol" | "l2" | "ol2";

export type RmdlListProps = Readonly<{
  kind: RmdlListKind;
  children: React.ReactNode;
  className?: string;
}>;

function resolveListTag(kind: RmdlListKind): "ol" | "ul" {
  return kind === "ol" || kind === "ol2" ? "ol" : "ul";
}

export function RmdlList(props: RmdlListProps): React.ReactElement {
  const { kind, children, className } = props;
  const Tag = resolveListTag(kind);
  const classes = className ? `rmdl-list rmdl-${kind} ${className}` : `rmdl-list rmdl-${kind}`;
  return <Tag className={classes}>{children}</Tag>;
}
