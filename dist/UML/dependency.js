//Залежність
class Catalog {
    showCatalog(items) {
        items.forEach(item => console.log(item.name));
    }
}
class Items {
    constructor() {
        this.items = [];
    }
    setItem(name) {
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
//# sourceMappingURL=dependency.js.map