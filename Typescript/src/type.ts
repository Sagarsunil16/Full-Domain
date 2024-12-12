type stringType = string
const str :stringType = 'sagar';

type stringOrNumber = string|number;

function printStatuses(message:string,code:stringOrNumber){
    if(typeof code == 'string'){
        console.log(`${message}. Status code:${code.trim()}`)
    }else{
        console.log(`${message}. Status code:${code}`)
    }
}

printStatuses("Request was Successfull",200)
printStatuses("Resource was not Found",'404')


type role = 'ADMIN' | 'READ_ONLY' | 'WRITE_ONLY'

function roleMessage(roles:role){
    switch(roles){
        case "ADMIN":
            console.log("You have an admin permission in this website")
            break;

        case "READ_ONLY":
            console.log("You have an Read_only role in this website")
            break;
        case "WRITE_ONLY":
            console.log("You have an write_only permission in this website")
            break;
        default:console.log("You have no permission in this website")
        
    }
}

roleMessage("ADMIN")