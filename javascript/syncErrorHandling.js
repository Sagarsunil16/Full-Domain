function divide(a,b){
    if(b==0){
        throw new Error("Divisin by Zero is not possible")
    }
    return a/b
}

try {
    let result = divide(5,5)
    console.log(result)
} catch (error) {
    console.log("Error Occured:",error.message)
}