//Адаптер (Adapter) — це структурний шаблон проєктування, що дозволяє об'єктам із несумісними інтерфейсами працювати разом. Адаптер обертає один з об'єктів, щоб привести його інтерфейс до іншого.
// OldInterface
class OldService {
    oldRequest() {
        return " Old Service Request";
    }
}
// Adapter that converts old interface to a new one
class Adapter {
    constructor(oldService) {
        this.oldService = oldService;
    }
    request() {
        const result = this.oldService.oldRequest();
        return `Adapter: (TRANSLATED) ${result}`;
    }
}
// Client code to work with new interface
class Client {
    constructor(newInterface) {
        this.newInterface = newInterface;
    }
    useService() {
        console.log(this.newInterface.request());
    }
}
const oldService = new OldService();
const adapter = new Adapter(oldService);
const client = new Client(adapter);
client.useService();
export {};
//# sourceMappingURL=adapter.js.map