import React from "react";

export type RmdlQuoteProps = Readonly<{
  by?: string;
  children: React.ReactNode;
}>;

export function RmdlQuote(props: RmdlQuoteProps): React.ReactElement {
  const { by, children } = props;
  return (
    <blockquote className="rmdl-quote">
      <div className="rmdl-quote-content">{children}</div>
      {by ? <footer className="rmdl-quote-by">{by}</footer> : null}
    </blockquote>
  );
}
