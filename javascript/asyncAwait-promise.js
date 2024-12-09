const fetchData = (url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(url ==='valid-url' || url=== 'another-valid-url'){
                resolve(`Data from ${url}`)
            }
            else{
                reject("Invalid URL")
            }
        },3000)
    })
}
//Chain of Promises
fetchData('valid-url')
.then((data)=>{
    console.log('step 1:',data)
    return fetchData('another-valid-url')
})
.then((data)=>{
    console.log('step 2:',data)
    return fetchData('yet-another-valid-url')
})
.then((data)=>{
    console.log('step 3:',data)
})
.catch((error)=>{
    console.log('Error Occured',error)
})

//Equivalent Using async/await
const processData = async()=>{
    try {
        const step1 = await fetchData('valid-url')
        console.log('Step 1:',step1)

        const step2 = await fetchData('another-valid-url')
        console.log('Step 2:',step2)

        const step3 = await fetchData('yet-another-valid-url');
        console.log('Step 3:',step3)

    } catch (error) {
        console.log("Error Occured:",error)
    }
}

processData()