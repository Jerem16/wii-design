import React from "react";

export type RmdlAbProps = Readonly<{
  definition?: string;
  href?: string;
  children: React.ReactNode;
}>;

export function RmdlAb(props: RmdlAbProps): React.ReactElement {
  const { definition, href, children } = props;

  const inner = (
    <span className="rmdl-ab" data-def={definition ?? ""}>
      {children}
    </span>
  );

  if (!href) return inner;

  return (
    <a className="rmdl-ab-link" href={href}>
      {inner}
    </a>
  );
}
