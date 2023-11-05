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
console.log(order.toString()); // Output: Pending
order.proceedToNext();
console.log(order.toString()); // Output: Shipped
order.proceedToNext();
console.log(order.toString()); // Output: Delivered
order.proceedToNext(); // Output: Already delivered. Thank you!
export {};
//# sourceMappingURL=test.js.map