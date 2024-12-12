const user ={
    name:'john',
    age:22,
    profession:'Developer'
}

//basic destructuring
const{name} = user
console.log(name)

// Renaming Variables
const {profession:job} = user
console.log(job)

// Default Values
const {email="john@gmail.com"} = user
console.log(email)

// Nested Destructuring

const person = {
    name:"JOhn",
    address: {
            city:"NewYork",
            country:"USA"
    }
}

const {address:{city,country}} = person
console.log(city,country)