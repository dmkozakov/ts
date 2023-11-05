//Реалізація
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + ", I`m " + this.name);
    }
}
let john = new Person("John", 31);
john.greet("Hi");
export {};
//# sourceMappingURL=implementation.js.map