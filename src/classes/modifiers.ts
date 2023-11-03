class House {
  private tenants: string[] = [];

  constructor(private readonly type: string, private street: string) {}

  public showAddress(this: House) {
    console.log("Address: " + this.street);
  }

  public showType(this: House) {
    console.log("House Type: " + this.type);
  }

  public addTenant(tenant: string) {
    this.tenants.push(tenant);
  }

  public showTenants() {
    console.log(this.tenants);
  }
}

class StoneHouse extends House {
  private chargeOfTheHouse: string;

  constructor(street: string, generalTenant: string) {
    super("stone", street);

    this.chargeOfTheHouse = generalTenant;
    this.addTenant(generalTenant);
  }

  public showTenants() {
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

abstract class Plane {
  protected pilotInCabin = false;

  public sitInPlane() {
    this.pilotInCabin = true;
  }

  public abstract startEngine(): boolean;
}

class Maze extends Plane {
  public startEngine() {
    // Запускаємо винти двигуна.
    return true;
  }
}

class Boeing extends Plane {
  public startEngine() {
    // Розігріваємо реактивні турбіни.
    return true;
  }
}

// class BrokenPlane extends Plane {}

export {};
