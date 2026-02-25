import React from "react";
import Link from "next/link";

export type RmdlLinkProps = Readonly<{
  href: string;
  ext: boolean;
  cta: boolean;
  dl: boolean;
  children: React.ReactNode;
}>;

export function RmdlLink(props: RmdlLinkProps): React.ReactElement {
  const { href, ext, cta, dl, children } = props;
  const className = cta ? "rmdl-a rmdl-cta" : "rmdl-a";

  if (ext) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        download={dl || undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
