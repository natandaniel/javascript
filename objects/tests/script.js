"use strict";

class User {
  #name = "Nat";

  constructor(name) {
    this.#name = name;
    this.age = 0;
    this._surname = "Dan";
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  getSurname() {
    return this._surname;
  }
}

class ExtendedUser extends User {
  constructor(name, age) {
    super(name);
    this.age = age;

    this.name = "John";
  }
  
}
