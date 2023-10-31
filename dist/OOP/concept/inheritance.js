class ClassA {
    myMethod() {
        return "I`m a class A";
    }
}
class ClassB extends ClassA {
}
let b = new ClassB();
console.log(b.myMethod());
export {};
//# sourceMappingURL=inheritance.js.map