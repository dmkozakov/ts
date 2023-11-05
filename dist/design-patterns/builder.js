//Будівельник (Builder) — це шаблон проєктування, який використовується для створення складних об'єктів крок за кроком. Він дозволяє вам виробляти різні типи об'єктів, використовуючи той самий процес будівництва.
class Car {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
}
class CarBuilder {
    setModel(model) {
        this.model = model;
        return this;
    }
    setYear(year) {
        this.year = year;
        return this;
    }
    setColor(color) {
        this.color = color;
        return this;
    }
    build() {
        return new Car(this.model, this.year, this.color);
    }
}
const builder = new CarBuilder();
const car = builder.setModel("Tesla Model 5").setYear(2023).setColor("Grey").build();
console.log(car);
///////////////////////////////////////////////////////////////////
class QueryBuilder {
    constructor() {
        this.table = "";
        this.whereParams = [];
        this.orderBy = "";
    }
    from(table) {
        this.table = table;
        return this;
    }
    where(condition) {
        this.whereParams.push(condition);
        return this;
    }
    order(condition) {
        this.orderBy = condition;
        return this;
    }
    build() {
        return new DatabaseQuery(this.table, this.whereParams, this.orderBy);
    }
}
class DatabaseQuery {
    constructor(table, whereParams, orderBy) {
        this.table = table;
        this.whereParams = whereParams;
        this.orderBy = orderBy;
    }
    query() {
        let query = `Select * From ${this.table}`;
        if (this.whereParams.length) {
            query += ` where ${this.whereParams.join(" and ")}`;
        }
        if (this.orderBy) {
            query += ` order by ${this.orderBy}`;
        }
        console.log(`Executing query: ${query}`);
    }
}
const queryBuilder = new QueryBuilder();
const dbQuery = queryBuilder
    .from("Users")
    .where("age > 21")
    .where("status = active")
    .order("lastName")
    .build();
dbQuery.query();
export {};
//# sourceMappingURL=builder.js.map