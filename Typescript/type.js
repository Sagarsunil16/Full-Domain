var str = 'sagar';
function printStatus(message, code) {
    if (typeof code == 'string') {
        console.log("".concat(message, ". Status code:").concat(code.trim()));
    }
    else {
        console.log("".concat(message, ". Status code:").concat(code));
    }
}
printStatus("Request was Successfull", 200);
printStatus("Resource was not Found", '404');
function roleMessage(roles) {
    switch (roles) {
        case "ADMIN":
            console.log("You have an admin permission in this website");
            break;
        case "READ_ONLY":
            console.log("You have an Read_only role in this website");
            break;
        case "WRITE_ONLY":
            console.log("You have an write_only permission in this website");
            break;
        default: console.log("You have no permission in this website");
    }
}
roleMessage("ADMIN");
