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