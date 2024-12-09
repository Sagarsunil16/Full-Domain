//Purpose: Executes a function for each element in the array (no return value).
const fruits = ['apple','orange','banana']
fruits.forEach((fruit)=>console.log(fruit.toUpperCase()))
/*Problem: Double Each Element
Description:
You are given an array of integers. Your task is to create a new array by doubling each element of the original array. You must use the forEach() loop to achieve this.

Write a function that uses forEach() to create the new array with each element doubled.*/

const arr = [1,2,3,4,5]
const double = (arr)=>{
    const result= []
    arr.forEach((elem)=>result.push(elem*2))
    return result
}
const result = double(arr)
console.log(result)