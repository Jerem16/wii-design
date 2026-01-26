import React from "react";

export type RmdlHeadingProps = Readonly<{
  level: 1 | 2 | 3;
  id?: string;
  children: React.ReactNode;
}>;

export function RmdlHeading(props: RmdlHeadingProps): React.ReactElement {
  const { level, id, children } = props;
  const Tag = (`h${level}` as const);
  return <Tag id={id} className={`rmdl-h${level}`}>{children}</Tag>;
}
