//Collect remaining parameters into a single variable.
function sum(...rest){
    return rest.reduce((acc,curr)=>acc+curr)
}
console.log(sum(12,3,12312,4,5423))

/*Destructuring
Extract the rest of the elements or properties.*/
const fruits = ['apple','banana','cherry','dates']
const[first,...restFruits] = fruits
console.log(restFruits)

const user = { name: "Bob", age: 28, profession: "Designer" };
const {name,...restInfo} = user
console.log(restInfo)