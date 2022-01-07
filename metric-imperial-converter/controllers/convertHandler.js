function ConvertHandler() {
  this.getNum = function (input) {
    const num = input.match(/[\d\/\.]+/);

    if (num) {
      const nums = num[0].split("/");
      if (nums.length > 2) {
        throw new Error("invalid number");
      }

      for (let num of nums) {
        const dots = num.match(/\./g);
        if (dots && dots.length > 1) {
          throw new Error("invalid number");
        }
      }

      return nums.map((d) => parseFloat(d)).reduce((acc, curr) => acc / curr);
    }

    return 1;
  };

  this.getUnit = function (input) {
    const units = {
      gal: "gal",
      l: "L",
      mi: "mi",
      km: "km",
      lbs: "lbs",
      kg: "kg",
    };

    const unit = input.match(/[^(\d\/\.)]+/);
    if (unit && units[unit[0].toLowerCase()]) {
      return units[unit[0].toLowerCase()];
    }

    throw new Error("invalid unit");
  };

  this.getReturnUnit = function (initUnit) {
    const returnUnits = {
      gal: "L",
      L: "gal",
      mi: "km",
      km: "mi",
      lbs: "kg",
      kg: "lbs",
    };

    return returnUnits[initUnit];
  };

  this.spellOutUnit = function (unit) {
    const spellOutUnits = {
      gal: "gallons",
      l: "liters",
      mi: "miles",
      km: "kilometers",
      lbs: "pounds",
      kg: "kilograms",
    };

    return spellOutUnits[unit.toLowerCase()];
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
    }

    return parseFloat(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
