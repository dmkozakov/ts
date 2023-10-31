//LSP (Liskov substitution principle) - Принцип заміщення Барбари Лісков

abstract class Vehicle {
  abstract startEngine(): void;
  abstract accelerate(): void;
}

class Car extends Vehicle {
  private engageIgnition() {
    console.log("Engaging car ignition");
  }

  startEngine(): void {
    this.engageIgnition();
    console.log("Car engine started");
  }

  accelerate() {
    console.log("Car is accelerating");
  }
}

class ElectricBus extends Vehicle {
  private increaseVoltage() {
    console.log("Increasing electric bus voltage");
  }

  private connectIndividualEngines() {
    console.log("Connecting individual electric bus engines");
  }

  startEngine(): void {
    console.log("Electric bus engine started");
  }

  accelerate() {
    this.increaseVoltage();
    this.connectIndividualEngines();
    console.log("Electric bus is accelerating");
  }
}

class Driver {
  go(vehicle: Vehicle) {
    vehicle.startEngine();
    vehicle.accelerate();
  }
}

const car = new Car();
const bus = new ElectricBus();
const driver = new Driver();

driver.go(car);
driver.go(bus);

export {};
