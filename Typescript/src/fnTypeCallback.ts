type fnType = (name:string,age:number)=>string|number

let greetUser:fnType = (name,age)=>{
    console.log(`Hello ${name}`)
    return `${name}${age}`
}

console.log(greetUser("sagar",25))