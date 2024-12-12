class validateError extends Error{
    constructor(message){
        super(message)
        this.name = 'validateError'
    }
}

function validateAge(age){
    if(age<18){
        throw new validateError("Age must be at least 18")
    }

    console.log("Age is valid")
}

try {
    const age = validateAge(15)
    console.log(age)
} catch (error) {
    if(error instanceof validateError){
        console.log("Validation error:",error.message)
    }else{
        console.log("Validation error:",error.message)
    }
}