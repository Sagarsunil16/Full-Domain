class vehicle{
    constructor(make,model,year){
        this.make = make,
        this.model = model,
        this.year = year
    }
    start(){
    console.log(`starting the ${this.make} ${this.model} ${this.year}`)
    }
    stop(){
        console.log(`stoping the ${this.make} ${this.model} ${this.year}`)
    }
    
}

class car extends vehicle{
    constructor(make,model,year,fuelType,numberOfDoors){
        super(make,model,year,)

        if(!['Petrol','Diesel','Electric'].includes(this.fuelType)){
            throw new Error("Invalid Fuel Type")
        }
        if(this.numberOfDoors<2 || this.numberOfDoors>5){
            throw new Error("Invalid Number of Doors")
        }

        this.fuelType = fuelType,
        this.numberOfDoors = numberOfDoors
        
    }
    
    getDetails(){
        console.log(`${this.make}${this.model}${this.year} fuelType: ${this.fuelType} NumberOfDoors: ${this.numberOfDoors}`)
    }
}

const bmw = new car('BMW ','M2 ',2023,'Petrol',5)
bmw.start()
bmw.stop()
bmw.getDetails()

const Jeep = new car('jeep','Wrangler',2022,'Diesel',5)
Jeep.start()