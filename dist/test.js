"use strict";
class Feeder {
    getFood() {
        // Реалізація процесу постачання їжі
    }
}
class Animal {
    constructor(foodProvider) {
        this.foodProvider = foodProvider;
    }
    eat() {
        this.foodProvider.getFood();
        // Тут описується процес поїдання їжі
    }
}
//# sourceMappingURL=test.js.map