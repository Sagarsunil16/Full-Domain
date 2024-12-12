var user1 = null;
function getUser() {
    var uname = "Sagar";
    var uage = 22;
    user1 = { name: uname, age: uage };
    return user1;
}
console.log(getUser());
function printStatus(message, code) {
    if (typeof (code) === 'string') {
        console.log("".concat(message, ".status code of ").concat(code.trim()));
    }
    else {
        console.log("".concat(message, ".status code od ").concat(code));
    }
}
printStatus('Request was successful', 200);
printStatus('Resource was not found', '404');
printStatus('Resource was not found', ' 404');
