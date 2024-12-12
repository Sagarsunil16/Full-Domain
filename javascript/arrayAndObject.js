const persons = [
    {name:'Alice',age:25},
    {name:'Bob', age:30},
    {name:'Charlie',age:35}
]
//map
const names = persons.map((person)=>person.name)
console.log(names)
//filter
const adults = persons.filter((person)=>person.age>=30)
console.log(adults)
//reduce
const totalAge = persons.reduce((acc,curr)=>{return acc+curr.age},0)
console.log(totalAge)

//Object methods
const user = {id:1,name:"John",isAdmin:true};
//Object.keys
console.log(Object.keys(user))
//Object.values
console.log(Object.values(user))
//Object.entries
console.log(Object.entries(user))

//object assign
const additionalIndo = {email:'John@gmail.com',age:30}
const fullUser = Object.assign({},user,additionalIndo)
console.log(fullUser)
console.log(user)