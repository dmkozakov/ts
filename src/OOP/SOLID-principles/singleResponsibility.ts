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
  public name: string;
  public email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  public save(): void {}
}

class EmailService {
  public sendEmail(user: User, message: string): void {}
}

export {};
