class MyClass {
  private protectedMethod() {
    return "Something";
  }

  public myPublicMethod() {
    return this.protectedMethod();
  }
}

export {};
