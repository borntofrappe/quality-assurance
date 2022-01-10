# Sudoku Solver

Create an application similar [to the example Metric-Imperial Converter](https://sudoku-solver.freecodecamp.rocks/).

## Links

- [Assignment](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/sudoku-solver)

- [REPL](https://replit.com/@borntofrappe/boilerplate-project-sudoku-solver)

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
