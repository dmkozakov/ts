class Animal {
    say() {
        console.log("I`m an animal");
    }
}
class Cat extends Animal {
    say() {
        console.log("Meow");
    }
}
class Dog extends Animal {
    say() {
        console.log("Woof");
    }
}
let animal = new Cat();
animal.say();
animal = new Dog();
animal.say();
export {};
//# sourceMappingURL=polymorphism.js.map