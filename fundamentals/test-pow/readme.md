# Power Function Testing with Mocha and Chai

This project is designed to test a JavaScript function `pow(x, n)` using the Mocha testing framework and the Chai assertion library. The `index.html` file serves as the test runner, while `test.js` contains the test cases.

## File Structure

- **index.html**: The main HTML file that sets up the testing environment and runs the tests.
- **test.js**: A JavaScript file containing the test cases for the `pow` function.

## Libraries Used

- **Mocha**: A JavaScript test framework running on Node.js and in the browser, used for organizing and running tests.
- **Chai**: A BDD / TDD assertion library for Node.js and the browser that can be paired with any JavaScript testing framework.

## How It Works

1. **Mocha Setup**: The `index.html` file includes Mocha's CSS and JavaScript files. Mocha is set up in BDD mode using `mocha.setup("bdd")`.

2. **Chai Setup**: The Chai library is included, and its `assert` function is made globally available for use in the tests.

3. **Function Under Test**: The `pow(x, n)` function is defined in the `index.html` file. It calculates \(x^n\) with the following conditions:

   - Returns `NaN` if \(n\) is negative or not an integer.
   - Uses a loop to multiply \(x\) by itself \(n\) times.

4. **Test Execution**: The `test.js` file contains the test cases, which are executed and displayed in the `<div id="mocha"></div>` element.

5. **Running Tests**: The `mocha.run()` function is called to execute the tests and display the results.

## Test Cases

The `test.js` file includes the following test cases:

- **Power of 3**: Tests that `pow(x, 3)` correctly calculates \(x^3\) for \(x\) from 1 to 5.
- **Negative Exponent**: Verifies that `pow(x, n)` returns `NaN` for negative \(n\).
- **Non-integer Exponent**: Verifies that `pow(x, n)` returns `NaN` for non-integer \(n\).

## How to Use

1. Ensure the `pow(x, n)` function is correctly implemented in the `index.html` file.
2. Open `index.html` in a web browser to run the tests and view the results.

## Example

The `pow` function is implemented as follows:

```javascript
function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
```

The `test.js` file includes tests like:

```javascript
describe("pow", function () {
  describe("raises x to power 3", function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  it("for negative n the result is NaN", function () {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function () {
    assert.isNaN(pow(2, 1.5));
  });
});
```

Open `index.html` in a browser to see the test results.
