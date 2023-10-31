//LSP (Liskov substitution principle) - Принцип заміщення Барбари Лісков
class Vehicle {
}
class Car extends Vehicle {
    engageIgnition() {
        console.log("Engaging car ignition");
    }
    startEngine() {
        this.engageIgnition();
        console.log("Car engine started");
    }
    accelerate() {
        console.log("Car is accelerating");
    }
}
class ElectricBus extends Vehicle {
    increaseVoltage() {
        console.log("Increasing electric bus voltage");
    }
    connectIndividualEngines() {
        console.log("Connecting individual electric bus engines");
    }
    startEngine() {
        console.log("Electric bus engine started");
    }
    accelerate() {
        this.increaseVoltage();
        this.connectIndividualEngines();
        console.log("Electric bus is accelerating");
    }
}
class Driver {
    go(vehicle) {
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
//# sourceMappingURL=Liskov-substitution.js.map