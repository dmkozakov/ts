// Фабрика забезпечує абстракцію процесу створення об'єктів.

interface PaymentProcessor {
  validate(data: any): boolean;
  pay(amount: number): void;
}

class CreditCardProcessor implements PaymentProcessor {
  validate(data: any): boolean {
    //validation credit card
    return true;
  }

  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

class PayPalProcessor implements PaymentProcessor {
  validate(data: any): boolean {
    // validate PayPal
    return true;
  }

  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal`);
  }
}

class BitcoinProcessor implements PaymentProcessor {
  validate(data: any): boolean {
    // validate Bitcoin
    return true;
  }

  pay(amount: number): void {
    console.log(`Paid ${amount} using Bitcoin`);
  }
}

class PaymentProcessorFactory {
  static createProcessor(type: string): PaymentProcessor {
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
