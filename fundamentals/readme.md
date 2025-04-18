# JavaScript Fundamentals

## Table of Contents

1. [The `<script>` Tag](#1-the-script-tag)
   - [1.1 Key Points](#11-key-points)
   - [1.2 Placement in HTML](#12-placement-in-html)
2. [Code Structure](#2-code-structure)
   - [2.1 Statements](#21-statements)
   - [2.2 Semicolons](#22-semicolons)
   - [2.3 Comments](#23-comments)
3. ["use strict" Mode](#3-use-strict-mode)
   - [3.1 Key Points](#31-key-points)
4. [Variables and Constants](#4-variables-and-constants)
   - [4.1 Variables](#41-variables)
   - [4.2 Constants](#42-constants)
   - [4.3 Best Practices](#43-best-practices)
5. [Data Types](#5-data-types)
   - [5.1 Primitive Types](#51-primitive-types)
   - [5.2 Non-Primitive Type](#52-non-primitive-type)
   - [5.3 The `typeof` Operator](#53-the-typeof-operator)
6. [User Interaction: Alert, Prompt, and Confirm](#6-user-interaction-alert-prompt-and-confirm)
   - [6.1 Alert](#61-alert)
   - [6.2 Prompt](#62-prompt)
   - [6.3 Confirm](#63-confirm)
   - [6.4 Characteristics](#64-characteristics)
7. [Type Conversions](#7-type-conversions)
   - [7.1 String Conversion](#71-string-conversion)
   - [7.2 Numeric Conversion](#72-numeric-conversion)
   - [7.3 Boolean Conversion](#73-boolean-conversion)
8. [Operators](#8-operators)
   - [8.1 Basic Math Operators](#81-basic-math-operators)
   - [8.2 String Concatenation](#82-string-concatenation)
   - [8.3 Unary Operators](#83-unary-operators)
   - [8.4 Operator Precedence](#84-operator-precedence)
   - [8.5 Increment/Decrement](#85-incrementdecrement)
   - [8.6 Assignment Operators](#86-assignment-operators)
   - [8.7 Comma Operator](#87-comma-operator)
   - [8.8 Bitwise Operators](#88-bitwise-operators)
9. [Comparisons](#9-comparisons)
   - [9.1 Basic Comparison Operators](#91-basic-comparison-operators)
   - [9.2 Strict Equality](#92-strict-equality)
   - [9.3 String Comparison](#93-string-comparison)
   - [9.4 Comparison of Different Types](#94-comparison-of-different-types)
   - [9.5 Comparison with `null` and `undefined`](#95-comparison-with-null-and-undefined)
   - [9.6 Avoiding Pitfalls](#96-avoiding-pitfalls)
10. [Conditional Branching: if, '?'](#10-conditional-branching-if-)
    - [10.1 The `if` Statement](#101-the-if-statement)
    - [10.2 The `else` Clause](#102-the-else-clause)
    - [10.3 Several Conditions: `else if`](#103-several-conditions-else-if)
    - [10.4 Conditional Operator `?`](#104-conditional-operator-)
    - [10.5 Non-traditional Use of `?`](#105-non-traditional-use-of-)
11. [Logical Operators](#11-logical-operators)
    - [11.1 OR (`||`)](#111-or-)
    - [11.2 AND (`&&`)](#112-and-)
    - [11.3 NOT (`!`)](#113-not-)
12. [Nullish Coalescing Operator (`??`)](#12-nullish-coalescing-operator-)
    - [12.1 Basic Usage](#121-basic-usage)
    - [12.2 Comparison with `||`](#122-comparison-with-)
    - [12.3 Precedence and Usage](#123-precedence-and-usage)
13. [Loops: `while` and `for`](#13-loops-while-and-for)
    - [13.1 The `while` Loop](#131-the-while-loop)
    - [13.2 The `do...while` Loop](#132-the-dowhile-loop)
    - [13.3 The `for` Loop](#133-the-for-loop)
    - [13.4 Breaking and Continuing](#134-breaking-and-continuing)
14. [The `switch` Statement](#14-the-switch-statement)
    - [14.1 Syntax](#141-syntax)
    - [14.2 Example](#142-example)
    - [14.3 Grouping of `case`](#143-grouping-of-case)
    - [14.4 Type Matters](#144-type-matters)
15. [Functions](#15-functions)
    - [15.1 Function Declaration](#151-function-declaration)
    - [15.2 Local and Outer Variables](#152-local-and-outer-variables)
    - [15.3 Parameters and Arguments](#153-parameters-and-arguments)
    - [15.4 Default Values](#154-default-values)
    - [15.5 Returning a Value](#155-returning-a-value)
    - [15.6 Function Naming](#156-function-naming)
16. [Function Expressions](#16-function-expressions)
    - [16.1 Function Expression Syntax](#161-function-expression-syntax)
    - [16.2 Functions as Values](#162-functions-as-values)
    - [16.3 Callback Functions](#163-callback-functions)
    - [16.4 Function Expression vs Function Declaration](#164-function-expression-vs-function-declaration)
17. [Arrow Functions](#17-arrow-functions)
    - [17.1 Basic Syntax](#171-basic-syntax)
    - [17.2 Multiline Arrow Functions](#172-multiline-arrow-functions)
    - [17.3 Usage](#173-usage)

## 1. The `<script>` Tag

The `<script>` tag is used to embed or reference JavaScript code within an HTML document. It is automatically executed when the browser processes the tag.

### 1.1 Key Points

- **Inline Scripts**: JavaScript code can be written directly within the `<script>` tag.

  ```html
  <script>
    alert("Hello, world!");
  </script>
  ```

- **External Scripts**: For larger scripts, use the `src` attribute to link to an external JavaScript file.

  ```html
  <script src="path/to/script.js"></script>
  ```

- **Attributes**:
  - `src`: Specifies the URL of an external script file. If set, the inline script content is ignored.
  - `type`: Historically used to specify the scripting language, but is no longer necessary for JavaScript.
  - `async` and `defer`: Control the loading and execution of external scripts.

### 1.2 Placement in HTML

- **Head Section**: Scripts that need to be loaded before the page content can be placed in the `<head>` section. Use the `defer` attribute to ensure they execute after the document is parsed.

  ```html
  <head>
    <script src="head-script.js" defer></script>
  </head>
  ```

- **Body Section**: Scripts are often placed at the end of the `<body>` section to ensure that the HTML content is fully loaded before the script runs.
  ```html
  <body>
    <!-- Page content -->
    <script src="body-script.js"></script>
  </body>
  ```

## 2. Code Structure

### 2.1 Statements

- JavaScript code is composed of statements, which are commands that perform actions.
- Statements can be separated by semicolons, though line breaks often suffice.

### 2.2 Semicolons

- Semicolons are optional in many cases due to automatic semicolon insertion, but using them consistently can prevent errors.

### 2.3 Comments

- **Single-line comments**: Start with `//` and extend to the end of the line.
- **Multi-line comments**: Enclosed between `/*` and `*/`.
- Comments are ignored by the JavaScript engine and are useful for explaining code.

## 3. "use strict" Mode

The `"use strict"` directive enables modern JavaScript features and stricter parsing and error handling of your code. It helps catch common coding errors and "unsafe" actions, such as assigning values to undeclared variables.

### 3.1 Key Points

- **Enabling Strict Mode**: Place `"use strict";` at the top of your script or function to enable strict mode.

  ```javascript
  "use strict";
  // Your code here
  ```

- **Function-Level Strict Mode**: You can also enable strict mode within a specific function.

  ```javascript
  function myFunction() {
    "use strict";
    // Function code here
  }
  ```

- **Placement**: Ensure `"use strict";` is at the very top of your script or function. Only comments can precede it.

- **No Reversion**: Once enabled, strict mode cannot be reverted within the same script.

- **Automatic in Modules/Classes**: Modern JavaScript modules and classes automatically enable strict mode, so the directive is not needed in those contexts.

Using `"use strict"` is recommended for scripts to ensure cleaner and more reliable code, especially in older codebases or when not using modules or classes.

## 4. Variables and Constants

In JavaScript, variables are used to store data that can be manipulated and retrieved throughout a program.

### 4.1 Variables

- **Declaration**: Use `let` to declare a variable.

  ```javascript
  let message;
  message = "Hello";
  ```

- **Initialization**: Variables can be declared and initialized in one line.

  ```javascript
  let message = "Hello!";
  ```

- **Multiple Declarations**: Avoid declaring multiple variables in one line for better readability.

  ```javascript
  let user = "John";
  let age = 25;
  let message = "Hello";
  ```

- **Naming Rules**: Variable names can include letters, digits, `$`, and `_`, but must not start with a digit. Use camelCase for multi-word names.

- **`var` Keyword**: An older way to declare variables, similar to `let`, but with different scoping rules.

### 4.2 Constants

- **Declaration**: Use `const` to declare a constant, which is a variable that cannot be reassigned.

  ```javascript
  const myBirthday = "18.04.1982";
  ```

- **Uppercase Constants**: Use uppercase letters for constants that are hard-coded and known before execution.
  ```javascript
  const COLOR_RED = "#F00";
  ```

### 4.3 Best Practices

- **Descriptive Names**: Choose clear and descriptive names for variables to improve code readability.
- **Avoid Reuse**: Do not reuse variables for different purposes to prevent confusion and errors.

## 5. Data Types

JavaScript has eight basic data types, divided into primitive and non-primitive types.

### 5.1 Primitive Types

1. **Number**: Represents both integer and floating-point numbers. Special numeric values include `Infinity`, `-Infinity`, and `NaN`.

   ```javascript
   let n = 123;
   n = 12.345;
   ```

2. **BigInt**: Used for integers of arbitrary length, created by appending `n` to the end of an integer.

   ```javascript
   const bigInt = 1234567890123456789012345678901234567890n;
   ```

3. **String**: Textual data enclosed in quotes. Backticks allow embedding expressions.

   ```javascript
   let str = `Hello, ${name}!`;
   ```

4. **Boolean**: Logical type with two values: `true` and `false`.

   ```javascript
   let isTrue = true;
   ```

5. **Null**: Represents "nothing" or "unknown".

   ```javascript
   let age = null;
   ```

6. **Undefined**: Indicates a variable has been declared but not assigned a value.

   ```javascript
   let x;
   ```

7. **Symbol**: Used to create unique identifiers for objects.

### 5.2 Non-Primitive Type

- **Object**: Used for collections of data and more complex entities.

### 5.3 The `typeof` Operator

- Returns the type of a value as a string.
  ```javascript
  typeof 123; // "number"
  typeof "Hello"; // "string"
  ```

## 6. User Interaction: Alert, Prompt, and Confirm

JavaScript provides three functions to interact with users via modal windows: `alert`, `prompt`, and `confirm`.

### 6.1 Alert

- **Purpose**: Displays a message to the user.
- **Usage**: The user must click "OK" to dismiss the message.
  ```javascript
  alert("Hello");
  ```

### 6.2 Prompt

- **Purpose**: Asks the user to input text.
- **Syntax**: `result = prompt(title, [default]);`
  - `title`: The message displayed to the user.
  - `default`: (Optional) Initial value for the input field.
- **Returns**: The input text or `null` if canceled.
  ```javascript
  let age = prompt("How old are you?", 100);
  alert(`You are ${age} years old!`);
  ```

### 6.3 Confirm

- **Purpose**: Asks the user to confirm an action.
- **Syntax**: `result = confirm(question);`
- **Returns**: `true` if "OK" is pressed, `false` if "Cancel" is pressed.
  ```javascript
  let isBoss = confirm("Are you the boss?");
  alert(isBoss); // true if OK is pressed
  ```

### 6.4 Characteristics

- **Modal Windows**: These functions create modal windows that pause script execution and prevent interaction with the rest of the page until dismissed.
- **Browser-Dependent**: The appearance and exact positioning of these windows are determined by the browser and cannot be customized.

These functions are simple and effective for basic user interactions, though more advanced UI elements can be created with HTML/CSS and JavaScript for richer experiences.

## 7. Type Conversions

JavaScript often automatically converts values to the expected type, but explicit conversions can be performed when needed.

### 7.1 String Conversion

- **Purpose**: Converts a value to a string.
- **Usage**: Automatically occurs in contexts like `alert(value)`.
- **Explicit Conversion**: Use `String(value)`.
  ```javascript
  let value = true;
  value = String(value); // "true"
  ```

### 7.2 Numeric Conversion

- **Purpose**: Converts a value to a number.
- **Usage**: Automatically occurs in mathematical operations.
- **Explicit Conversion**: Use `Number(value)`.

  ```javascript
  let str = "123";
  let num = Number(str); // 123
  ```

- **Conversion Rules**:
  - `undefined` becomes `NaN`.
  - `null` becomes `0`.
  - `true` becomes `1`, `false` becomes `0`.
  - Strings are trimmed; if empty, they become `0`. Invalid strings become `NaN`.

### 7.3 Boolean Conversion

- **Purpose**: Converts a value to a boolean.
- **Usage**: Automatically occurs in logical contexts.
- **Explicit Conversion**: Use `Boolean(value)`.

  ```javascript
  Boolean(1); // true
  Boolean(0); // false
  ```

- **Conversion Rules**:
  - `0`, `null`, `undefined`, `NaN`, and `""` become `false`.
  - All other values become `true`.

These conversions are fundamental to JavaScript's dynamic typing and are essential for handling different data types effectively.

## 8. Operators

JavaScript supports a variety of operators for performing calculations and operations on data.

### 8.1 Basic Math Operators

- **Addition (`+`)**: Adds numbers or concatenates strings.
- **Subtraction (`-`)**: Subtracts one number from another.
- **Multiplication (`*`)**: Multiplies numbers.
- **Division (`/`)**: Divides numbers.
- **Remainder (`%`)**: Returns the remainder of a division.
- **Exponentiation (`**`)**: Raises a number to the power of another.

### 8.2 String Concatenation

- The `+` operator can concatenate strings. If either operand is a string, the other is converted to a string.
  ```javascript
  let s = "Hello, " + "world!"; // "Hello, world!"
  ```

### 8.3 Unary Operators

- **Unary Plus (`+`)**: Converts a value to a number.

  ```javascript
  let x = +"123"; // 123
  ```

- **Unary Negation (`-`)**: Converts a value to a number and negates it.
  ```javascript
  let y = -"123"; // -123
  ```

### 8.4 Operator Precedence

- Operators have a defined precedence that determines the order of operations in expressions.
- Parentheses can be used to override precedence.
  ```javascript
  let result = (1 + 2) * 3; // 9
  ```

### 8.5 Increment/Decrement

- **Increment (`++`)**: Increases a number by one.

  - **Prefix (`++x`)**: Increments and returns the new value.
  - **Postfix (`x++`)**: Returns the current value, then increments.

  ```javascript
  let counter = 1;
  let a = ++counter; // a = 2, counter = 2
  let b = counter++; // b = 2, counter = 3
  ```

- **Decrement (`--`)**: Decreases a number by one.
  - **Prefix (`--x`)**: Decrements and returns the new value.
  - **Postfix (`x--`)**: Returns the current value, then decrements.
  ```javascript
  let counter = 3;
  let a = --counter; // a = 2, counter = 2
  let b = counter--; // b = 2, counter = 1
  ```

### 8.6 Assignment Operators

- **Assignment (`=`)**: Assigns a value to a variable.
- **Modify-in-place**: Combines an operation with assignment, e.g., `+=`, `-=`, `*=`, `/=`.
  ```javascript
  let a = 2;
  a += 3; // 5
  ```

### 8.7 Comma Operator

- Evaluates multiple expressions and returns the result of the last one.
  ```javascript
  let a = (1 + 2, 3 + 4); // 7
  ```

### 8.8 Bitwise Operators

- **AND (`&`)**, **OR (`|`)**, **XOR (`^`)**, **NOT (`~`)**: Perform bitwise operations on 32-bit integers.
- **Left Shift (`<<`)**, **Right Shift (`>>`)**, **Zero-fill Right Shift (`>>>`)**: Shift bits in a number.

These operators are fundamental to performing calculations and manipulating data in JavaScript, providing both basic arithmetic and more complex operations.

## 9. Comparisons

JavaScript provides several operators to compare values, returning a boolean result.

### 9.1 Basic Comparison Operators

- **Greater than (`>`)**: Checks if the left operand is greater than the right.
- **Less than (`<`)**: Checks if the left operand is less than the right.
- **Greater than or equal to (`>=`)**: Checks if the left operand is greater than or equal to the right.
- **Less than or equal to (`<=`)**: Checks if the left operand is less than or equal to the right.
- **Equality (`==`)**: Checks if two values are equal, with type conversion.
- **Inequality (`!=`)**: Checks if two values are not equal, with type conversion.

### 9.2 Strict Equality

- **Strict Equality (`===`)**: Checks if two values are equal without type conversion.
- **Strict Inequality (`!==`)**: Checks if two values are not equal without type conversion.

### 9.3 String Comparison

- Strings are compared lexicographically, character by character, based on Unicode values.

### 9.4 Comparison of Different Types

- When comparing values of different types, JavaScript converts them to numbers.
  ```javascript
  alert("2" > 1); // true
  alert("01" == 1); // true
  ```

### 9.5 Comparison with `null` and `undefined`

- `null` and `undefined` are equal to each other (`null == undefined`) but not to any other value.
- Comparisons with `null` and `undefined` convert them to numbers: `null` becomes `0`, `undefined` becomes `NaN`.

### 9.6 Avoiding Pitfalls

- Be cautious with comparisons involving `null` and `undefined`.
- Use strict equality (`===`) to avoid unexpected type conversions.

These comparison operators are essential for controlling the flow of logic in JavaScript programs, allowing for conditional execution based on value comparisons.

## 10. Conditional Branching: if, '?'

JavaScript provides structures to perform different actions based on conditions.

### 10.1 The `if` Statement

- **Syntax**: Evaluates a condition and executes a block of code if the condition is `true`.

  ```javascript
  if (condition) {
    // code to execute if condition is true
  }
  ```

- **Boolean Conversion**: The condition is converted to a boolean. Falsy values (`0`, `""`, `null`, `undefined`, `NaN`) become `false`; all others become `true`.

### 10.2 The `else` Clause

- **Syntax**: Executes a block of code if the `if` condition is `false`.
  ```javascript
  if (condition) {
    // code if true
  } else {
    // code if false
  }
  ```

### 10.3 Several Conditions: `else if`

- **Syntax**: Allows testing multiple conditions.
  ```javascript
  if (condition1) {
    // code if condition1 is true
  } else if (condition2) {
    // code if condition2 is true
  } else {
    // code if none are true
  }
  ```

### 10.4 Conditional Operator `?`

- **Syntax**: A shorthand for `if...else` that returns a value based on a condition.

  ```javascript
  let result = condition ? value1 : value2;
  ```

- **Multiple `?`**: Can be used for multiple conditions.
  ```javascript
  let message =
    age < 3
      ? "Hi, baby!"
      : age < 18
      ? "Hello!"
      : age < 100
      ? "Greetings!"
      : "What an unusual age!";
  ```

### 10.5 Non-traditional Use of `?`

- **Usage**: Can execute different code blocks, but not recommended for readability.
  ```javascript
  condition ? alert("True") : alert("False");
  ```

These structures are fundamental for controlling the flow of execution in JavaScript, allowing for dynamic and responsive code based on conditions.

## 11. Logical Operators

JavaScript provides several logical operators that can be used with values of any type, not just booleans.

### 11.1 OR (`||`)

- **Functionality**: Returns the first truthy value or the last value if none are truthy.

  ```javascript
  let result = value1 || value2 || value3;
  ```

- **Short-circuit Evaluation**: Stops evaluating as soon as a truthy value is found.
  ```javascript
  let hour = 9;
  if (hour < 10 || hour > 18) {
    alert("The office is closed.");
  }
  ```

### 11.2 AND (`&&`)

- **Functionality**: Returns the first falsy value or the last value if all are truthy.

  ```javascript
  let result = value1 && value2 && value3;
  ```

- **Short-circuit Evaluation**: Stops evaluating as soon as a falsy value is found.
  ```javascript
  let hour = 12;
  let minute = 30;
  if (hour == 12 && minute == 30) {
    alert("The time is 12:30");
  }
  ```

### 11.3 NOT (`!`)

- **Functionality**: Converts the operand to a boolean and returns the inverse.

  ```javascript
  let result = !value;
  ```

- **Double NOT (`!!`)**: Converts a value to a boolean.
  ```javascript
  alert(!!"non-empty string"); // true
  ```

These logical operators are essential for controlling the flow of logic in JavaScript, allowing for complex conditions and decision-making processes.

## 12. Nullish Coalescing Operator (`??`)

The nullish coalescing operator `??` is used to provide a default value when dealing with `null` or `undefined`.

### 12.1 Basic Usage

- **Syntax**: Returns the first defined value (not `null` or `undefined`).

  ```javascript
  let result = a ?? b;
  ```

- **Example**: Provides a default value if `user` is `null` or `undefined`.
  ```javascript
  let user;
  alert(user ?? "Anonymous"); // "Anonymous"
  ```

### 12.2 Comparison with `||`

- **Difference**: `||` returns the first truthy value, while `??` returns the first defined value.
  ```javascript
  let height = 0;
  alert(height || 100); // 100 (0 is falsy)
  alert(height ?? 100); // 0 (0 is defined)
  ```

### 12.3 Precedence and Usage

- **Precedence**: Similar to `||`, but requires parentheses when used with `&&` or `||`.

  ```javascript
  let area = (height ?? 100) * (width ?? 50);
  ```

- **Restrictions**: Cannot be used directly with `&&` or `||` without parentheses.
  ```javascript
  let x = (1 && 2) ?? 3; // Valid
  ```

The nullish coalescing operator is particularly useful for setting default values when dealing with potentially `null` or `undefined` variables.

## 13. Loops: `while` and `for`

Loops allow us to repeat actions multiple times, which is essential for tasks like iterating over arrays or executing code repeatedly.

### 13.1 The `while` Loop

- **Syntax**: Repeats a block of code as long as a condition is truthy.

  ```javascript
  while (condition) {
    // loop body
  }
  ```

- **Example**: Outputs numbers from 0 to 2.
  ```javascript
  let i = 0;
  while (i < 3) {
    alert(i);
    i++;
  }
  ```

### 13.2 The `do...while` Loop

- **Syntax**: Executes the loop body at least once, then repeats while the condition is truthy.

  ```javascript
  do {
    // loop body
  } while (condition);
  ```

- **Example**: Outputs numbers from 0 to 2.
  ```javascript
  let i = 0;
  do {
    alert(i);
    i++;
  } while (i < 3);
  ```

### 13.3 The `for` Loop

- **Syntax**: A more complex loop that includes initialization, condition, and increment expressions.

  ```javascript
  for (begin; condition; step) {
    // loop body
  }
  ```

- **Example**: Outputs numbers from 0 to 2.
  ```javascript
  for (let i = 0; i < 3; i++) {
    alert(i);
  }
  ```

### 13.4 Breaking and Continuing

- **`break`**: Exits the loop immediately.

  ```javascript
  while (true) {
    let value = prompt("Enter a number", "");
    if (!value) break;
  }
  ```

- **`continue`**: Skips the current iteration and proceeds to the next one.
  ```javascript
  for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) continue;
    alert(i); // 1, 3
  }
  ```

These loop constructs are fundamental for controlling the flow of execution in JavaScript, allowing for efficient and flexible iteration over data.

## 14. The `switch` Statement

The `switch` statement provides a more descriptive way to compare a value against multiple variants, replacing multiple `if` checks.

### 14.1 Syntax

- **Structure**: Consists of one or more `case` blocks and an optional `default`.

  ```javascript
  switch (x) {
    case "value1": // if (x === 'value1')
      // code
      break;

    case "value2": // if (x === 'value2')
      // code
      break;

    default:
      // code
      break;
  }
  ```

- **Execution**: The value of `x` is compared using strict equality (`===`) with each `case`. If a match is found, the code executes from that `case` until a `break` is encountered or the `switch` ends.

### 14.2 Example

- **Basic Example**:

  ```javascript
  let a = 2 + 2;

  switch (a) {
    case 3:
      alert("Too small");
      break;
    case 4:
      alert("Exactly!");
      break;
    case 5:
      alert("Too big");
      break;
    default:
      alert("I don't know such values");
  }
  ```

### 14.3 Grouping of `case`

- **Multiple Cases**: Cases can be grouped to share the same code.

  ```javascript
  let a = 3;

  switch (a) {
    case 4:
      alert("Right!");
      break;

    case 3:
    case 5:
      alert("Wrong!");
      alert("Why don't you take a math class?");
      break;

    default:
      alert("The result is strange. Really.");
  }
  ```

### 14.4 Type Matters

- **Strict Equality**: The comparison is strict, meaning the types must match.
  ```javascript
  let arg = prompt("Enter a value?");
  switch (arg) {
    case "0":
    case "1":
      alert("One or zero");
      break;
    case "2":
      alert("Two");
      break;
    case 3:
      alert("Never executes!");
      break;
    default:
      alert("An unknown value");
  }
  ```

The `switch` statement is useful for handling multiple conditions in a clean and organized manner, especially when dealing with multiple potential values for a single variable.

## 15. Functions

Functions are the main building blocks of a program, allowing code to be reused and organized efficiently.

### 15.1 Function Declaration

- **Syntax**: Functions are declared using the `function` keyword, followed by the function name, parameters in parentheses, and the function body in curly braces.

  ```javascript
  function showMessage() {
    alert("Hello everyone!");
  }
  ```

- **Calling a Function**: Execute the function by its name followed by parentheses.
  ```javascript
  showMessage();
  ```

### 15.2 Local and Outer Variables

- **Local Variables**: Declared inside a function and accessible only within that function.

  ```javascript
  function showMessage() {
    let message = "Hello, I'm JavaScript!";
    alert(message);
  }
  ```

- **Outer Variables**: Functions can access and modify variables declared outside of them.

  ```javascript
  let userName = "John";

  function showMessage() {
    let message = "Hello, " + userName;
    alert(message);
  }
  ```

### 15.3 Parameters and Arguments

- **Parameters**: Variables listed in the function declaration.
- **Arguments**: Values passed to the function when called.

  ```javascript
  function showMessage(from, text) {
    alert(from + ": " + text);
  }

  showMessage("Ann", "Hello!");
  ```

### 15.4 Default Values

- **Default Parameters**: Provide default values for parameters if no argument is passed.

  ```javascript
  function showMessage(from, text = "no text given") {
    alert(from + ": " + text);
  }

  showMessage("Ann");
  ```

### 15.5 Returning a Value

- **Return Statement**: Functions can return a value using the `return` keyword.

  ```javascript
  function sum(a, b) {
    return a + b;
  }

  let result = sum(1, 2);
  alert(result); // 3
  ```

### 15.6 Function Naming

- **Descriptive Names**: Function names should clearly describe their action, often using verbs.
- **Common Prefixes**: Use prefixes like `get...`, `show...`, `check...` to indicate the function's purpose.

Functions are essential for structuring code, reducing repetition, and improving readability and maintainability.

## 16. Function Expressions

In JavaScript, functions can be created using function expressions, which allow functions to be defined within expressions.

### 16.1 Function Expression Syntax

- **Syntax**: A function expression is created by assigning a function to a variable.

  ```javascript
  let sayHi = function () {
    alert("Hello");
  };
  ```

- **Anonymous Functions**: Function expressions can be anonymous, meaning they do not have a name.

### 16.2 Functions as Values

- **Function as a Value**: Functions are treated as values, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
  ```javascript
  let func = sayHi;
  func(); // Hello
  ```

### 16.3 Callback Functions

- **Callbacks**: Functions can be passed as arguments to other functions and called within them.

  ```javascript
  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

  ask(
    "Do you agree?",
    function () {
      alert("You agreed.");
    },
    function () {
      alert("You canceled the execution.");
    }
  );
  ```

### 16.4 Function Expression vs Function Declaration

- **Creation Timing**: Function expressions are created when the execution reaches them, while function declarations are hoisted and can be called before they appear in the code.

  ```javascript
  // Function Declaration
  function sum(a, b) {
    return a + b;
  }

  // Function Expression
  let sum = function (a, b) {
    return a + b;
  };
  ```

- **Block Scope**: In strict mode, function declarations inside blocks are only visible within those blocks.

Function expressions provide flexibility in defining functions, especially when functions need to be created conditionally or passed as arguments.

## 17. Arrow Functions

Arrow functions provide a concise syntax for writing functions in JavaScript, often used for simple operations.

### 17.1 Basic Syntax

- **Syntax**: Arrow functions are defined using the `=>` syntax.

  ```javascript
  let sum = (a, b) => a + b;
  ```

- **Single Argument**: Parentheses can be omitted if there is only one argument.

  ```javascript
  let double = (n) => n * 2;
  ```

- **No Arguments**: Use empty parentheses if there are no arguments.
  ```javascript
  let sayHi = () => alert("Hello!");
  ```

### 17.2 Multiline Arrow Functions

- **Syntax**: For functions with multiple statements, use curly braces and an explicit `return`.
  ```javascript
  let sum = (a, b) => {
    let result = a + b;
    return result;
  };
  ```

### 17.3 Usage

- **One-liners**: Ideal for simple one-line functions and callbacks.
  ```javascript
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
  ```

Arrow functions are particularly useful for short, simple functions and are often used in functional programming patterns and callbacks.
