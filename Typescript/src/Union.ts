let user1:{name:string,age:number} | null = null
function getUser(){
   const uname = "Sagar";
   const uage = 22
   user1 = {name:uname,age:uage}
   return user1
}

console.log(getUser())

function printStatus(message:string,code:Number|string|boolean|null){
    if(typeof(code) === 'string'){
        console.log(`${message}.status code of ${code.trim()}`)
    }else{
        console.log(`${message}.status code od ${code}`)
    }
}


printStatus('Request was successful', 200);
printStatus('Resource was not found', '404');
printStatus('Resource was not found', ' 404');