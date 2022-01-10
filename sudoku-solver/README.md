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
