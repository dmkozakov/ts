// Фасад (Facade) — це структурний шаблон проєктування, який надає спрощений інтерфейс до складної системи класів, бібліотеки або фреймворку.

/* Фасад може полегшити використання складної системи, спрощуючи взаємодію з нею. Замість роботи з безліччю підсистем, клієнтський код може звертатися до фасаду, який своєю чергою координує роботу підсистем.

Уявимо ситуацію, де ми маємо різні сервіси для роботи з даними користувача: UserService для роботи з основною інформацією, AddressService для управління адресами користувача, PaymentService для обробки платіжних даних.

Замість того, щоб клієнтський код взаємодіяв безпосередньо з усіма цими складними API, ми можемо створити клас UserProfileFacade, який надасть простий та зручний інтерфейс для керування всією інформацією про користувача. */

type User = {
  id: number;
  name: string;
  email: string;
};

type Address = {
  userId: number;
  street: string;
  city: string;
  country: string;
};

type PaymentData = {
  userId: number;
  cardNumber: string;
  expiryDate: string;
};

class UserService {
  getUser(id: number): User {
    // Fetching user data
    console.log(`Fetching user data for userId: ${id}`);
    return { id, name: "Mango", email: "mango@example.com" };
  }

  updateUser(user: User): void {
    // Updating user info
    console.log(`Updating user: ${JSON.stringify(user)}`);
  }
}

class AddressService {
  getAddress(userId: number): Address[] {
    // Fetching user address
    console.log(`Fetching addresses for userId: ${userId}`);
    return [{ userId, street: "123 Street", city: "City", country: "Country" }];
  }

  updateAddress(userId: number, address: Address): void {
    // Updating user address
    console.log(`Updating address for userId: ${userId}`);
  }
}

class PaymentService {
  getPaymentData(userId: number): PaymentData {
    // Fetching user payment data

    console.log(`Fetching payment data for userId: ${userId}`);
    return {
      userId,
      cardNumber: "1234 5678 9012 3456",
      expiryDate: " 01/27",
    };
  }

  updatePaymentData(userId: number, paymentData: PaymentData): void {
    // Updating user payment data
    console.log(`Updating payment data for userId: ${userId}`);
  }
}

class UserProfileFacade {
  constructor(
    private userService: UserService,
    private addressService: AddressService,
    private paymentService: PaymentService
  ) {}

  getUserProfile(userId: number): User {
    const user = this.userService.getUser(userId);
    user["addresses"] = this.addressService.getAddress(userId);
    user.paymentData = this.paymentService.getPaymentData(userId);

    console.log(user);

    return user;
  }

  updateUserProfile(
    userId: number,
    userData: User,
    address: Address,
    paymentData: PaymentData
  ): void {
    this.userService.updateUser(userData);
    this.addressService.updateAddress(userId, address);
    this.paymentService.updatePaymentData(userId, paymentData);
  }
}

const userService = new UserService();
const addressService = new AddressService();
const paymentService = new PaymentService();

const user = new UserProfileFacade(userService, addressService, paymentService);
user.getUserProfile(1);

export {};
