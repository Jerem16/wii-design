import type { RmdlBlock, RmdlDoc, RmdlInline } from "./ast";
import { sanitizeUrl } from "./url-policy";

export type ValidationError = Readonly<{
  message: string;
  path?: string;
}>;

function validateInlines(inlines: ReadonlyArray<RmdlInline>, path: string, errors: ValidationError[]): void {
  inlines.forEach((inline, idx) => {
    const here = `${path}.inlines[${idx}]`;

    if (inline.kind === "strong" || inline.kind === "em" || inline.kind === "normal" || inline.kind === "label") {
      validateInlines(inline.inlines, here, errors);
      return;
    }

    if (inline.kind === "pi") {
      validateInlines(inline.inlines, here, errors);
      return;
    }

    if (inline.kind === "link") {
      if (!sanitizeUrl(inline.href)) {
        errors.push({ message: `URL invalide ou interdite: ${inline.href}`, path: `${here}.href` });
      }
      validateInlines(inline.text, `${here}.text`, errors);
      return;
    }

    if (inline.kind === "ab") {
      if (inline.href && !sanitizeUrl(inline.href)) {
        errors.push({ message: `URL invalide ou interdite: ${inline.href}`, path: `${here}.href` });
      }
      validateInlines(inline.text, `${here}.text`, errors);
      return;
    }

    if (inline.kind === "sp" || inline.kind === "br") {
      if (!Number.isFinite(inline.n)) {
        errors.push({ message: `n doit être numérique pour ${inline.kind}`, path: `${here}.n` });
      }
    }
  });
}

function validateBlocks(blocks: ReadonlyArray<RmdlBlock>, path: string, errors: ValidationError[]): void {
  blocks.forEach((block, idx) => {
    const here = `${path}[${idx}]`;
    if (block.kind === "heading" || block.kind === "paragraph") {
      validateInlines(block.inlines, here, errors);
      return;
    }

    if (block.kind === "quote") {
      validateBlocks(block.blocks, `${here}.blocks`, errors);
      return;
    }

    if (block.kind === "list") {
      block.items.forEach((item, itemIdx) => {
        validateBlocks(item.blocks, `${here}.items[${itemIdx}].blocks`, errors);
      });
    }
  });
}

export function validate(doc: RmdlDoc): ReadonlyArray<ValidationError> {
  const errors: ValidationError[] = [];
  validateBlocks(doc.blocks, "doc.blocks", errors);
  return errors;
}
