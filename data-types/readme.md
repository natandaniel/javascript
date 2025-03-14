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
   - [2.5 Tests: isFinite and isNaN](#25-tests-isfinite-and-isnan)
   - [2.6 parseInt and parseFloat](#26-parseint-and-parsefloat)
   - [2.7 Other Math Functions](#27-other-math-functions)
   - [2.8 Summary](#28-summary)
3. [Strings](#3-strings)
   - [3.1 Quotes](#31-quotes)
   - [3.2 Special Characters](#32-special-characters)
   - [3.3 String Length](#33-string-length)
   - [3.4 Accessing Characters](#34-accessing-characters)
   - [3.5 Strings are Immutable](#35-strings-are-immutable)
   - [3.6 Changing the Case](#36-changing-the-case)
   - [3.7 Searching for a Substring](#37-searching-for-a-substring)
   - [3.8 Getting a Substring](#38-getting-a-substring)
   - [3.9 Comparing Strings](#39-comparing-strings)
   - [3.10 Summary](#310-summary)
4. [Strings](#4-strings)
   - [4.1 Quotes](#41-quotes)
   - [4.2 Special Characters](#42-special-characters)
   - [4.3 String Length](#43-string-length)
   - [4.4 Accessing Characters](#44-accessing-characters)
   - [4.5 Strings are Immutable](#45-strings-are-immutable)
   - [4.6 Changing the Case](#46-changing-the-case)
   - [4.7 Searching for a Substring](#47-searching-for-a-substring)
   - [4.8 Getting a Substring](#48-getting-a-substring)
   - [4.9 Comparing Strings](#49-comparing-strings)
   - [4.10 Summary](#410-summary)

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

### 2.5 Tests: isFinite and isNaN

JavaScript provides functions to test for finite numbers and NaN (Not-a-Number):

- **isFinite(value)**: Converts the argument to a number and returns `true` if it is a regular number, not `NaN/Infinity/-Infinity`.

  ```javascript
  alert(isFinite("15")); // true
  alert(isFinite("str")); // false, because NaN
  alert(isFinite(Infinity)); // false
  ```

- **isNaN(value)**: Converts the argument to a number and tests if it is `NaN`.

  ```javascript
  alert(isNaN(NaN)); // true
  alert(isNaN("str")); // true, because NaN
  ```

### 2.6 parseInt and parseFloat

These functions convert a string to a number:

- **parseInt(str, radix)**: Parses a string and returns an integer of the specified radix (base).

  ```javascript
  alert(parseInt("100px")); // 100
  alert(parseInt("0xff", 16)); // 255
  ```

- **parseFloat(str)**: Parses a string and returns a floating-point number.

  ```javascript
  alert(parseFloat("12.5em")); // 12.5
  alert(parseFloat("12.3.4")); // 12.3
  ```

### 2.7 Other Math Functions

JavaScript provides a `Math` object with various mathematical functions and constants:

- **Math.random()**: Returns a random number between 0 and 1.

  ```javascript
  alert(Math.random()); // e.g., 0.123456789
  ```

- **Math.max(a, b, c...)** / **Math.min(a, b, c...)**: Returns the maximum/minimum value.

  ```javascript
  alert(Math.max(3, 5, -10, 0, 1)); // 5
  alert(Math.min(1, 2)); // 1
  ```

- **Math.pow(n, power)**: Returns `n` raised to the given power.

  ```javascript
  alert(Math.pow(2, 10)); // 1024
  ```

### 2.8 Summary

- JavaScript numbers are double precision floating point.
- Numbers can be represented in various formats for convenience.
- Rounding methods are available for different rounding needs.
- Precision errors can occur due to the binary representation of numbers.
- Functions like `isFinite`, `isNaN`, `parseInt`, and `parseFloat` help in number parsing and validation.
- The `Math` object provides additional mathematical functions and constants.

For more details, refer to the [Numbers](https://javascript.info/number) tutorial.

## 3. Strings

In JavaScript, strings are used to store and manipulate textual data. They are always encoded in UTF-16.

### 3.1 Quotes

Strings can be enclosed in single quotes, double quotes, or backticks:

```javascript
let single = "single-quoted";
let double = "double-quoted";
let backticks = `backticks`;
```

Backticks allow for embedding expressions using `${…}` and can span multiple lines.

### 3.2 Special Characters

Special characters in strings include:

- `\n`: New line
- `\t`: Tab
- `\\`: Backslash
- `\'`, `\"`, `` \` ``: Escaped quotes

Example:

```javascript
let guestList = "Guests:\n * John\n * Pete\n * Mary";
alert(guestList);
```

### 3.3 String Length

The `length` property returns the length of a string:

```javascript
alert(`My\n`.length); // 3
```

### 3.4 Accessing Characters

Characters can be accessed using square brackets or the `at` method:

```javascript
let str = `Hello`;
alert(str[0]); // H
alert(str.at(-1)); // o
```

### 3.5 Strings are Immutable

Strings cannot be changed in place. To modify a string, create a new one:

```javascript
let str = "Hi";
str = "h" + str[1];
alert(str); // hi
```

### 3.6 Changing the Case

Use `toLowerCase()` and `toUpperCase()` to change the case of a string:

```javascript
alert("Interface".toUpperCase()); // INTERFACE
alert("Interface".toLowerCase()); // interface
```

### 3.7 Searching for a Substring

Use `indexOf`, `includes`, `startsWith`, and `endsWith` to search for substrings:

```javascript
let str = "Widget with id";
alert(str.indexOf("Widget")); // 0
alert(str.includes("id")); // true
```

### 3.8 Getting a Substring

Use `slice`, `substring`, or `substr` to extract parts of a string:

```javascript
let str = "stringify";
alert(str.slice(0, 5)); // "strin"
```

### 3.9 Comparing Strings

Strings are compared by character codes. Use `localeCompare` for language-specific comparisons:

```javascript
alert("Österreich".localeCompare("Zealand")); // -1
```

### 3.10 Summary

- Strings can be enclosed in single, double, or backticks.
- Special characters allow for formatting within strings.
- Strings are immutable; create new strings to modify them.
- Use various methods to search, extract, and compare strings.

For more details, refer to the [Strings](https://javascript.info/string) tutorial.

## 4. Strings

In JavaScript, strings are used to store and manipulate textual data. They are always encoded in UTF-16.

### 4.1 Quotes

Strings can be enclosed in single quotes, double quotes, or backticks:

```javascript
let single = "single-quoted";
let double = "double-quoted";
let backticks = `backticks`;
```

Backticks allow for embedding expressions using `${…}` and can span multiple lines.

### 4.2 Special Characters

Special characters in strings include:

- `\n`: New line
- `\t`: Tab
- `\\`: Backslash
- `\'`, `\"`, `` \` ``: Escaped quotes

Example:

```javascript
let guestList = "Guests:\n * John\n * Pete\n * Mary";
alert(guestList);
```

### 4.3 String Length

The `length` property returns the length of a string:

```javascript
alert(`My\n`.length); // 3
```

### 4.4 Accessing Characters

Characters can be accessed using square brackets or the `at` method:

```javascript
let str = `Hello`;
alert(str[0]); // H
alert(str.at(-1)); // o
```

### 4.5 Strings are Immutable

Strings cannot be changed in place. To modify a string, create a new one:

```javascript
let str = "Hi";
str = "h" + str[1];
alert(str); // hi
```

### 4.6 Changing the Case

Use `toLowerCase()` and `toUpperCase()` to change the case of a string:

```javascript
alert("Interface".toUpperCase()); // INTERFACE
alert("Interface".toLowerCase()); // interface
```

### 4.7 Searching for a Substring

Use `indexOf`, `includes`, `startsWith`, and `endsWith` to search for substrings:

```javascript
let str = "Widget with id";
alert(str.indexOf("Widget")); // 0
alert(str.includes("id")); // true
```

### 4.8 Getting a Substring

Use `slice`, `substring`, or `substr` to extract parts of a string:

```javascript
let str = "stringify";
alert(str.slice(0, 5)); // "strin"
```

### 4.9 Comparing Strings

Strings are compared by character codes. Use `localeCompare` for language-specific comparisons:

```javascript
alert("Österreich".localeCompare("Zealand")); // -1
```

### 4.10 Summary

- Strings can be enclosed in single, double, or backticks.
- Special characters allow for formatting within strings.
- Strings are immutable; create new strings to modify them.
- Use various methods to search, extract, and compare strings.

For more details, refer to the [Strings](https://javascript.info/string) tutorial.
