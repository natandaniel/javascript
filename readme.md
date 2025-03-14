# JavaScript Learning Examples

This repository contains a collection of JavaScript examples designed to illustrate various features and concepts of the language. It serves as a reference for understanding JavaScript through practical examples.

## Table of Contents

1. [Callbacks](#1-callbacks)
   - [1.1 Introduction to Callbacks](#11-introduction-to-callbacks)
   - [1.2 Callback in Callback](#12-callback-in-callback)
   - [1.3 Handling Errors](#13-handling-errors)
   - [1.4 Pyramid of Doom](#14-pyramid-of-doom)
   - [1.5 Summary](#15-summary)
2. [Promise Basics](#2-promise-basics)
   - [2.1 What is a Promise?](#21-what-is-a-promise)
   - [2.2 Promise Constructor](#22-promise-constructor)
   - [2.3 Consumers: then, catch](#23-consumers-then-catch)
   - [2.4 Cleanup: finally](#24-cleanup-finally)
   - [2.5 Example: loadScript](#25-example-loadscript)
   - [2.6 Summary](#26-summary)
3. [Promise Chaining](#3-promise-chaining)
   - [3.1 Chaining Basics](#31-chaining-basics)
   - [3.2 Returning Promises](#32-returning-promises)
   - [3.3 Example: loadScript](#33-example-loadscript)
   - [3.4 Bigger Example: fetch](#34-bigger-example-fetch)
   - [3.5 Summary](#35-summary)
4. [Error Handling with Promises](#4-error-handling-with-promises)
   - [4.1 Implicit try...catch](#41-implicit-trycatch)
   - [4.2 Rethrowing](#42-rethrowing)
   - [4.3 Unhandled Rejections](#43-unhandled-rejections)
   - [4.4 Summary](#44-summary)
5. [Promise API](#5-promise-api)
   - [5.1 Promise.all](#51-promiseall)
   - [5.2 Promise.allSettled](#52-promiseallsettled)
   - [5.3 Promise.race](#53-promiserace)
   - [5.4 Promise.any](#54-promiseany)
   - [5.5 Promise.resolve/reject](#55-promiseresolvereject)
   - [5.6 Summary](#56-summary)
6. [Promisification](#6-promisification)
   - [6.1 Basic Promisification](#61-basic-promisification)
   - [6.2 Advanced Promisification](#62-advanced-promisification)
   - [6.3 Summary](#63-summary)

## 1. Callbacks

Callbacks are functions passed as arguments to other functions, allowing code to be executed after an asynchronous operation has completed.

### 1.1 Introduction to Callbacks

Callbacks are used to handle asynchronous operations in JavaScript. For example, the `setTimeout` function uses a callback to execute code after a delay:

```javascript
setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);
```

A common use case is loading scripts asynchronously:

```javascript
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript("/my/script.js", function () {
  console.log("Script loaded!");
});
```

### 1.2 Callback in Callback

To perform sequential asynchronous operations, callbacks can be nested:

```javascript
loadScript("/my/script1.js", function () {
  loadScript("/my/script2.js", function () {
    loadScript("/my/script3.js", function () {
      console.log("All scripts loaded");
    });
  });
});
```

This pattern is known as "callback hell" or "pyramid of doom" due to its nested structure.

### 1.3 Handling Errors

Callbacks can also handle errors by using an error-first callback style:

```javascript
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));
  document.head.append(script);
}

loadScript("/my/script.js", function (error, script) {
  if (error) {
    console.error(error);
  } else {
    console.log("Script loaded successfully");
  }
});
```

### 1.4 Pyramid of Doom

Deeply nested callbacks can make code difficult to read and maintain. This is often referred to as the "pyramid of doom":

```javascript
loadScript("1.js", function (error, script) {
  if (error) {
    handleError(error);
  } else {
    loadScript("2.js", function (error, script) {
      if (error) {
        handleError(error);
      } else {
        loadScript("3.js", function (error, script) {
          if (error) {
            handleError(error);
          } else {
            console.log("All scripts loaded");
          }
        });
      }
    });
  }
});
```

### 1.5 Summary

Callbacks are a fundamental part of handling asynchronous operations in JavaScript. While they are powerful, they can lead to complex and hard-to-read code structures. Alternatives like Promises and async/await provide more manageable solutions for asynchronous programming.

For more details, refer to the [Callbacks](https://javascript.info/callbacks) tutorial.

## 2. Promise Basics

Promises in JavaScript provide a more powerful and flexible way to handle asynchronous operations compared to callbacks.

### 2.1 What is a Promise?

A promise is a special JavaScript object that links producing code (which takes time to complete) with consuming code (which needs the result once it's ready). It represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

### 2.2 Promise Constructor

The syntax for creating a promise is:

```javascript
let promise = new Promise(function (resolve, reject) {
  // executor (the producing code)
});
```

The executor function runs automatically when the promise is created. It receives two arguments: `resolve` and `reject`. Call `resolve(value)` when the job is finished successfully, and `reject(error)` if an error occurs.

Example:

```javascript
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});
```

### 2.3 Consumers: then, catch

Promises have methods to handle their results:

- **then**: Attaches callbacks for the resolution and/or rejection of the promise.

  ```javascript
  promise.then(
    (result) => console.log(result), // "done"
    (error) => console.error(error)
  );
  ```

- **catch**: Attaches a callback for only the rejection of the promise.

  ```javascript
  promise.catch((error) => console.error(error));
  ```

### 2.4 Cleanup: finally

The `finally` method allows you to execute code after a promise is settled, regardless of its outcome:

```javascript
promise.finally(() => console.log("Promise settled"));
```

### 2.5 Example: loadScript

Here's how you can rewrite a callback-based function using promises:

```javascript
function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));
    document.head.append(script);
  });
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
  .then((script) => console.log(`${script.src} is loaded!`))
  .catch((error) => console.error(`Error: ${error.message}`));
```

### 2.6 Summary

Promises provide a cleaner and more manageable way to handle asynchronous operations in JavaScript. They allow for better error handling and chaining of asynchronous tasks compared to traditional callbacks.

For more details, refer to the [Promise Basics](https://javascript.info/promise-basics) tutorial.

## 3. Promise Chaining

Promise chaining allows you to perform a sequence of asynchronous tasks in a more readable and manageable way.

### 3.1 Chaining Basics

In promise chaining, each `.then` returns a new promise, allowing the next `.then` to be called with the result of the previous one:

```javascript
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 4
  });
```

### 3.2 Returning Promises

A handler in `.then` can return a promise, allowing further handlers to wait until it settles:

```javascript
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result); // 2
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result); // 4
  });
```

### 3.3 Example: loadScript

Using promise chaining to load scripts sequentially:

```javascript
loadScript("/article/promise-chaining/one.js")
  .then(() => loadScript("/article/promise-chaining/two.js"))
  .then(() => loadScript("/article/promise-chaining/three.js"))
  .then(() => {
    one();
    two();
    three();
  });
```

### 3.4 Bigger Example: fetch

Using promises to fetch data and process it sequentially:

```javascript
fetch("/article/promise-chaining/user.json")
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/${user.name}`))
  .then((response) => response.json())
  .then((githubUser) => {
    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => img.remove(), 3000);
  });
```

### 3.5 Summary

Promise chaining provides a clean and manageable way to handle sequences of asynchronous operations. It avoids the "pyramid of doom" and allows for better error handling and readability.

For more details, refer to the [Promise Chaining](https://javascript.info/promise-chaining) tutorial.

## 4. Error Handling with Promises

Promises provide a robust mechanism for handling errors in asynchronous operations.

### 4.1 Implicit try...catch

Promise executors and handlers have an implicit `try...catch` block around them. If an error occurs, it is caught and treated as a rejection:

```javascript
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(alert); // Error: Whoops!
```

This is equivalent to:

```javascript
new Promise((resolve, reject) => {
  reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!
```

### 4.2 Rethrowing

A `.catch` block can rethrow an error to pass it to the next error handler:

```javascript
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
})
  .catch(function (error) {
    if (error instanceof URIError) {
      // handle it
    } else {
      alert("Can't handle such error");
      throw error; // rethrow
    }
  })
  .then(() => {
    // doesn't run
  })
  .catch((error) => {
    alert(`The unknown error has occurred: ${error}`);
  });
```

### 4.3 Unhandled Rejections

If a promise error is not handled, it results in an unhandled rejection. Browsers can catch these using the `unhandledrejection` event:

```javascript
window.addEventListener("unhandledrejection", function (event) {
  alert(event.promise); // [object Promise]
  alert(event.reason); // Error: Whoops!
});

new Promise(function () {
  throw new Error("Whoops!");
}); // no catch to handle the error
```

### 4.4 Summary

- `.catch` handles errors in promises, whether from `reject()` or thrown errors.
- Errors can be rethrown to be handled by another `.catch`.
- Unhandled rejections can be tracked using the `unhandledrejection` event in browsers.

For more details, refer to the [Error Handling with Promises](https://javascript.info/promise-error-handling) tutorial.

## 5. Promise API

The Promise API provides several static methods to work with promises.

### 5.1 Promise.all

`Promise.all` takes an iterable of promises and returns a new promise that resolves when all of them are resolved, or rejects if any of them are rejected.

```javascript
Promise.all([fetch("/api/data1"), fetch("/api/data2"), fetch("/api/data3")])
  .then((responses) => {
    // All responses are resolved
    return Promise.all(responses.map((r) => r.json()));
  })
  .then((data) => {
    console.log(data); // Array of JSON data
  })
  .catch((error) => {
    console.error(error); // If any promise rejects
  });
```

### 5.2 Promise.allSettled

`Promise.allSettled` waits for all promises to settle (either resolve or reject) and returns their results as an array of objects with `status` and `value` or `reason`.

```javascript
Promise.allSettled([
  fetch("/api/data1"),
  fetch("/api/data2"),
  fetch("/no-such-url"),
]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index} fulfilled:`, result.value);
    } else {
      console.log(`Promise ${index} rejected:`, result.reason);
    }
  });
});
```

### 5.3 Promise.race

`Promise.race` returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.

```javascript
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("First"), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Second")), 2000)
  ),
])
  .then((result) => {
    console.log(result); // "First"
  })
  .catch((error) => {
    console.error(error);
  });
```

### 5.4 Promise.any

`Promise.any` returns a promise that resolves as soon as any of the promises in the iterable resolves. If all promises are rejected, it rejects with an `AggregateError`.

```javascript
Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("First")), 1000)
  ),
  new Promise((resolve) => setTimeout(() => resolve("Second"), 2000)),
])
  .then((result) => {
    console.log(result); // "Second"
  })
  .catch((error) => {
    console.error(error.errors); // Array of errors
  });
```

### 5.5 Promise.resolve/reject

- `Promise.resolve(value)` creates a resolved promise with the given value.
- `Promise.reject(error)` creates a rejected promise with the given error.

```javascript
let promise = Promise.resolve(42);
promise.then((value) => console.log(value)); // 42

let rejectedPromise = Promise.reject(new Error("Oops!"));
rejectedPromise.catch((error) => console.error(error)); // Error: Oops!
```

### 5.6 Summary

The Promise API provides powerful methods for handling multiple promises and their results, allowing for more flexible and efficient asynchronous programming.

For more details, refer to the [Promise API](https://javascript.info/promise-api) tutorial.

## 6. Promisification

Promisification is the process of converting a function that uses callbacks into a function that returns a promise.

### 6.1 Basic Promisification

To promisify a function, wrap it in a function that returns a promise. For example, converting a callback-based `loadScript` function:

```javascript
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));
  document.head.append(script);
}

let loadScriptPromise = function (src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err);
      else resolve(script);
    });
  });
};

// Usage:
loadScriptPromise("path/script.js")
  .then((script) => {
    console.log("Script loaded:", script);
  })
  .catch((error) => {
    console.error("Error loading script:", error);
  });
```

### 6.2 Advanced Promisification

For functions with multiple callback arguments, you can create a more advanced promisification function:

```javascript
function promisify(f, manyArgs = false) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) {
        if (err) {
          reject(err);
        } else {
          resolve(manyArgs ? results : results[0]);
        }
      }
      args.push(callback);
      f.call(this, ...args);
    });
  };
}

// Usage:
let loadScriptPromise = promisify(loadScript);
loadScriptPromise("path/script.js")
  .then((script) => {
    console.log("Script loaded:", script);
  })
  .catch((error) => {
    console.error("Error loading script:", error);
  });
```

### 6.3 Summary

Promisification is useful for converting callback-based functions into promise-based ones, making them easier to work with in modern JavaScript. However, it is only suitable for functions that call the callback once.

For more details, refer to the [Promisification](https://javascript.info/promisify) tutorial.

## Folder Structure

- **fundamentals**: This subfolder includes examples of fundamental JavaScript features, providing a foundation for understanding the basics of the language.
