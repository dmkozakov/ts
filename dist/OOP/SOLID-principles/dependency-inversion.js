//DIP (Dependency inversion principle) - Принцип інверсії залежностей
class Feeder {
    getFood() {
        // food deliver logic
    }
}
class Animal {
    constructor(foodProvider) {
        this.foodProvider = foodProvider;
    }
    eat() {
        this.foodProvider.getFood();
    }
}
export {};
//# sourceMappingURL=dependency-inversion.js.map