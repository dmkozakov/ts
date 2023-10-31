class Animal {
  public say() {
    console.log("I`m an animal");
  }
}

class Cat extends Animal {
  public say() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  public say() {
    console.log("Woof");
  }
}

let animal: Animal = new Cat();
animal.say();

animal = new Dog();
animal.say();

export {};
