# JavaScript Primitives and Methods

This document explores the methods available for JavaScript primitives, illustrating how they can be used as if they were objects, despite being primitive types.

## Table of Contents

1. [Methods of Primitives](#1-methods-of-primitives)
   - [1.1 Primitives vs. Objects](#11-primitives-vs-objects)
   - [1.2 A Primitive as an Object](#12-a-primitive-as-an-object)
   - [1.3 Summary](#13-summary)
2. [Numbers](#2-numbers)
   - [2.1 More Ways to Write a Number](#21-more-ways-to-write-a-number)
   - [2.2 toString(base)](#22-tostringbase)
   - [2.3 Rounding](#23-rounding)
   - [2.4 Imprecise Calculations](#24-imprecise-calculations)
   - [2.5 Summary](#25-summary)

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

## 2. Numbers

In modern JavaScript, numbers are stored in 64-bit format IEEE-754, known as "double precision floating point numbers". This section expands on how numbers are represented and manipulated in JavaScript.

### 2.1 More Ways to Write a Number

JavaScript allows numbers to be written in various formats for readability and convenience:

- **Underscore as Separator**: Improves readability by separating digits.

  ```javascript
  let billion = 1_000_000_000;
  ```

- **Exponential Notation**: Uses `e` to denote powers of 10.

  ```javascript
  let billion = 1e9; // 1 billion
  alert(7.3e9); // 7.3 billion
  ```

- **Hex, Binary, and Octal**: Use prefixes `0x`, `0b`, and `0o` respectively.

  ```javascript
  alert(0xff); // 255
  let a = 0b11111111; // 255
  let b = 0o377; // 255
  ```

### 2.2 toString(base)

The `num.toString(base)` method converts a number to a string in the specified base (2 to 36).

```javascript
let num = 255;
alert(num.toString(16)); // "ff"
alert(num.toString(2)); // "11111111"
```

### 2.3 Rounding

JavaScript provides several methods for rounding numbers:

- **Math.floor**: Rounds down.
- **Math.ceil**: Rounds up.
- **Math.round**: Rounds to the nearest integer.
- **Math.trunc**: Removes the decimal part.

```javascript
alert(Math.floor(3.1)); // 3
alert(Math.ceil(3.1)); // 4
alert(Math.round(3.5)); // 4
alert(Math.trunc(3.1)); // 3
```

### 2.4 Imprecise Calculations

Due to the binary representation of numbers, some calculations may result in precision errors.

```javascript
alert(0.1 + 0.2 == 0.3); // false
alert((0.1 + 0.2).toFixed(20)); // "0.30000000000000004441"
```

### 2.5 Summary

- JavaScript numbers are double precision floating point.
- Numbers can be represented in various formats for convenience.
- Rounding methods are available for different rounding needs.
- Precision errors can occur due to the binary representation of numbers.

For more details, refer to the [Numbers](https://javascript.info/number) tutorial.
