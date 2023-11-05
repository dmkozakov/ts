//Адаптер (Adapter) — це структурний шаблон проєктування, що дозволяє об'єктам із несумісними інтерфейсами працювати разом. Адаптер обертає один з об'єктів, щоб привести його інтерфейс до іншого.

// OldInterface

class OldService {
  public oldRequest(): string {
    return " Old Service Request";
  }
}

// New Interface

interface NewInterface {
  request(): string;
}

// Adapter that converts old interface to a new one

class Adapter implements NewInterface {
  constructor(private oldService: OldService) {}

  public request(): string {
    const result = this.oldService.oldRequest();

    return `Adapter: (TRANSLATED) ${result}`;
  }
}

// Client code to work with new interface

class Client {
  constructor(private newInterface: NewInterface) {}

  public useService(): void {
    console.log(this.newInterface.request());
  }
}

const oldService = new OldService();
const adapter = new Adapter(oldService);
const client = new Client(adapter);

client.useService();

export {};
