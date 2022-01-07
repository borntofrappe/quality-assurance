# Metric-Imperial Converter

Create an application similar [to the example Metric-Imperial Converter](https://metric-imperial-converter.freecodecamp.rocks/)

## Links

- [Assignment](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter)

- [Solution](https://replit.com/@borntofrappe/boilerplate-project-metricimpconverter)

## Notes

The assignment is sparse on details, both on how to get started and how to pass the relevant tests, but ultimately asks to work on four files:

- `routes/api.js`: set up how the application is supposed to respond to a GET request to `/api/convert`

- `controllers/convertHandler.js`: implement the logic necessary to extract the relevant information from the input string and compute the necessary conversion

- `tests/1_unit-tests.js` and `2_functional-tests.js`: validate the code with unit tests, evaluating a few values from the handler, and with functional tests, performing requests and evaluating the response

### API

The file in the controller folder initializes a series of functions, leading to the following structure for the GET request:

Retrieve the input from query parameters.

```js
const { input } = req.query;
```

Retrieve the number and unit of measure.

```js
const initNum = convertHandler.getNum(input);
const initUnit = convertHandler.getUnit(input);
```

Retrieve the converted unit of measure and value.

```js
const returnNum = convertHandler.convert(initNum, initUnit);
const returnUnit = convertHandler.getReturnUnit(initUnit);
```

Retrieve the string made up of the four values.

```js
const string = convertHandler.getString(
  initNum,
  initUnit,
  returnNum,
  returnUnit
);
```

When the conversion can take place the method returns a JSON object with all the different values.

```js
res.json({
  initNum,
  initUnit,
  returnNum,
  returnUnit,
  string,
});
```

Once you retrieve the number or unit and find at least an invalid measure, however, the function should terminate earlier with a hard-coded string.

```js
if (initNum === "invalid number" && initUnit === "invalid unit") {
  res.send("invalid number and unit");
}
if (initNum === "invalid number") {
  res.send("invalid number");
}
if (initUnit === "invalid unit") {
  res.send("invalid unit");
}
```

### ConvertHandler

The functions are populated to complete the different steps of the conversion.

`getNum` extracts the input number considering numerical values, the decimal point and the slash character for the division.

```js
const num = input.match(/[\d\/\.]+/);
```

The regular expression allows to consider a multitude of strings, from the expected `4` to the invalid `4/5/5` and `4.2.2/5`.

When there is no match return the prescribed default value of `1`.

When there is a match consider two particular instances:

1. there are more than two divisions

2. there are more than two decimal points for at least one number

In these instances return a string highlighting the invalid value. Outside of these instances return the number resulting from the division (or the number itself).

`getUnit` extracts the unit fo measure with a regular expression connected to the one describing the number.

```js
const unit = input.match(/[^(\d\/\.)]+/);
```

Here the idea is to consider a hard-coded object and return a unit when it exist in the data structure.

```js
const units = {
  gal: "gal",
  l: "L",
  mi: "mi",
  km: "km",
  lbs: "lbs",
  kg: "kg",
};
```

Outside of the different keys return a string highlighting the invalid measure.

`getReturnUnit` is similar to `getUnit`, but already receives a unit as an argument. From an object return the unit resulting from the conversion.

```js
const returnUnits = {
  gal: "L",
  L: "gal",
  mi: "km",
  km: "mi",
  lbs: "kg",
  kg: "lbs",
};
```

`spellOutUnit` looks for a value in yet another object, this time describing the unit in its long expression.

```js
const spellOutUnits = {
  gal: "gallons",
  l: "liters",
  mi: "miles",
  km: "kilometers",
  lbs: "pounds",
  kg: "kilograms",
};
```

`convert` computes the conversion for the input number and unit, based on three values and a switch statement.

```js
const galToL = 3.78541;
const lbsToKg = 0.453592;
const miToKm = 1.60934;

switch (initUnit) {
}
```

In the statement calculate the result considering the six possible units.

`getString` creates the desired string concatenating the four input values.

```text
1 gallons converts to 3.78541 liters
```

### tests

The section is more guided than the previous two, since the assignment goes through the tests point by point.

For the unit test consider the value returned by the `convertHandler` instance with the `assert` method.

For the functional tests perform GET requests through the `chai-http` module and evaluate the response.

### errors

I chose to ultimately revisit the project connected to the error messages. The application is supposed to highlight an error with an invalid number, unit, or both.

In the controller logic, instead of returning a string, throw an error for the prescribed instances.

```diff
-return "invalid number";
+throw new Error("invalid number");
```

In the unit test assert the errors through `assert.throws`.

```js
assert.throws(() => convertHandler.getNum("3/2/3"), "invalid number");
```

In the API route modify the logic to condition the conversion to `initNum` and `initUnit` actually describing a valid number and unit.

```js
try {
  initNum = convertHandler.getNum(input);
} catch (e) {}

try {
  initUnit = convertHandler.getUnit(input);
} catch (e) {}
```

I chose to include two `try` blocks since the assignment asks to send a specific string when both functions raise an error.
