const getData = ()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const data = [
                { username: 'john', email: 'john@test.com' },
                { username: 'jane', email: 'jane@test.com' },
            ]
            if(data &&data.length>0){
                resolve(data)
            }else{
                reject('No users found!')
            }
        },3000)
    })
}   

const fetchUsers = async()=>{
    try {
        console.log('Fetching Users...')
        const data = await getData()
        console.log('users',data)
    } catch (error) {
        console.log('error:',error)
    }
}

fetchUsers()