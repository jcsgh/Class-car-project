class Car{
    constructor(brand, fuelTank, color, year, body, fuel, mpg, odometer){
      this.brand = brand
      this.fuelTank = fuelTank
      this.color = color
      this.year = year
      this.body = body
      this.fuel = fuel
      this.mpg = mpg
      this.odometer = odometer
    }
    
    getDetails(){
      return `${this.color} ${this.year} ${this.brand} `
    }
    
    addFuel(amount){
      if(this.fuel + amount > this.fuelTank){
        this.fuel = this.fuelTank
        console.log("FULL!")
      }else{
      this.fuel += amount
      }
    }
    
    setColor(newColor){
      this.color = newColor
    }
    
    drive(){
      //can only drive IF there is fuel in the tank
        while(this.fuel > 0){
          this.fuel -= 1
          this.odometer += this.mpg
        }
  
    }  
  }
   
  let myCar = new Car("Toyota", 15, "silver", 2019, "sedan", 0, 35, 0)
  let momsCar = new Car("Hyundai", 10, "blue", 1999, "sedan", 0, 28, 0)