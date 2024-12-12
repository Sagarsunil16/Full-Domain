function createError(errormsg:string,errorCode:number):never{
    throw {message:errormsg,code:errorCode}
}

console.log(createError('Internal server error', 500))