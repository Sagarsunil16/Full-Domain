type User = {
    name:string,
    age:number
}

function greetuser(user:User){
    const greetmsg = `Hello ${user.name}`
    console.log(greetmsg)
}
greetuser({name:"Pavithra",age:22})

let greet: (usr:User)=>void
greet = greetuser
let newUser = {name:"Sagar",age:23}
greet(newUser)

type add = (x:number,y:number)=>void
let summ:add = (a,b)=>{
    console.log(a+b)
}

summ(1,2)