function getData(){
    return [
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
    ]
}
function done(){
    console.log("done")
}
function getUsers(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = getData()
        if(data && data.length>0){
            resolve(data)
        }else{
            reject('No user Found')
        }
        },2000)
    })
}

getUsers().then((data)=>{
    console.log(data,"data")
}).catch((error)=>{
    console.log(error,"error")
}).finally(done())