class classA {
    process1() {
        return 1;
    }
    process2() {
        return 2;
    }
    process3() {
        return 3;
    }
    superProcess() {
        return this.process1() + this.process2() + this.process3();
    }
}
export {};
//# sourceMappingURL=abstraction.js.map