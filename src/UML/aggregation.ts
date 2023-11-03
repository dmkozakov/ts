// Агрегація

//Характерна особливість агрегації: частини можуть існувати незалежно від цілого.

class Person {
  constructor(public name: string) {}
}

class Home {
  private guests: Person[] = [];

  getGuests() {
    console.log(this.guests);
  }

  addGuest(guest: Person) {
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
