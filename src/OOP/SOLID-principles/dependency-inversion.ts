//DIP (Dependency inversion principle) - Принцип інверсії залежностей

// Поганий приклад з прямою залежністю від Feeder:

// class Feeder {
//   getFood() {
//     // food deliver logic
//   }
// }

// class Animal {
//   eat() {
//     const feeder = new Feeder();
//     feeder.getFood();
//   }
// }

interface FoodProvider {
  getFood(): void;
}

class Feeder implements FoodProvider {
  getFood() {
    // food deliver logic
  }
}

class Animal {
  private foodProvider: FoodProvider;

  constructor(foodProvider: FoodProvider) {
    this.foodProvider = foodProvider;
  }

  eat() {
    this.foodProvider.getFood();
  }
}

export {};
