let person:{
    name:string,
    age:number,
    address:{
        city:string,
        country:string
    }
} = {
    name:'John',
    age:22,
    address:{
        city:'Delhi',
        country:'Indida'
    }
}

console.log(person.name)
console.log(person['age'])