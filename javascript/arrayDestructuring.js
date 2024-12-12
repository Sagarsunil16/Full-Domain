const fruits = ['apple','banana','Orange']
// Basic Destructuring
const [first,second,third] = fruits
console.log(first)
// Skipping Elements
const [firstelem,,thirdelem] = fruits
console.log(firstelem,thirdelem)

// Using Default Values
const [value1,value2,value3='apple'] = ['banana','orange']
console.log(value1,value2,value3)