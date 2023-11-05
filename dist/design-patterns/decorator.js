// Декоратор (Decorator) — це структурний шаблон проєктування, що дозволяє додавати нові поведінки чи функціональності об'єктам, змінюючи їхню структуру.
class SimpleCoffee {
    cost() {
        return 10;
    }
    description() {
        return "Simple coffee";
    }
}
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    cost() {
        return this.coffee.cost();
    }
    description() {
        return this.coffee.description();
    }
}
class MilkDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 2;
    }
    description() {
        return this.coffee.description() + ", milk";
    }
}
class SugarDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 1;
    }
    description() {
        return this.coffee.description() + ", sugar";
    }
}
let coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
console.log(`${coffee.description()} - ${coffee.cost()} dollars`);
export {};
//# sourceMappingURL=decorator.js.map