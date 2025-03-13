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
2. [Copying Objects](#2-copying-objects)
   - [2.1 Objects are Copied by Reference](#21-objects-are-copied-by-reference)
   - [2.2 Cloning and Merging, `Object.assign`](#22-cloning-and-merging-objectassign)
   - [2.3 Deep Cloning](#23-deep-cloning)
   - [2.4 Summary](#24-summary)
3. [Garbage Collection](#3-garbage-collection)
   - [3.1 Reachability](#31-reachability)
   - [3.2 Simple Examples](#32-simple-examples)
   - [3.3 Interlinked Objects](#33-interlinked-objects)
   - [3.4 Internal Algorithms](#34-internal-algorithms)
   - [3.5 Summary](#35-summary)

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

## 2. Copying Objects

### 2.1 Objects are Copied by Reference

One of the fundamental differences between objects and primitives in JavaScript is that objects are stored and copied "by reference", whereas primitive values like strings, numbers, and booleans are always copied "as a whole value".

For example, when you copy a primitive value:

```javascript
let message = "Hello!";
let phrase = message;
```

Both `message` and `phrase` store the string `"Hello!"` independently.

However, objects behave differently:

```javascript
let user = {
  name: "John",
};

let admin = user; // copy the reference

admin.name = "Pete"; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference
```

Here, `user` and `admin` reference the same object, so changes via one reference are visible through the other.

### 2.2 Cloning and Merging, `Object.assign`

To duplicate an object, you can create a new object and replicate the structure of the existing one:

```javascript
let user = {
  name: "John",
  age: 30,
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

clone.name = "Pete"; // changed the data in it

alert(user.name); // still John in the original object
```

Alternatively, use `Object.assign` for a shallow copy:

```javascript
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true
```

### 2.3 Deep Cloning

For deep cloning, where nested objects are also copied, use `structuredClone`:

```javascript
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = structuredClone(user);

alert(user.sizes === clone.sizes); // false, different objects
```

The `structuredClone` method can clone most data types, such as objects, arrays, and primitive values. It can also handle circular references.

For more complex cases, consider using libraries like `_.cloneDeep` from lodash.

### 2.4 Summary

Copying objects in JavaScript can be done in several ways:

- **Objects are copied by reference**: Changes to the original object are reflected in all copies.
- **Shallow copying with `Object.assign`**: Copies only the top-level properties.
- **Deep cloning with `structuredClone`**: Creates a completely new object with all nested properties copied.

Choose the method that best fits your needs based on the complexity of the objects you're working with.

## 3. Garbage Collection

### 3.1 Reachability

The main concept of memory management in JavaScript is _reachability_. Reachable values are those that are accessible or usable somehow and are guaranteed to be stored in memory.

1. **Roots**: These are inherently reachable values, such as:

   - The currently executing function, its local variables, and parameters.
   - Other functions on the current chain of nested calls, their local variables, and parameters.
   - Global variables.

2. **Reference Chains**: Any other value is considered reachable if it's reachable from a root by a reference or by a chain of references.

The garbage collector monitors all objects and removes those that have become unreachable.

### 3.2 Simple Examples

Consider the following example:

```javascript
let user = {
  name: "John",
};

user = null;
```

Here, the object `{name: "John"}` becomes unreachable when `user` is set to `null`, allowing the garbage collector to remove it.

If multiple references exist:

```javascript
let user = {
  name: "John",
};

let admin = user;

user = null;
```

The object remains reachable through `admin`.

### 3.3 Interlinked Objects

Complex structures can be created with interlinked objects:

```javascript
function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry(
  {
    name: "John",
  },
  {
    name: "Ann",
  }
);
```

If references are removed:

```javascript
delete family.father;
delete family.mother.husband;
```

John becomes unreachable and is removed from memory.

### 3.4 Internal Algorithms

The basic garbage collection algorithm is called "mark-and-sweep":

- The garbage collector marks roots and all reachable references.
- Unmarked objects are considered unreachable and are removed.

Optimizations include:

- **Generational collection**: Objects are split into "new" and "old" sets.
- **Incremental collection**: The object set is split into parts for collection.
- **Idle-time collection**: Runs when the CPU is idle.

### 3.5 Summary

- Garbage collection is automatic.
- Objects are retained in memory while they are reachable.
- Interlinked objects can become unreachable as a whole.

Modern engines implement advanced algorithms for garbage collection, ensuring efficient memory management.
