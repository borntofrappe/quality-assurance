"use strict";

const SudokuSolver = require("../controllers/sudoku-solver.js");

module.exports = function (app) {
  let solver = new SudokuSolver();

  app.route("/api/check").post((req, res) => {});

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
