# Quality Assurance

Notes and solutions to earn the [Quality Assurance](https://www.freecodecamp.org/learn/quality-assurance/) certification on the freeCodeCamp curriculum.

## Projects

### [Metric-Imperial Converter](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter)

```json
{
  "initNum": 1,
  "initUnit": "gal",
  "returnNum": 3.78541,
  "returnUnit": "L",
  "string": "1 gallons converts to 3.78541 liters"
}
```

```text
Running Tests...
  Unit Tests
    ✓ convertHandler should correctly read a whole number input.
    ✓ convertHandler should correctly read a decimal number input.
    ✓ convertHandler should correctly read a fractional input.
    ✓ convertHandler should correctly read a fractional input with a decimal.
    ✓ convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
    ✓ convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
    ✓ convertHandler should correctly read each valid input unit.
    ✓ convertHandler should correctly return an error for an invalid input unit.
    ✓ convertHandler should return the correct return unit for each valid input unit.
    ✓ convertHandler should correctly return the spelled-out string unit for each valid input unit.
    ✓ convertHandler should correctly convert gal to L.
    ✓ convertHandler should correctly convert L to gal.
    ✓ convertHandler should correctly convert mi to km.
    ✓ convertHandler should correctly convert km to mi.
    ✓ convertHandler should correctly convert lbs to kg.
    ✓ convertHandler should correctly convert kg to lbs.

  Functional Tests
    ✓ Convert a valid input such as 10L: GET request to /api/convert.
    ✓ Convert an invalid input such as 32g: GET request to /api/convert.
    ✓ Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.
    ✓ Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert. (128ms)
    ✓ Convert with no number such as kg: GET request to /api/convert.


  21 passing (259ms)
```

### [Issue Tracker](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/issue-tracker)

```json
{
  "assigned_to": "borntofrappe",
  "status_text": "in progress",
  "open": true,
  "_id": "7850679728413206",
  "issue_title": "App routes",
  "issue_text": "Handle app routes in routes/api.js",
  "created_by": "borntofrappe",
  "created_on": "2022-01-07T14:52:47.336Z",
  "updated_on": "2022-01-07T14:52:47.336Z"
}
```

```text
Running Tests...


  Functional Tests
    ✓ Create an issue with every field: POST request to `/api/issues/{project}`
    ✓ Create an issue with only required fields: POST request to `/api/issues/{project}` (63ms)
    ✓ Create an issue with missing required fields: POST request to `/api/issues/{project}`
    ✓ View issues on a project: GET request to `/api/issues/{project}`
    ✓ View issues on a project with one filter: GET request to `/api/issues/{project}` (80ms)
    ✓ View issues on a project with multiple filters: GET request to `/api/issues/{project}`
    ✓ Update one field on an issue: PUT request to `/api/issues/{project}`
    ✓ Update multiple fields on an issue: PUT request to `/api/issues/{project}`
    ✓ Update an issue with missing `_id`: PUT request to `/api/issues/{project}`
    ✓ Update an issue with no fields to update: PUT request to `/api/issues/{project}`
    ✓ Update an issue with an invalid `_id`: PUT request to `/api/issues/{project}` (72ms)
    ✓ Delete an issue: DELETE request to `/api/issues/{project}`
    ✓ Delete an issue with an invalid `_id`: DELETE request to `/api/issues/{project}`
    ✓ Delete an issue with missing `_id`: DELETE request to `/api/issues/{project}`


  14 passing (531ms)
```

### [Personal Library](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/personal-library)

### [Sudoku Solver](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/sudoku-solver)

### [American British Translator](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator)

```js
const text =
  "Loudhailer is sure a funny word in British English. Unfortunately it's lost in translation. Like pritt-stick and ice lolly. Look them up, I promise you won't regret it. By the way, and at this very moment, the clock tells me it's 20.18. At least in the UK.";
const locale = "british-to-american";

const translation =
  "Megaphone is sure a funny word in British English. Unfortunately it's lost in translation. Like glue stick and popsicle. Look them up, I promise you won't regret it. By the way, and at this very moment, the clock tells me it's 20:18. At least in the UK.";

const highlight = `<span class="highlight">Megaphone</span> is sure a funny word in British English. Unfortunately it's lost in translation. Like <span class="highlight">glue stick</span> and <span class="highlight">popsicle</span>. Look them up, I promise you won't regret it. By the way, and at this very moment, the clock tells me it's <span class="highlight">20:18</span>. At least in the UK.`;
```

```text
Running Tests...


  Unit Tests
    Test translation
      ✓ Translate `Mangoes are my favorite fruit.` to British English (274ms)
      ✓ Translate `I ate yogurt for breakfast.` to British English
      ✓ Translate `We had a party at my friend's condo.` to British English
      ✓ Translate `Can you toss this in the trashcan for me?` to British English
      ✓ Translate `The parking lot was full.` to British English
      ✓ Translate `Like a high tech Rube Goldberg machine.` to British English (53ms)
      ✓ Translate `To play hooky means to skip class or work.` to British English
      ✓ Translate `No Mr. Bond, I expect you to die.` to British English
      ✓ Translate `Dr Grosh will see you now.` to British English (80ms)
      ✓ Translate `Lunch is at 12:15 today.` to British English
      ✓ Translate `We watched the footie match for a while.` to American English (222ms)
      ✓ Translate `Paracetamol takes up to an hour to work.` to American English
      ✓ Translate `First, caramelise the onions.` to American English
      ✓ Translate `I spent the bank holiday at the funfair.` to American English
      ✓ Translate `I had a bicky then went to the chippy.` to American English
      ✓ Translate `I've just got bits and bobs in my bum bag.` to American English
      ✓ Translate `The car boot sale at Boxted Airfield was called off.` to American English (45ms)
      ✓ Translate `Have you met Mrs Kalyani?` to American English
      ✓ Translate `Prof Joyner of King's College, London.` to American English
      ✓ Translate `Tea time is usually around 4 or 4.30.` to American English
    Test highlight syntax
      ✓ Highlight the translation in `Mangoes are my favorite fruit.`
      ✓ Highlight the translation in `I ate yogurt for breakfast.`
      ✓ Highlight the translation in `We watched the footie match for a while.`
      ✓ Highlight the translation in `Paracetamol takes up to an hour to work.`

  Functional Tests
    Test POST requests
      ✓ Translation with text and locale fields: POST request `to /api/translate` (75ms)
      ✓ Translation with text and invalid locale field: POST request `to /api/translate`
      ✓ Translation with missing text field: POST request `to /api/translate`
      ✓ Translation with missing locale field: POST request `to /api/translate`
      ✓ Translation with empty text: POST request `to /api/translate`
      ✓ Translation with text that needs no translation: POST request `to /api/translate`


  30 passing (1s)
```

## Courses

### Quality Assurance and Testing with Chai

[Link to REPL](https://replit.com/@borntofrappe/boilerplate-mochachai)

The goal is to confirm that a program behaves as intended. Chai works as a library to write tests that the program needs to meet.

```js
const chai = require("chai");
```

Assertions work to consider the value of an input variable.

```js
const assert = chai.assert;
assert.method(input, errorMessage);
```

- `assert.isNull` and `assert.isNotNull` to test if the input value is null and not null respectively

  ```js
  assert.isNull(null, "Error description displayed if the test fails");
  assert.isNotNull(1, "1 is not null");
  ```

  Already running the project in the REPL shows the consequence of the assertion.

  ```bash
  Running Tests...
    Unit Tests
      Basic Assertions
        ✔ #isNull, #isNotNull
        1) #isDefined, #isUndefined
        2) #isOk, #isNotOk
        3) #isTrue, #isNotTrue

  # ...
  1 passing (157ms)
  24 failing
  ```

- `isDefined` and `isUndefined` to consider if a variable or a function is defined and undefined

  ```js
  assert.isDefined(null, "null is not undefined");
  assert.isUndefined(undefined, "undefined IS undefined");
  ```

  `null` is **not** undefined.

- `isOk` and `isNotOk` to test truthy and falsy values

  ```js
  assert.isNotOk(null, "null is falsey");
  assert.isOk("I'm truthy", "A string is truthy");
  assert.isOk(true, "true is truthy");
  ```

  In JavaScript there are only a few falsy values: `false`, `0`, `-0` and `0n` (zeros including BigInt zero), `""`, `''` and ``(empty strings), `null`, `undefined` and`NaN`. Everything else is truthy

- `isTrue` and `isNotTrue` to test `true` and not `true` values; `isFalse` and `isNotFalse` to test the opposing boolean `false`

  ```js
  assert.isTrue(true, "true is true");
  assert.isTrue(
    !!"double negation",
    "Double negation of a truthy value is true"
  );
  assert.isNotTrue(
    { value: "truthy" },
    "Objects are truthy, but are not boolean values"
  );
  ```

  The assertion only checks the two boolean values

- `equal` and `notEqual` to compare objects with two equal signs `==`.

  The functions receive two arguments compared with the specified operator

  ```js
  assert.equal(a, b, [message]);
  ```

  ```js
  assert.equal(12, "12", "Numbers are coerced into strings with ==");
  assert.notEqual({ value: 1 }, { value: 1 }, "== compares object references");
  assert.equal(6 * "2", "12");
  assert.notEqual(6 + "2", "12");
  ```

  Objects are compared by reference.

  With `6 * '2'` JavaScript coerces the `'2'` to a number in order to compute the arithmetic operation.

  With `6 + '2'` it is the number which is coerced to a string and the two halves are concatenated.

- `strictEqual`, `notStrictEqual` to compare objects with three equal signs `===`

  ```js
  assert.notStrictEqual(6, "6");
  assert.strictEqual(6, 3 * 2);
  assert.strictEqual(6 * "2", 12);
  assert.notStrictEqual([1, "a", {}], [1, "a", {}]);
  ```

- `deepEqual`, `notDeepEqual` to consider if two objects are deep equal, contain the same values

  ```js
  assert.deepEqual(
    { a: "1", b: 5 },
    { b: 5, a: "1" },
    "The order of keys doesn't matter"
  );
  assert.notDeepEqual(
    { a: [5, 6] },
    { a: [6, 5] },
    "The order of array elements does matter"
  );
  ```

  Order matters in the items of the arrays, not in the keys of objects.

- `isAbove`, `isAtMost` to compare two elements with the comparison operators `>` and `<=`

  ```js
  assert.isAtMost("hello".length, 5);
  assert.isAbove(1, 0);
  assert.isAbove(Math.PI, 3);
  assert.isAtMost(1 - Math.random(), 1);
  ```

- `isBelow`, `isAtLeast` to compare two elements with `<` and `>=`

  ```js
  assert.isAtLeast("world".length, 5);
  assert.isAtLeast(2 * Math.random(), 0);
  assert.isBelow(5 % 2, 2);
  assert.isBelow(2 / 3, 1);
  ```

- `approximately` to test if a value falls in a given range

  ```js
  assert.approximately(value, expected, delta, [message]);
  ```

  ```js
  function weirdNumbers(delta) {
    return 1 + delta - Math.random();
  }

  assert.approximately(weirdNumbers(0.5), 1, 0.5);
  assert.approximately(weirdNumbers(0.2), 1, 0.8);
  ```

  `weirdNumbers` returns the input number plus a value in the `[0, 1)` range, meaning `[0.5, 1.5)` in the first instance, `[0.2, 1.2)` in the second.

- `isArray`, `isNotArray` to test if the variable refers to an array

  ```js
  assert.isArray(
    "isThisAnArray?".split(""),
    "String.prototype.split() returns an array"
  );
  assert.isNotArray([1, 2, 3].indexOf(2), "indexOf returns a number");
  ```

- `include`, `notInclude` to test if an array contains a value

  ```js
  assert.include(array, item, [message]);
  ```

  ```js
  const winterMonths = ["dec,", "jan", "feb", "mar"];
  const backendLanguages = ["php", "python", "javascript", "ruby", "asp"];

  assert.notInclude(winterMonths, "jul", "It's summer in july...");
  assert.include(backendLanguages, "javascript", "JS is a backend language");
  ```

- isString`, `isNotString` to test if the input is a string

  ```js
  assert.isNotString(Math.sin(Math.PI / 4), "A float is not a string");
  assert.isString(
    process.env.PATH,
    "An env variable is a string (or undefined)"
  );
  assert.isString(JSON.stringify({ type: "object" }), "JSON is a string");
  ```

- `include`, `notInclude` to test if a string contains a sequence of characters

  ```js
  assert.include(string, charsequence, [message]);
  ```

  ```js
  assert.include("Arrow", "row", "'Arrow' contains 'row'");
  assert.notInclude("dart", "queue", "But 'dart' doesn't contain 'queue'");
  ```

- `match`, `notMatch` to compare strings against a regular expression

  ```js
  assert.match(string, regex, [message]);
  ```

  ```js
  const formatPeople = function (name, age) {
    return "# name: " + name + ", age: " + age + "\n";
  };

  const regex = /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;

  assert.match(formatPeople("John Doe", 35), regex);
  assert.notMatch(formatPeople("Paul Smith III", "twenty-four"), regex);
  ```

- `property`, `notProperty` to check if an object has a certain property

  ```js
  assert.property(object, property, [message]);
  ```

  ```js
  const Car = function () {
    this.model = "sedan";
    this.engines = 1;
    this.wheels = 4;
  };

  const Plane = function () {
    this.model = "737";
    this.engines = ["left", "right"];
    this.wheels = 6;
    this.wings = 2;
  };

  const myCar = new Car();
  const airlinePlane = new Plane();
  ```

- `typeOf`, `notTypeOf` to consider the type of the variable

  ```js
  assert.typeOf(object, type, [message]);
  ```

  Include the type as a string since chai uses the `toString` method to retrieve the value.

  ```js
  assert.typeOf(myCar, "object");
  assert.typeOf(myCar.model, "string");
  assert.notTypeOf(airlinePlane.wings, "string");
  assert.typeOf(airlinePlane.engines, "array");
  assert.typeOf(myCar.wheels, "number");
  ```

- `instanceOf`, `notInstanceOf` to consider if an object is an instance of a constructor

  ```js
  assert.instanceOf(object, constructor);
  ```

  ```js
  assert.notInstanceOf(myCar, Plane);
  assert.instanceOf(airlinePlane, Plane);
  assert.instanceOf(airlinePlane, Object);
  assert.notInstanceOf(myCar.wheels, String);
  ```

`chai-http` allows to test asynchornous operations. Consider a server equipped to respond to a GET request to a specific endpoint and with specific query parameters with a string

```text
request:  GET /hello?name=name
response: 'hello [name]'
```

With this setup the module is able to assert the response as follows.

```js
suite('GET /hello?name=[name] => "hello [name]"', function () {
  test("?name=John", function (done) {
    chai
      .request(server)
      .get("/hello?name=John")
      .end(function (err, res) {
        assert.equal(res.status, 200, "Response status should be 200");
        assert.equal(res.text, "hello John", 'Response should be "hello John"');
        done();
      });
  });
});
```

The strings passed as first argument to the `suite` and `test` functions are displayed in the console to contextualize the test. The function responsible for the testing is `chai.request`.

`done` is used to signal the end of the asynchronous function.

`server` refers to the instance of the express app. In the REPL the value is exported from `server.js`.

```js
.get('/hello?name=Guest')
.end(function (err, res) {
  assert.equal(res.status, 200);
  assert.equal(res.text, 'hello Guest');
  done();
});
```

To test a PUT request the module offers the `put` and `send` methods. `send` is used to send the payload to the request.

```js
.put('/users')
.send({
  "name": "Titmothy"
})
```

Chain the `end` method to then consider the request.

```js
.end(function(err, res) {
  assert.equal(res.status, 200);
  // ...
})
```

```js
.put('/travellers')
.send({
    "surname": "Colombo"
})
.end(function (err, res) {
  assert.equal(res.status, 200);
  assert.equal(res.type, 'application/json');
  assert.equal(res.body.name, 'Cristoforo');
  assert.equal(res.body.surname, 'Colombo');
  done();
});
```

A headless browser like `zombie` allows to visit web pages similar to actual users, and through the testing library allows to test HTML, CSS and JavaScript rendered.

It is possible to run code before running a test, or at the end of a test, to ensure that the test proceed with a certain setup, but it is first necessary to instruct the `zombie` library with the site to-be-visited.

```js
const Browser = require("zombie");
Browser.site = "https://boilerplate-mochachai.borntofrappe.repl.co";
```

With the information create an instance of the browser.

```js
const browser = new Browser();
```

Use the `suiteSetup` hook as a function run once, when the testing suite is prepared.

```js
suiteSetup(function (done) {
  return browser.visit("/", done);
});
```

The setup allows later `suite` functions to assert values based on the visited page, the root level of the specified site.

To interact with a form the `zombie` package provides the `fill` and `pressButton` function, populating the input element by name and then submitting the value through the matching button.

```js
test('Submit the name "Polo" in the HTML form', function (done) {
  browser.fill("surname", "Polo").then(() => {
    browser.pressButton("submit", () => {
      browser.assert.success();
      browser.assert.text("span#name", "Marco");
      // ..
      done();
    });
  });
});
```

`browser.fill` works as a promise which is resolved when the form is submitted. Chaining the `.then` function allows to then refer to the button in sequence. `pressButton` accepts as a second argument a callback function to validate the instance of the browser. In the snippet the assertions ensure that the page is populated with the information provided through the makeshift request.

```js
browser.fill("surname", "Colombo").then(() => {
  browser.pressButton("submit", () => {
    browser.assert.success();
    browser.assert.text("span#name", "Cristoforo");
    browser.assert.text("span#surname", "Colombo");
    browser.assert.elements("span#dates", 1);
    done();
  });
});
```

While `success` checks the status code to match 200, `text` asserts the text of an element specified through a CSS selector and `elements` checks the number of elements nested in the selected container.
