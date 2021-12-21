class Car {

    constructor(brand, model, color, year,bodyStyle,fuel,mpg,odometer) {

            this.brand = brand;
            this.model = model;
            this.color = color;
            this.year = year;
            this.bodyStyle = bodyStyle;
            this.fuel = fuel;
            this.mpg = mpg;
            this.odometer = odometer;


    }

// drive - car can only drive if there is fuel in the tank
// for every mile the car drives, the fuel level should change ;)
// Drive until you run out of fuel, increase your odometer

// add fuel - should not allow fuel level to increase higher than the fuel tank capacity

// change color,

// get car details

    drive() {
       if (this.fuel > 0) {
           this.mpg--;
           this.odometer++;
           this.fuel--;
       }
       if(this.fuel === 0) {
           this.addFuel()
       }
    }

    addFuel() {
        this.fuel = 100;
    }

    changeColor(color) {
        
        this.color = color;

    }

    carDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}, Year: ${this.year}, Body style: ${this.bodyStyle}, Fuel: ${this.fuel}, MPG: ${this.mpg}, Odometer: ${this.odometer}`)
    }
}

let Mercedes = new Car("Mercedes-Benz", "S", "black", 2021, "coupe", 100, 29, 0)

Mercedes.changeColor("blue")

for(let i =0; i < 10; i++) {
    Mercedes.drive()
}

Mercedes.carDetails()
