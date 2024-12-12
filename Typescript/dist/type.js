"use strict";
const str = 'sagar';
function printStatuses(message, code) {
    if (typeof code == 'string') {
        console.log(`${message}. Status code:${code.trim()}`);
    }
    else {
        console.log(`${message}. Status code:${code}`);
    }
}
printStatuses("Request was Successfull", 200);
printStatuses("Resource was not Found", '404');
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
