//Purpose: Reduces an array to a single value by applying a function.
/*Problem: Sum of Positive Numbers
Description:
You are given an array of integers. Your task is to calculate the sum of all the positive numbers in the array using the reduce() method. Ignore negative numbers and zero.

Write a function that uses the reduce() method to return the sum of all positive numbers in the array.
*/

const arr = [1, -2, 3, 4, -1, 5]
let sumOfPos = arr.reduce((acc,curr)=>{
    if(curr>0){
        return acc+curr
    }
    return acc
},0)

console.log(sumOfPos)