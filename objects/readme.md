# JavaScript Objects

## Table of Contents

1. [Objects: The Basics](#1-objects-the-basics)
   - [1.1 Creating Objects](#11-creating-objects)
   - [1.2 Literals and Properties](#12-literals-and-properties)
   - [1.3 Square Brackets](#13-square-brackets)
   - [1.4 Computed Properties](#14-computed-properties)
   - [1.5 Property Value Shorthand](#15-property-value-shorthand)
   - [1.6 Property Names Limitations](#16-property-names-limitations)
   - [1.7 Property Existence Test, "in" Operator](#17-property-existence-test-in-operator)
   - [1.8 The "for..in" Loop](#18-the-forin-loop)
   - [1.9 Summary](#19-summary)

## 1. Objects: The Basics

Objects in JavaScript are used to store keyed collections of various data and more complex entities. They are a fundamental part of the language and are used extensively.

### 1.1 Creating Objects

An object can be created using either the object constructor syntax or the object literal syntax:

```javascript
let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax
```

The object literal syntax `{...}` is more commonly used.

### 1.2 Literals and Properties

You can define properties within an object using key-value pairs:

```javascript
let user = {
  // an object
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};
```

- **Property Key**: A string (also called a "property name" or "identifier") before the colon `":"`.
- **Property Value**: Can be of any type.

Properties can be accessed using dot notation:

```javascript
alert(user.name); // John
alert(user.age); // 30
```

- To add a property:

  ```javascript
  user.isAdmin = true;
  ```

- To remove a property:

  ```javascript
  delete user.age;
  ```

### 1.3 Square Brackets

For multiword property names, use square brackets:

```javascript
let user = {
  name: "John",
  age: 30,
  "likes birds": true, // multiword property name must be quoted
};

// Accessing multiword property
alert(user["likes birds"]); // true
```

### 1.4 Computed Properties

Square brackets can also be used for computed properties:

```javascript
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert(bag.apple); // 5 if fruit="apple"
```

### 1.5 Property Value Shorthand

When property names are the same as variable names, you can use shorthand:

```javascript
function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
  };
}
```

### 1.6 Property Names Limitations

Object property names can be any strings or symbols, including reserved words:

```javascript
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

alert(obj.for + obj.let + obj.return); // 6
```

### 1.7 Property Existence Test, "in" Operator

To check if a property exists in an object:

```javascript
let user = { name: "John", age: 30 };

alert("age" in user); // true
alert("blabla" in user); // false
```

### 1.8 The "for..in" Loop

To iterate over all properties of an object:

```javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  alert(key); // name, age, isAdmin
  alert(user[key]); // John, 30, true
}
```

### 1.9 Summary

Objects in JavaScript are collections of key-value pairs with special features:

- Property keys must be strings or symbols.
- Values can be of any type.
- Access properties using dot notation or square brackets.
- Use `delete` to remove a property.
- Use `"key" in obj` to check if a property exists.
- Use `for (let key in obj)` to iterate over properties.

Objects are a fundamental part of JavaScript, serving as the basis for more complex data structures like arrays, dates, and errors. They are versatile and powerful, allowing for dynamic property access and manipulation.
