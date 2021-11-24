export function isUndefined(par: any, throwError = true): boolean {
  let parIsUndefined = false;
  if (typeof par == 'undefined') {
    parIsUndefined = true;

    if (throwError) {
      throw new Error(`variable was undefined`);
    }
  }
  return parIsUndefined;
}
