class House {
    constructor(type, street) {
        this.type = type;
        this.street = street;
        this.tenants = [];
    }
    showAddress() {
        console.log("Address: " + this.street);
    }
    showType() {
        console.log("House Type: " + this.type);
    }
    addTenant(tenant) {
        this.tenants.push(tenant);
    }
    showTenants() {
        console.log(this.tenants);
    }
}
class StoneHouse extends House {
    constructor(street, generalTenant) {
        super("stone", street);
        this.chargeOfTheHouse = generalTenant;
        this.addTenant(generalTenant);
    }
    showTenants() {
        console.log("General: " + this.chargeOfTheHouse);
        super.showTenants();
    }
}
const stoneHouse = new StoneHouse("Stone-world", "Dmytro");
stoneHouse.addTenant("Anton");
stoneHouse.addTenant("Hanna");
stoneHouse.showTenants();
stoneHouse.showType();
stoneHouse.showAddress();
////////////////////////////////////////////////////////////
class Plane {
    constructor() {
        this.pilotInCabin = false;
    }
    sitInPlane() {
        this.pilotInCabin = true;
    }
}
class Maze extends Plane {
    startEngine() {
        // Запускаємо винти двигуна.
        return true;
    }
}
class Boeing extends Plane {
    startEngine() {
        // Розігріваємо реактивні турбіни.
        return true;
    }
}
export {};
//# sourceMappingURL=modifiers.js.map