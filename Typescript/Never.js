function createError(errormsg, errorCode) {
    throw { message: errormsg, code: errorCode };
}
console.log(createError('Internal server error', 500));
