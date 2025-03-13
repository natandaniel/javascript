# JavaScript Primitives and Methods

This document explores the methods available for JavaScript primitives, illustrating how they can be used as if they were objects, despite being primitive types.

## Table of Contents

1. [Methods of Primitives](#1-methods-of-primitives)
   - [1.1 Primitives vs. Objects](#11-primitives-vs-objects)
   - [1.2 A Primitive as an Object](#12-a-primitive-as-an-object)
   - [1.3 Summary](#13-summary)

## 1. Methods of Primitives

JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects, providing methods to call on them. This section explains how this works, given that primitives are not objects.

### 1.1 Primitives vs. Objects

- **Primitives**: Values of primitive types, including `string`, `number`, `bigint`, `boolean`, `symbol`, `null`, and `undefined`.
- **Objects**: Capable of storing multiple values as properties and can be created using `{}`. Functions are also objects in JavaScript.

Example of an object with a method:

```javascript
let john = {
  name: "John",
  sayHi: function () {
    alert("Hi buddy!");
  },
};

john.sayHi(); // Hi buddy!
```

### 1.2 A Primitive as an Object

JavaScript provides a mechanism to use methods on primitives by creating temporary "object wrappers":

1. Primitives remain as single values.
2. The language allows access to methods and properties of strings, numbers, booleans, and symbols.
3. A special "object wrapper" is created temporarily to provide extra functionality and then destroyed.

Example of using a string method:

```javascript
let str = "Hello";
alert(str.toUpperCase()); // HELLO
```

- **String Method**: `str.toUpperCase()` creates a temporary object to call the method and then returns a new string.
- **Number Method**: `n.toFixed(2)` rounds a number to a given precision.

```javascript
let n = 1.23456;
alert(n.toFixed(2)); // 1.23
```

**Note**: `null` and `undefined` do not have methods or corresponding "wrapper objects".

### 1.3 Summary

- Primitives, except `null` and `undefined`, provide many helpful methods.
- These methods work via temporary objects, optimized by JavaScript engines to be efficient.
- Primitives cannot store additional data, as demonstrated by the inability to add properties to them.

For more details, refer to the [Methods of Primitives](https://javascript.info/primitives-methods) tutorial.
