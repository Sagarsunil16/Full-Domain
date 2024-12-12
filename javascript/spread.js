/*Arrays
Spread elements of one array into another or into function arguments.*/
const arr = [1,2,3]
const newArr = [...arr,56]
console.log(newArr)
function add(a,b,c){
    return a+b+c
}
console.log(add(...arr))

/*Objects
Merge objects or copy properties using the spread operator.
*/
const user = {
    name:"Alice",
    age:25
}
const additionalInfo = {
    profession:"Engineer",city:"Boston"
}

const mergedUserDetails = {...user,...additionalInfo}
console.log(mergedUserDetails)