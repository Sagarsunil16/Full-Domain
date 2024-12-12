function greetuser(user) {
    var greetmsg = "Hello ".concat(user.name);
    console.log(greetmsg);
}
greetuser({ name: "Pavithra", age: 22 });
var greet;
greet = greetuser;
var newUser = { name: "Sagar", age: 23 };
greet(newUser);
