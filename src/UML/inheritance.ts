//Наслідування

class Animal {
  constructor(public name: string) {}

  say() {
    console.log("Nothing to say");
  }
}

class Cat extends Animal {
  constructor(name: string, private speed: number) {
    super(name);
  }

  say() {
    console.log("Meow");
  }

  run(time: number) {
    return `${this.name} ran st the speed of ${this.speed} for ${time} seconds`;
  }
}

const cat = new Cat("Murka", 20);

console.log(cat.run(5));

export {};
