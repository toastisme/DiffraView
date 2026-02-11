
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