interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

function greet(person: Person) {
  console.log(`Hello, ${person.firstName} ${person.lastName}`);
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
};

// greet(john);

interface IPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

interface IPilot {
  flyMessage(): void;
}

abstract class Plane {
  protected pilot?: IPilot;

  public sitInPlane(pilot: IPilot): void {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine(): boolean {
    if (!this.pilot) {
      throw new Error("No pilot in cabin");
    }

    console.log("He`re we go again");

    this.pilot.flyMessage();
    return true;
  }
}

export {};
