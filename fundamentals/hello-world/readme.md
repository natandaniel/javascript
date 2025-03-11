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
