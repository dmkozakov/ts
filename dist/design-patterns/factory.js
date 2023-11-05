// Фабрика забезпечує абстракцію процесу створення об'єктів.
class CreditCardProcessor {
    validate(data) {
        //validation credit card
        return true;
    }
    pay(amount) {
        console.log(`Paid ${amount} using Credit Card`);
    }
}
class PayPalProcessor {
    validate(data) {
        // validate PayPal
        return true;
    }
    pay(amount) {
        console.log(`Paid ${amount} using PayPal`);
    }
}
class BitcoinProcessor {
    validate(data) {
        // validate Bitcoin
        return true;
    }
    pay(amount) {
        console.log(`Paid ${amount} using Bitcoin`);
    }
}
class PaymentProcessorFactory {
    static createProcessor(type) {
        switch (type) {
            case "CreditCard":
                return new CreditCardProcessor();
            case "PayPal":
                return new PayPalProcessor();
            case "Bitcoin":
                return new BitcoinProcessor();
            default:
                throw new Error(`Payment method ${type} is not supported`);
        }
    }
}
const processor = PaymentProcessorFactory.createProcessor("CreditCard");
processor.pay(100);
export {};
//# sourceMappingURL=factory.js.map