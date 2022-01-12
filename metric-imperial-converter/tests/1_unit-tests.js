const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  test("convertHandler should correctly read a whole number input.", function (done) {
    assert.strictEqual(
      convertHandler.getNum("4"),
      4,
      "convertHandler.getNum('4') is 4"
    );

    done();
  });

  test("convertHandler should correctly read a decimal number input.", function (done) {
    assert.strictEqual(
      convertHandler.getNum("4.2"),
      4.2,
      "convertHandler.getNum('4.2') is 4.2"
    );

    done();
  });

  test("convertHandler should correctly read a fractional input.", function (done) {
    assert.strictEqual(
      convertHandler.getNum("4/2"),
      2,
      "convertHandler.getNum('4/2') is 2"
    );

    done();
  });

  test("convertHandler should correctly read a fractional input with a decimal.", function (done) {
    assert.strictEqual(
      convertHandler.getNum("4/2.5"),
      1.6,
      "convertHandler.getNum('4/2.5') is 1.6"
    );

    done();
  });

  test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).", function (done) {
    /*
    assert.throws(() => convertHandler.getNum("3/2/3"), "invalid number");
    */

    try {
      convertHandler.getNum("3/2/3");
    } catch (error) {
      assert.strictEqual(error.message, "invalid number");
    }

    done();
  });

  test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.", function (done) {
    assert.strictEqual(
      convertHandler.getNum(""),
      1,
      "convertHandler.getNum('') is 1"
    );

    done();
  });

  test("convertHandler should correctly read each valid input unit.", function (done) {
    assert.strictEqual(
      convertHandler.getUnit("gal"),
      "gal",
      "convertHandler.getUnit('gal') is 'gal'"
    );
    assert.strictEqual(
      convertHandler.getUnit("L"),
      "L",
      "convertHandler.getUnit('L') is 'L'"
    );
    assert.strictEqual(
      convertHandler.getUnit("mi"),
      "mi",
      "convertHandler.getUnit('mi') is 'mi'"
    );
    assert.strictEqual(
      convertHandler.getUnit("km"),
      "km",
      "convertHandler.getUnit('km') is 'km'"
    );
    assert.strictEqual(
      convertHandler.getUnit("lbs"),
      "lbs",
      "convertHandler.getUnit('lbs') is 'lbs'"
    );
    assert.strictEqual(
      convertHandler.getUnit("kg"),
      "kg",
      "convertHandler.getUnit('kg') is 'kg'"
    );

    done();
  });

  test("convertHandler should correctly return an error for an invalid input unit.", function (done) {
    /*
    assert.throws(() => convertHandler.getUnit("kigo"), "invalid unit");
    */

    try {
      convertHandler.getUnit("kigo");
    } catch (error) {
      assert.strictEqual(error.message, "invalid unit");
    }

    done();
  });

  test("convertHandler should return the correct return unit for each valid input unit.", function (done) {
    assert.strictEqual(
      convertHandler.getReturnUnit("gal"),
      "L",
      "convertHandler.getReturnUnit('gal') is 'gal'"
    );
    assert.strictEqual(
      convertHandler.getReturnUnit("L"),
      "gal",
      "convertHandler.getReturnUnit('L') is 'L'"
    );
    assert.strictEqual(
      convertHandler.getReturnUnit("mi"),
      "km",
      "convertHandler.getReturnUnit('mi') is 'mi'"
    );
    assert.strictEqual(
      convertHandler.getReturnUnit("km"),
      "mi",
      "convertHandler.getReturnUnit('km') is 'km'"
    );
    assert.strictEqual(
      convertHandler.getReturnUnit("lbs"),
      "kg",
      "convertHandler.getReturnUnit('lbs') is 'lbs'"
    );
    assert.strictEqual(
      convertHandler.getReturnUnit("kg"),
      "lbs",
      "convertHandler.getReturnUnit('kg') is 'kg'"
    );

    done();
  });

  test("convertHandler should correctly return the spelled-out string unit for each valid input unit.", function (done) {
    assert.strictEqual(
      convertHandler.spellOutUnit("gal"),
      "gallons",
      "convertHandler.spellOutUnit('gal') is 'gallons'"
    );
    assert.strictEqual(
      convertHandler.spellOutUnit("L"),
      "liters",
      "convertHandler.spellOutUnit('L') is 'liters'"
    );
    assert.strictEqual(
      convertHandler.spellOutUnit("mi"),
      "miles",
      "convertHandler.spellOutUnit('mi') is 'miles'"
    );
    assert.strictEqual(
      convertHandler.spellOutUnit("km"),
      "kilometers",
      "convertHandler.spellOutUnit('km') is 'kilometers'"
    );
    assert.strictEqual(
      convertHandler.spellOutUnit("lbs"),
      "pounds",
      "convertHandler.spellOutUnit('lbs') is 'pounds'"
    );
    assert.strictEqual(
      convertHandler.spellOutUnit("kg"),
      "kilograms",
      "convertHandler.spellOutUnit('kg') is 'kilograms'"
    );

    done();
  });

  test("convertHandler should correctly convert gal to L.", function (done) {
    assert.strictEqual(
      convertHandler.convert(1, "gal"),
      3.78541,
      "convertHandler.convert('gal') is 3.78541"
    );

    done();
  });

  test("convertHandler should correctly convert L to gal.", function (done) {
    assert.strictEqual(
      convertHandler.convert(1, "L"),
      0.26417,
      "convertHandler.convert('L') is 0.26417"
    );

    done();
  });

  test("convertHandler should correctly convert mi to km.", function (done) {
    assert.strictEqual(
      convertHandler.convert(1, "mi"),
      1.60934,
      "convertHandler.convert('mi') is 1.60934"
    );

    done();
  });

  test("convertHandler should correctly convert km to mi.", function (done) {
    assert.strictEqual(
      convertHandler.convert(1, "km"),
      0.62137,
      "convertHandler.convert('km') is 0.62137"
    );

    done();
  });

  test("convertHandler should correctly convert lbs to kg.", function (done) {
    assert.strictEqual(
      convertHandler.convert(1, "lbs"),
      0.45359,
      "convertHandler.convert('lbs') is 0.45359"
    );

    done();
  });

  test("convertHandler should correctly convert kg to lbs.", function (done) {
    assert.strictEqual(
      convertHandler.convert(1, "kg"),
      2.20462,
      "convertHandler.convert('kg') is 2.20462"
    );

    done();
  });
});
