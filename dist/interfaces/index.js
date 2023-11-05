function greet(person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}`);
}
const john = {
    firstName: "John",
    lastName: "Doe",
};
class Plane {
    sitInPlane(pilot) {
        this.pilot = pilot;
    }
}
class Boeing extends Plane {
    startEngine() {
        if (!this.pilot) {
            throw new Error("No pilot in cabin");
        }
        console.log("He`re we go again");
        this.pilot.flyMessage();
        return true;
    }
}
export {};
//# sourceMappingURL=index.js.map