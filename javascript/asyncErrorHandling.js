function fetchData(url){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(url==='valid-url'){
                resolve("Data fetched successfully")
            }else{
                reject(new Error('Invalid URL'))
            }
        }, 3000);
    })
}
// Handling with .catch()
fetchData('valid-url').then((data)=>console.log(data))
.then(()=>fetchData('invalid-url'))
.then((data)=>console.log(data))
.catch((error)=>console.log(error.message))