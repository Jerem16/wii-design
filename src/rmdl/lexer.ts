import type { AllowedTag } from "./schema";
import { isAllowedTag } from "./schema";

export type Token =
  | Readonly<{ kind: "text"; value: string }>
  | Readonly<{
      kind: "tag";
      name: AllowedTag;
      attrs: Readonly<Record<string, string | boolean>>;
    }>
  | Readonly<{ kind: "code"; lang: string; code: string }>
  | Readonly<{ kind: "eol" }>;

function isLowerAscii(s: string): boolean {
  return s === s.toLowerCase();
}

function parseAttrs(raw: string): Readonly<Record<string, string | boolean>> {
  const attrs: Record<string, string | boolean> = {};
  const parts = raw.trim().length === 0 ? [] : raw.trim().split(/\s+/);

  for (const part of parts) {
    const eq = part.indexOf("=");
    if (eq === -1) {
      attrs[part] = true;
      continue;
    }
    const key = part.slice(0, eq);
    let val = part.slice(eq + 1);

    if (
      (val.startsWith('"') && val.endsWith('"') && val.length >= 2) ||
      (val.startsWith("'") && val.endsWith("'") && val.length >= 2)
    ) {
      val = val.slice(1, -1);
    }
    attrs[key] = val;
  }

  return attrs;
}

function readUntilNewline(input: string, start: number): { line: string; next: number } {
  let i = start;
  while (i < input.length && input[i] !== "\n") i += 1;
  return { line: input.slice(start, i), next: i };
}

function isLineStart(input: string, idx: number): boolean {
  return idx === 0 || input[idx - 1] === "\n";
}

export function lex(inputRaw: string): ReadonlyArray<Token> {
  const input = inputRaw.replace(/\r\n/g, "\n");
  const tokens: Token[] = [];
  let i = 0;

  const pushText = (value: string): void => {
    if (value.length === 0) return;
    const last = tokens[tokens.length - 1];
    if (last && last.kind === "text") {
      tokens[tokens.length - 1] = { kind: "text", value: last.value + value };
      return;
    }
    tokens.push({ kind: "text", value });
  };

  while (i < input.length) {
    // code fence: ```lang\n...\n```
    if (isLineStart(input, i) && input.startsWith("```", i)) {
      const header = readUntilNewline(input, i);
      const lang = header.line.slice(3).trim() || "text";

      i = header.next;
      if (i < input.length && input[i] === "\n") i += 1;

      const contentStart = i;

      while (i <= input.length) {
        if (i === input.length) break;

        if (isLineStart(input, i) && input.startsWith("```", i)) {
          const code = input.slice(contentStart, i);
          const closeLine = readUntilNewline(input, i);
          i = closeLine.next;
          if (i < input.length && input[i] === "\n") i += 1;

          tokens.push({ kind: "code", lang, code });
          tokens.push({ kind: "eol" });
          break;
        }

        const nextNl = input.indexOf("\n", i);
        i = nextNl === -1 ? input.length : nextNl + 1;
      }
      continue;
    }

    const ch = input[i];

    if (ch === "\n") {
      tokens.push({ kind: "eol" });
      i += 1;
      continue;
    }

    if (ch === "<") {
      const end = input.indexOf(">", i + 1);
      if (end === -1) {
        pushText(input.slice(i));
        break;
      }

      const inside = input.slice(i + 1, end).trim();
      const space = inside.indexOf(" ");
      const name = (space === -1 ? inside : inside.slice(0, space)).trim();

      if (name.length === 0 || !isLowerAscii(name) || !isAllowedTag(name)) {
        pushText(input.slice(i, end + 1));
        i = end + 1;
        continue;
      }

      const attrsRaw = space === -1 ? "" : inside.slice(space + 1);
      const attrs = parseAttrs(attrsRaw);

      tokens.push({ kind: "tag", name, attrs });
      i = end + 1;
      continue;
    }

    const nextSpecial = (() => {
      const nextLt = input.indexOf("<", i);
      const nextNl = input.indexOf("\n", i);
      if (nextLt === -1) return nextNl;
      if (nextNl === -1) return nextLt;
      return Math.min(nextLt, nextNl);
    })();

    if (nextSpecial === -1) {
      pushText(input.slice(i));
      break;
    }

    pushText(input.slice(i, nextSpecial));
    i = nextSpecial;
  }

  return tokens;
}
