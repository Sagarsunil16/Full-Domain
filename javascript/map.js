//Purpose: Creates a new array by applying a function to each element of the original array.

/*Problem: Double Odd Numbers
Description:
You are given an array of integers. Your task is to create a new array by applying the following rule:

If the number is odd, double it.
If the number is even, keep it the same.
Write a function that uses the map() method to return the modified array.
*/

let arr =[1, 2, 3, 4, 5, 6]
const newArr = arr.map((elem)=>{
    if(elem%2!==0){
        return elem*2
    }else{
        return elem
    }
})

console.log(newArr)