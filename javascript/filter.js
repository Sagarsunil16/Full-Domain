//Purpose: Creates a new array with elements that satisfy a specified condition.
/*Problem: Filter Even Numbers
Description:
You are given an array of integers. Your task is to create a new array that contains only the even numbers from the original array.

Write a function that uses the filter() method to return the new array with only even numbers.
*/

const arr = [1, 2, 3, 4, 5, 6]
let evenArr = arr.filter((elem)=>{
    if(elem%2==0){
        return elem
    }
})
console.log(evenArr)