//Залежність

type ItemType = {
  name: string;
};

class Catalog {
  showCatalog(items: ItemType[]) {
    items.forEach(item => console.log(item.name));
  }
}

class Items {
  private items: ItemType[] = [];

  setItem(name: string) {
    this.items.push({ name });
  }

  getItems() {
    return this.items;
  }
}

const items = new Items();
const catalog = new Catalog();

items.setItem("Item 1");
items.setItem("Item 2");
items.setItem("Item 3");

catalog.showCatalog(items.getItems());

export {};
