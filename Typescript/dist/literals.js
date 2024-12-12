"use strict";
function roleMessages(role) {
    switch (role) {
        case 'ADMIN':
            console.log('you have admin permission on this site');
            break;
        case 'USER':
            console.log("You have user permission on this site");
            break;
        case 'READ_WRITE':
            console.log('You have read and write permission on this site');
            break;
        default:
            console.log("Unknown user Permission");
    }
}
roleMessages('ADMIN');
