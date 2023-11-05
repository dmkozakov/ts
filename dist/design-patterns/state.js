/* Стан (State) — це поведінковий шаблон проєктування, який дозволяє об'єктам змінювати поведінку, залежно від свого стану. Зовні це виглядає так, начебто об'єкт змінює свій клас.



Давайте створимо приклад, у якому ми моделюємо процес доставлення товару. Це процес, який має кілька станів, таких як "підтверджено", "відправлено", "у дорозі", "доставлено". Залежно від стану, наші дії із замовленням змінюватимуться. */
class Order {
    constructor() {
        this.state = new PendingState();
    }
    proceedToNext() {
        this.state.proceedToNext(this);
    }
    setState(state) {
        this.state = state;
    }
    toString() {
        return this.state.toString();
    }
}
class PendingState {
    proceedToNext(order) {
        console.log("Proceeding from Pending to Shipped...");
        order.setState(new ShippedState());
    }
    toString() {
        return "Pending";
    }
}
class ShippedState {
    proceedToNext(order) {
        console.log("Proceeding from Shipped to Delivered...");
        order.setState(new DeliveredState());
    }
    toString() {
        return "Shipped";
    }
}
class DeliveredState {
    proceedToNext(order) {
        console.log("Already delivered. Thank you!");
    }
    toString() {
        return "Delivered";
    }
}
let order = new Order();
console.log(order.toString());
order.proceedToNext();
console.log(order.toString());
order.proceedToNext();
console.log(order.toString());
order.proceedToNext();
export {};
//# sourceMappingURL=state.js.map