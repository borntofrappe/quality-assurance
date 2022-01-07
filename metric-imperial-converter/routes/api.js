"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    const { input } = req.query;

    let initNum;
    let initUnit;

    try {
      initNum = convertHandler.getNum(input);
    } catch (e) {}

    try {
      initUnit = convertHandler.getUnit(input);
    } catch (e) {}

    if (!initNum && !initUnit) {
      res.send("invalid number and unit");
    } else if (!initNum) {
      res.send("invalid number");
    } else if (!initUnit) {
      res.send("invalid unit");
    } else {
      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const string = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      );

      res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string,
      });
    }
  });
};
