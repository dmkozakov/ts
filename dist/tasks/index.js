"use strict";
// Partial<T>
function sortMenu(menu) {
    return menu.sort();
}
function checkAdult(user) {
    if (Date.now() - user.birthday.getTime() >= 18) {
        return true;
    }
    return false;
}
class Car {
    constructor(brand, year, fuelType) {
        this.brand = brand;
        this.year = year;
        this.fuelType = fuelType;
    }
    getDetails() {
        return {
            brand: this.brand,
            fuelType: this.fuelType,
            year: this.year,
        };
    }
}
class Student {
    constructor(name, studentID, major) {
        this.name = name;
        this.studentID = studentID;
        this.major = major;
    }
    introduce(phrase) {
        return `${phrase}, my name is ${this.name}, my major is ${this.major}`;
    }
}
//# sourceMappingURL=index.js.map