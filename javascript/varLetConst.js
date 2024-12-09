/*Variables and Scope
Write examples to demonstrate var, let, and const in different scopes.8*/

const userName = "sagar";
var age = 28; // Globally scoped

let details = () => {
  userName = "Pavithra"; // you cannot reassign a constant variabel
  let gender = "male";
  var age = 28; // Function scoped
  console.log("Details of the given User is:", userName, age, gender);
};

console.log("----Outside The Scope----");

console.log(age); // Accessible - Global Scope
console.log(userName); // Accessible - Global Scope
details(); // Calls the function and logs all details
// console.log(gender) ---No scope
