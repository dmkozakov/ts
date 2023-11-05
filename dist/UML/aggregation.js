// Агрегація
//Характерна особливість агрегації: частини можуть існувати незалежно від цілого.
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Home {
    constructor() {
        this.guests = [];
    }
    getGuests() {
        console.log(this.guests);
    }
    addGuest(guest) {
        this.guests.push(guest);
    }
}
const home = new Home();
const john = new Person("John");
const max = new Person("Max");
const anna = new Person("Anna");
home.addGuest(john);
home.addGuest(max);
home.addGuest(anna);
home.getGuests();
export {};
//# sourceMappingURL=aggregation.js.map