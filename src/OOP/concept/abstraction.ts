class classA {
  private process1() {
    return 1;
  }

  private process2() {
    return 2;
  }

  private process3() {
    return 3;
  }

  public superProcess() {
    return this.process1() + this.process2() + this.process3();
  }
}

export {};
