// Фасад (Facade) — це структурний шаблон проєктування, який надає спрощений інтерфейс до складної системи класів, бібліотеки або фреймворку.
class UserService {
    getUser(id) {
        // Fetching user data
        console.log(`Fetching user data for userId: ${id}`);
        return { id, name: "Mango", email: "mango@example.com" };
    }
    updateUser(user) {
        // Updating user info
        console.log(`Updating user: ${JSON.stringify(user)}`);
    }
}
class AddressService {
    getAddress(userId) {
        // Fetching user address
        console.log(`Fetching addresses for userId: ${userId}`);
        return [{ userId, street: "123 Street", city: "City", country: "Country" }];
    }
    updateAddress(userId, address) {
        // Updating user address
        console.log(`Updating address for userId: ${userId}`);
    }
}
class PaymentService {
    getPaymentData(userId) {
        // Fetching user payment data
        console.log(`Fetching payment data for userId: ${userId}`);
        return {
            userId,
            cardNumber: "1234 5678 9012 3456",
            expiryDate: " 01/27",
        };
    }
    updatePaymentData(userId, paymentData) {
        // Updating user payment data
        console.log(`Updating payment data for userId: ${userId}`);
    }
}
class UserProfileFacade {
    constructor(userService, addressService, paymentService) {
        this.userService = userService;
        this.addressService = addressService;
        this.paymentService = paymentService;
    }
    getUserProfile(userId) {
        const user = this.userService.getUser(userId);
        user["addresses"] = this.addressService.getAddress(userId);
        user.paymentData = this.paymentService.getPaymentData(userId);
        console.log(user);
        return user;
    }
    updateUserProfile(userId, userData, address, paymentData) {
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
//# sourceMappingURL=facade.js.map