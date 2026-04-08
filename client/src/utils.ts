
/**
 * Convert space-separated "key=value" advanced options into Phil-format blocks.
 * Dots in keys denote nesting: "a.b.c=1" → "a {\n  b {\n    c = 1\n  }\n}"
 */
export function advancedOptionsToPhil(advancedOptions: string): string {
  if (!advancedOptions.trim()) return "";

  // Build a nested object tree from dotted keys
  const tree: Record<string, unknown> = {};
  for (const pair of advancedOptions.trim().split(/\s+/)) {
    const eqIdx = pair.indexOf("=");
    if (eqIdx === -1) continue;
    const key = pair.slice(0, eqIdx);
    const value = pair.slice(eqIdx + 1);
    const parts = key.split(".");
    let node = tree;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!(parts[i] in node) || typeof node[parts[i]] !== "object") {
        node[parts[i]] = {};
      }
      node = node[parts[i]] as Record<string, unknown>;
    }
    node[parts[parts.length - 1]] = value;
  }

  const renderTree = (node: Record<string, unknown>, indent: number): string => {
    const pad = "  ".repeat(indent);
    return Object.entries(node).map(([k, v]) => {
      if (typeof v === "object" && v !== null) {
        const inner = renderTree(v as Record<string, unknown>, indent + 1);
        return `${pad}${k} {\n${inner}\n${pad}}`;
      }
      return `${pad}${k} = ${v as string}`;
    }).join("\n");
  };

  return "\n" + renderTree(tree, 0);
}

export function isNumber(n: string): boolean {
  const singleNumberPattern = /^\d*\.?\d*$/;
  return (singleNumberPattern.test(n) && n !== ".");
}

export function isInt(n: string): boolean {
  const singleIntPattern = /^[\d]+$/;
  return singleIntPattern.test(n);
}

export function isTwoNumbersWithComma(n: string): boolean {
  const twoNumbersCommaPattern = /^[0-9]+,[0-9]+$/;
  return twoNumbersCommaPattern.test(n);
}