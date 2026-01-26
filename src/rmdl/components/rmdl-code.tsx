import React from "react";

export type RmdlCodeProps = Readonly<{
  lang: string;
  code: string;
}>;

export function RmdlCode(props: RmdlCodeProps): React.ReactElement {
  const { lang, code } = props;
  return (
    <pre className="rmdl-code">
      <code className={`language-${lang}`}>{code}</code>
    </pre>
  );
}
