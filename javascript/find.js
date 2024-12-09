//Purpose: Returns the first element that satisfies a specified condition.
const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 90 },
    { name: 'Charlie', grade: 70 }
];

const userData = students.find((stud)=>stud.name==='Alice')
console.log(userData)