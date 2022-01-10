class SudokuSolver {
  validate(puzzleString) {
    if (puzzleString.length !== 81) {
      throw new Error("Expected puzzle to be 81 characters long");
    }

    if (new RegExp(/[^1-9\.]/).test(puzzleString)) {
      throw new Error("Invalid characters in puzzle");
    }

    for (let i = 0; i < puzzleString.length; i++) {
      const value = puzzleString[i];
      if (value !== ".") {
        const column = i % 9;
        const row = Math.floor(i / 9);

        const pS = `${puzzleString.slice(0, i)}.${puzzleString.slice(i + 1)}`;

        if (
          !this.checkRowPlacement(pS, row, column, value) ||
          !this.checkColPlacement(pS, row, column, value) ||
          !this.checkRegionPlacement(pS, row, column, value)
        ) {
          throw new Error("Puzzle cannot be solved");
        }
      }
    }

    return true;
  }

  checkRowPlacement(puzzleString, row, column, value) {
    const v = value.toString();

    for (let c = 0; c < 9; c++) {
      if (puzzleString[row * 9 + c] === v && column !== c) {
        return false;
      }
    }

    return true;
  }

  checkColPlacement(puzzleString, row, column, value) {
    const v = value.toString();

    for (let r = 0; r < 9; r++) {
      if (puzzleString[column + r * 9] === v && row !== r) {
        return false;
      }
    }

    return true;
  }

  checkRegionPlacement(puzzleString, row, column, value) {
    const c = Math.floor(column / 3) * 3;
    const r = Math.floor(row / 3) * 3;
    const v = value.toString();

    const s = c + r * 9;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (
          puzzleString[s + j + i * 9] === v &&
          c + j !== column &&
          r + i !== row
        ) {
          return false;
        }
      }
    }

    return true;
  }

  recursiveSolve(puzzleString) {
    for (let i = 0; i < puzzleString.length; i++) {
      if (puzzleString[i] === ".") {
        const column = i % 9;
        const row = Math.floor(i / 9);

        for (let d = 1; d <= 9; d++) {
          if (
            this.checkRowPlacement(puzzleString, row, column, d) &&
            this.checkColPlacement(puzzleString, row, column, d) &&
            this.checkRegionPlacement(puzzleString, row, column, d)
          ) {
            if (!this.solution) {
              this.recursiveSolve(
                `${puzzleString.slice(0, i)}${d}${puzzleString.slice(i + 1)}`,
                i + 1
              );
            }
          }
        }
        return this.solution || false;
      }
    }
    this.solution = puzzleString;
    return puzzleString;
  }

  solve(puzzleString) {
    this.solution = null;
    return this.recursiveSolve(puzzleString);
  }
}

module.exports = SudokuSolver;
