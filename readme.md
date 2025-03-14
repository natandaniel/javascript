# JavaScript Learning Examples

This repository contains a collection of JavaScript examples designed to illustrate various features and concepts of the language. It serves as a reference for understanding JavaScript through practical examples.

## Table of Contents

1. [Classes](#1-classes)
   - [1.1 Class Basic Syntax](#11-class-basic-syntax)
   - [1.2 What is a Class?](#12-what-is-a-class)
   - [1.3 Not Just Syntactic Sugar](#13-not-just-syntactic-sugar)
   - [1.4 Class Expression](#14-class-expression)
   - [1.5 Getters/Setters](#15-getterssetters)
   - [1.6 Computed Names](#16-computed-names)
   - [1.7 Class Fields](#17-class-fields)
   - [1.8 Summary](#18-summary)

## 1. Classes

Classes in JavaScript provide a template for creating objects, encapsulating data with code to work on that data. They are a fundamental part of object-oriented programming in JavaScript.

### 1.1 Class Basic Syntax

The basic syntax for defining a class in JavaScript is:

```javascript
class MyClass {
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
}
```

To create a new object, use `new MyClass()`. The `constructor()` method is called automatically, allowing you to initialize the object.

Example:

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }
}

let user = new User("John");
user.sayHi(); // John
```

### 1.2 What is a Class?

A class in JavaScript is essentially a function. The `class` syntax is a more convenient way to create constructor functions and prototype methods.

```javascript
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

alert(typeof User); // function
```

### 1.3 Not Just Syntactic Sugar

While classes can be seen as syntactic sugar over constructor functions, they introduce several important features:

- Classes must be called with `new`.
- Class methods are non-enumerable.
- Classes always use strict mode.

### 1.4 Class Expression

Classes can be defined inside expressions, similar to function expressions:

```javascript
let User = class {
  sayHi() {
    alert("Hello");
  }
};
```

### 1.5 Getters/Setters

Classes can include getters and setters for encapsulating data:

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }
}
```

### 1.6 Computed Names

Classes support computed method names using brackets:

```javascript
class User {
  ["say" + "Hi"]() {
    alert("Hello");
  }
}

new User().sayHi();
```

### 1.7 Class Fields

Class fields allow properties to be defined directly within the class:

```javascript
class User {
  name = "John";

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

new User().sayHi(); // Hello, John!
```

### 1.8 Summary

Classes in JavaScript provide a structured way to create objects and encapsulate functionality. They offer a more readable and organized syntax compared to traditional constructor functions and prototype methods.

For more details, refer to the [Classes](https://javascript.info/class) tutorial.

## Folder Structure

- **fundamentals**: This subfolder includes examples of fundamental JavaScript features, providing a foundation for understanding the basics of the language.
