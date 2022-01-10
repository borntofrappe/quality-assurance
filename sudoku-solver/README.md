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
