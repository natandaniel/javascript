# JavaScript Fundamentals

## The `<script>` Tag

The `<script>` tag is used to embed or reference JavaScript code within an HTML document. It is automatically executed when the browser processes the tag.

### Key Points

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

### Placement in HTML

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

## Code Structure

### Statements

- JavaScript code is composed of statements, which are commands that perform actions.
- Statements can be separated by semicolons, though line breaks often suffice.

### Semicolons

- Semicolons are optional in many cases due to automatic semicolon insertion, but using them consistently can prevent errors.

### Comments

- **Single-line comments**: Start with `//` and extend to the end of the line.
- **Multi-line comments**: Enclosed between `/*` and `*/`.
- Comments are ignored by the JavaScript engine and are useful for explaining code.

## "use strict" Mode

The `"use strict"` directive enables modern JavaScript features and stricter parsing and error handling of your code. It helps catch common coding errors and "unsafe" actions, such as assigning values to undeclared variables.

### Key Points

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

## Variables and Constants

In JavaScript, variables are used to store data that can be manipulated and retrieved throughout a program.

### Variables

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

### Constants

- **Declaration**: Use `const` to declare a constant, which is a variable that cannot be reassigned.

  ```javascript
  const myBirthday = "18.04.1982";
  ```

- **Uppercase Constants**: Use uppercase letters for constants that are hard-coded and known before execution.
  ```javascript
  const COLOR_RED = "#F00";
  ```

### Best Practices

- **Descriptive Names**: Choose clear and descriptive names for variables to improve code readability.
- **Avoid Reuse**: Do not reuse variables for different purposes to prevent confusion and errors.

## Data Types

JavaScript has eight basic data types, divided into primitive and non-primitive types.

### Primitive Types

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

### Non-Primitive Type

- **Object**: Used for collections of data and more complex entities.

### The `typeof` Operator

- Returns the type of a value as a string.
  ```javascript
  typeof 123; // "number"
  typeof "Hello"; // "string"
  ```
