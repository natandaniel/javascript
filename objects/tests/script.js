"use strict";

let person = {
  name: "Natan",
  age: 20,
  city: "São Paulo",
  country: "Brazil",
  isStudent: true,
  sayHello: function () {
    alert(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  },
};

person.sayHello();
