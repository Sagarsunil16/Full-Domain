"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["READ_ONLY"] = 1] = "READ_ONLY";
    Roles[Roles["WRITE_ONLY"] = 2] = "WRITE_ONLY";
    Roles[Roles["READ_WRITE"] = 3] = "READ_WRITE";
})(Roles || (Roles = {}));
const user = {
    name: "Rahul",
    age: 30,
    gender: "male",
    role: Roles.ADMIN
};
if (user.role === Roles.ADMIN) {
    console.log('This user is an Admin');
}
