function sum(num1:number,num2:number,print:boolean,msg:string){
    if(print){
        console.log("Sum of",num1+num2,msg)
    }
    return num1+num2
}

sum(5,44,true,"total")