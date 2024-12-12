"use strict";
function greetuser(user) {
    const greetmsg = `Hello ${user.name}`;
    console.log(greetmsg);
}
greetuser({ name: "Pavithra", age: 22 });
let greet;
greet = greetuser;
let newUser = { name: "Sagar", age: 23 };
greet(newUser);
let summ = (a, b) => {
    console.log(a + b);
};
summ(1, 2);
