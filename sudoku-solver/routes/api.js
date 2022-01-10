"use strict";

const SudokuSolver = require("../controllers/sudoku-solver.js");

module.exports = function (app) {
  let solver = new SudokuSolver();

  app.route("/api/check").post((req, res) => {
    const { puzzle, coordinate, value } = req.body;

    if (!puzzle || !coordinate || !value) {
      return res.json({ error: "Required field(s) missing" });
    }

    const [letter, number, extra] = coordinate.split("");

    if (
      !new RegExp(/^[A-I]$/).test(letter) ||
      !new RegExp(/^[1-9]$/).test(number) ||
      extra
    ) {
      return res.json({ error: "Invalid coordinate" });
    }

    if (!new RegExp(/^[1-9]$/).test(value)) {
      return res.json({ error: "Invalid value" });
    }

    try {
      solver.validate(puzzle);
    } catch (error) {
      return res.json({
        error: error.message,
      });
    }

    const row = letter.charCodeAt() - "A".charCodeAt();
    const column = parseInt(number) - 1;

    const conflict = Object.entries({
      row: solver.checkRowPlacement(puzzle, row, column, value),
      column: solver.checkColPlacement(puzzle, row, column, value),
      region: solver.checkRegionPlacement(puzzle, row, column, value),
    }).reduce((acc, curr) => (curr[1] ? [...acc] : [...acc, curr[0]]), []);

    const valid = conflict.length === 0;

    if (valid) {
      return res.json({ valid });
    }

    return res.json({ valid, conflict });
  });

  app.route("/api/solve").post((req, res) => {
    const { puzzle } = req.body;

    if (!puzzle) {
      return res.json({ error: "Required field missing" });
    }

    try {
      solver.validate(puzzle);
    } catch (error) {
      return res.json({
        error: error.message,
      });
    }

    const solution = solver.solve(puzzle);
    return res.json({
      solution,
    });
  });
};
