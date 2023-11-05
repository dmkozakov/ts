//Асоціація
class DB {
    connection() {
        console.log("DB connected");
    }
}
class Server {
    constructor(database) {
        this.database = database;
    }
    init() {
        this.database.connection();
    }
}
const db = new DB();
const server = new Server(db);
server.init();
export {};
//# sourceMappingURL=association.js.map