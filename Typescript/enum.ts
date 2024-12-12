enum Roles {
    ADMIN,
    READ_ONLY,
    WRITE_ONLY,
    READ_WRITE
}

const user = {
    name:"Rahul",
    age: 30,
    gender : "male",
    role : Roles.ADMIN
}

if(user.role === Roles.ADMIN){
    console.log('This user is an Admin')
}