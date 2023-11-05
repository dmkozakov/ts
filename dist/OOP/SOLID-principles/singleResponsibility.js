//SRP (Single responsibility principle) - Принцип єдиної відповідальності
// "Кожен клас повинен мати одну і лише одну причину зміни"
// Невірно: клас робить занадто багато речей
// class User {
//   public name: string;
//   public email: string;
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
//   public save(): void{}
//   public sendEmail(message:string): void{}
// }
// Вірно: кожен клас виконує тільки одну задачу
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    save() { }
}
class EmailService {
    sendEmail(user, message) { }
}
export {};
//# sourceMappingURL=singleResponsibility.js.map