export function isUndefined(par, throwError = true) {
    let parIsUndefined = false;
    if (typeof par == 'undefined') {
        parIsUndefined = true;
        if (throwError) {
            throw new Error(`variable was undefined`);
        }
    }
    return parIsUndefined;
}
