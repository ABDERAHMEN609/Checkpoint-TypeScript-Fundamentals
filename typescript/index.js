// Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Implement the Car class that implements the Vehicle interface
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    // Constructor to initialize make, model, and year properties
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Implement the start method to log a message to the console
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Create an instance of the Car class
  const myCar = new Car("Toyota", "Corolla", 2020);
  
  // Call the start method on the instance
  myCar.start(); // Logs: "Car engine started"
  