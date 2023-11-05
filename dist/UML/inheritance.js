//Наслідування
class Animal {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log("Nothing to say");
    }
}
class Cat extends Animal {
    constructor(name, speed) {
        super(name);
        this.speed = speed;
    }
    say() {
        console.log("Meow");
    }
    run(time) {
        return `${this.name} ran st the speed of ${this.speed} for ${time} seconds`;
    }
}
const cat = new Cat("Murka", 20);
console.log(cat.run(5));
export {};
//# sourceMappingURL=inheritance.js.map