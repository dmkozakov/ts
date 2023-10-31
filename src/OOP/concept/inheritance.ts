class ClassA {
  public myMethod() {
    return "I`m a class A";
  }
}

class ClassB extends ClassA {
  // inheritance
}

let b = new ClassB();
console.log(b.myMethod());

export {};
