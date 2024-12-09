console.log('Start') //first in the callStack and gets executed
setTimeout(()=>{
    console.log("Inisde SetTimeout")
},0)                //schedule a callback for the macrotask queue with a delay of 0s

Promise.resolve()
.then(()=>{
    console.log("Inside promise -then")  //schedule a callback for the microtask queue
}).then(()=>{
    console.log("Another Micro task")    //schedule a callback for the microtask queue
})

console.log("End")  //second in the callStack and gets executed

//the macrostask will only get executed when the microtask queue get empty that means the settimeout will get executed at the last 