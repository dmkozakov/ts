//Будівельник (Builder) — це шаблон проєктування, який використовується для створення складних об'єктів крок за кроком. Він дозволяє вам виробляти різні типи об'єктів, використовуючи той самий процес будівництва.

class Car {
  constructor(public model: string, public year: number, public color: string) {}
}

class CarBuilder {
  private model: string;
  private year: number;
  private color: string;

  setModel(model: string): CarBuilder {
    this.model = model;

    return this;
  }

  setYear(year: number): CarBuilder {
    this.year = year;
    return this;
  }

  setColor(color: string): CarBuilder {
    this.color = color;

    return this;
  }

  build(): Car {
    return new Car(this.model, this.year, this.color);
  }
}

const builder = new CarBuilder();

const car = builder.setModel("Tesla Model 5").setYear(2023).setColor("Grey").build();

console.log(car);

///////////////////////////////////////////////////////////////////

class QueryBuilder {
  private table: string = "";
  private whereParams: string[] = [];
  private orderBy: string = "";

  from(table: string): QueryBuilder {
    this.table = table;
    return this;
  }

  where(condition: string): QueryBuilder {
    this.whereParams.push(condition);
    return this;
  }

  order(condition: string): QueryBuilder {
    this.orderBy = condition;

    return this;
  }

  build(): DatabaseQuery {
    return new DatabaseQuery(this.table, this.whereParams, this.orderBy);
  }
}

class DatabaseQuery {
  constructor(private table: string, private whereParams: string[], private orderBy: string) {}

  query(): void {
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
