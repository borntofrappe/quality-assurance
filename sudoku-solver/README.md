# Sudoku Solver

Create an application similar [to the example Metric-Imperial Converter](https://sudoku-solver.freecodecamp.rocks/).

## Links

- [Assignment](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/sudoku-solver)

- [Solution](https://replit.com/@borntofrappe/boilerplate-project-sudoku-solver)

## App logic

Complete the puzzle logic in `/controllers/sudoku-solver.js`. The class has several methods to validate, check and solve puzzle strings:

- with `validate` check that the input string has 81 characters, includes only the accepted values, meaning numbers in the `[1, 9]` range and the dot character `.`. Finally check that there is no conflict in the rows, columns, regions

- with `check*` validate a specific value in a specific coordinate. The three different functions illustrate if the puzzle string is valid relative to the row, column or again region

- with `solve` solve a valid puzzle string

Refer to `controllers/puzzle-strings.js` for a sample of puzzles the application should be able to handle.

## Routes

In `/routes/api.js` handle two post requests, to `api/solve` and `api/check`.

### solve

The request includes an object with the required `puzzle` field, detailing the input string.

```js
const req.body = {
    puzzle: string
}
```

With a solution return an object with the completed string.

```js
const output = {
  solution: string,
};
```

Without the required field return `{ error: 'Required field missing' }`.

With invalid characters return `{ error: 'Invalid characters in puzzle' }`.

When the string has an incorrect length return `{ error: 'Expected puzzle to be 81 characters long' }`.

When the string creates a conflict or the puzzle can't be solved return `{ error: 'Puzzle cannot be solved' }`.

### check

The request receives an object with three fields: `puzzle`, `coordinate`, and `value`.

`coordinate` combines a letter in the `[A, I]` range with a number in the `[1, 9]` range.

`value` is a number in the `[1, 9]` range.

```js
const input = {
  puzzle: string,
  coordinate: string,
  value: number,
};
```

Return an object containing a `valid` property, `true` if the number may be placed at the provided coordinate and `false` otherwise.

```js
const output = {
  valid: boolean,
};
```

If `false` add also a `conflict` field as an array containing the strings `"row"`, `"column"`, and/or `"region"`, according to which area creates a conflict.

```js
const output = {
  valid: false,
  conflict: ["row"],
};
```

If `value` is already included in the puzzle string at the specified coordinate return an object containing a `valid` property with `true` if `value` is not conflicting.

```js
const output = {
  valid: true,
};
```

If the puzzle string contains values which are not numbers or periods return `{ error: 'Invalid characters in puzzle' }`.

If the puzzle string doesn't have 81 characters return `{ error: 'Expected puzzle to be 81 characters long' }`.

If the object is missing one of the three required fields return `{ error: 'Required field(s) missing' }`.

If `coordinate` points to cell beyond the scope of the grid return `{ error: 'Invalid coordinate'}`.

If `value` is not a valid number return `{ error: 'Invalid value' }`.

## Tests

### Unit tests

In `tests/1_unit-tests.js` write test to consider:

- a string of valid 81 characters

- a string of invalid characters

- a string of not 81 characters

- a valid row placement

- an invalid row placement

- a valid column placement

- an invalid column placement

- a valid region placement

- an invalid region placement

Beside these assertion ensure that:

- valid strings pass the solver (the solve function)

- invalid string fail the solver

- solver returns the expected solution for incomplete puzzles

### Functional tests

In `tests/2_functional-tests.js` write tests to test POST request to the two different routes.

For `/api/solve` test a request:

- with a valid string

- witout a string

- with invalid characters

- with a string of incorrect length

- with a string which cannot be solved

For `/api/check` test the placement:

- with all input fields

- with a single conflict

- with multiple conflict

- with all conflict

- with missing required fields

- with invalid characters

- with a string of incorrect length

- with an invalid coordinate

- with an invalid value

## Testing errors

In the unit test I first used `assert.throws` to consider the errors returned by the methods.

```js
assert.throws(
  () =>
    solver.validate(
      "82..4..6...06..89...98315.749.157.............AB..4...96.415..81..7632..3...28.51"
    ),
  "Invalid characters in puzzle"
);
```

The code works to execute the function, validate the error and the connected error message. However, running the project on freeCodeCamp the method is not picked up by the testing suite. If you'd visit `/_api/get-tests` you'd find an empty `"assertion"` field for the associated test.

```json
{
  "state": "passed",
  "assertions": []
}
```

The testing suite considers 12 valid unit tests as tests having at least an assertion, so the check fails.

One way to fix this is to execute the function in a `try..catch` block and check the error message through the `strictEqual` assertion instead.

```js
try {
  solver.validate(
    "82..4..6...06..89...98315.749.157.............AB..4...96.415..81..7632..3...28.51"
  );
} catch (error) {
  assert.strictEqual(error.message, "Invalid characters in puzzle");
}
```

`strictEqual` is detected and the final condition is met.

```json
{
  "state": "passed",
  "assertions": [
    {
      "method": "strictEqual",
      "args": ["solver..."]
    }
  ]
}
```
