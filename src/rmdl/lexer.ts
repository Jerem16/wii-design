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
  const s = raw.trim();
  if (s.length === 0) return attrs;

  let i = 0;
  const len = s.length;

  const isWs = (ch: string): boolean => ch === " " || ch === "\t" || ch === "\n" || ch === "\r";

  const skipWs = (): void => {
    while (i < len && isWs(s[i]!)) i += 1;
  };

  const readName = (): string => {
    const start = i;
    while (i < len) {
      const ch = s[i]!;
      if (isWs(ch) || ch === "=") break;
      i += 1;
    }
    return s.slice(start, i);
  };

  const readQuoted = (quote: '"' | "'"): string => {
    i += 1;

    let out = "";
    while (i < len) {
      const ch = s[i]!;

      if (ch === "\\") {
        const next = i + 1 < len ? s[i + 1] : null;
        if (next === null) {
          i += 1;
          break;
        }
        out += next;
        i += 2;
        continue;
      }

      if (ch === quote) {
        i += 1;
        return out;
      }

      out += ch;
      i += 1;
    }

    return out;
  };

  const readUnquoted = (): string => {
    const start = i;
    while (i < len && !isWs(s[i]!)) i += 1;
    return s.slice(start, i);
  };

  while (i < len) {
    skipWs();
    if (i >= len) break;

    const key = readName();
    if (key.length === 0) break;

    skipWs();

    if (i >= len || s[i] !== "=") {
      attrs[key] = true;
      continue;
    }

    i += 1;
    skipWs();

    if (i >= len) {
      attrs[key] = "";
      break;
    }

    const ch = s[i]!;
    attrs[key] = ch === '"' || ch === "'" ? readQuoted(ch) : readUnquoted();
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
