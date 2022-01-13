# Quality Assurance

Notes and solutions to earn the [Quality Assurance](https://www.freecodecamp.org/learn/quality-assurance/) certification on the freeCodeCamp curriculum.

## Projects

_Please note:_ to run the tests in the different projects it is necessary to include a `NODE_ENV` property in a `.env○ file.

```.env
NODE_ENV=test
```

### [Metric-Imperial Converter](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter)

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

```text
Your app is listening on port 3000
Running Tests...


  Functional Tests
    ✓ #example Test GET /api/books (179ms)
    Routing tests
      POST /api/books with title => create book object/expect book object
        ✓ Test POST /api/books with title (197ms)
        ✓ Test POST /api/books with no title given
      GET /api/books => array of books
        ✓ Test GET /api/books (162ms)
      GET /api/books/[id] => book object with [id]
        ✓ Test GET /api/books/[id] with id not in db (150ms)
        ✓ Test GET /api/books/[id] with valid id in db (300ms)
      POST /api/books/[id] => add comment/expect book object with id
(node:1407) DeprecationWarning: collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.
        ✓ Test POST /api/books/[id] with comment (312ms)
        ✓ Test POST /api/books/[id] without comment field (159ms)
        ✓ Test POST /api/books/[id] with comment, id not in db (146ms)
      DELETE /api/books/[id] => delete book object id
        ✓ Test DELETE /api/books/[id] with valid id in db (464ms)
        ✓ Test DELETE /api/books/[id] with  id not in db (158ms)


  11 passing (2s)
```

### [Sudoku Solver](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/sudoku-solver)

```text
Running Tests...


  UnitTests
    ✓ Logic handles a valid puzzle string of 81 characters
    ✓ Logic handles a puzzle string with invalid characters (not 1-9 or `.`)
    ✓ Logic handles a puzzle string that is not 81 characters in length
    ✓ Logic handles a valid row placement
    ✓ Logic handles an invalid row placement
    ✓ Logic handles a valid column placement
    ✓ Logic handles an invalid column placement
    ✓ Logic handles a valid region (3x3 grid) placement
    ✓ Logic handles an invalid region (3x3 grid) placement
    ✓ Valid puzzle strings pass the solver
    ✓ Invalid puzzle strings fail the solver
    ✓ Solver returns the expected solution for an incomplete puzzle

  Functional Tests
    Test `api/solve`
      ✓ Solve a puzzle with valid puzzle string: POST request to `/api/solve` (52ms)
      ✓ Solve a puzzle with missing puzzle string: POST request to `/api/solve`
      ✓ Solve a puzzle with invalid characters: POST request to `/api/solve`
      ✓ Solve a puzzle with incorrect length: POST request to `/api/solve`
      ✓ Solve a puzzle that cannot be solved: POST request to `/api/solve`
    Test `api/check`
      ✓ Check a puzzle placement with all fields: POST request to `/api/check`
      ✓ Check a puzzle placement with single placement conflict: POST request to `/api/check`
      ✓ Check a puzzle placement with multiple placement conflicts: POST request to `/api/check`
      ✓ Check a puzzle placement with all placement conflicts: POST request to `/api/check`
      ✓ Check a puzzle placement with missing required fields: POST request to `/api/check`
      ✓ Check a puzzle placement with invalid characters: POST request to `/api/check`
      ✓ Check a puzzle placement with incorrect length: POST request to `/api/check`
      ✓ Check a puzzle placement with invalid placement coordinate: POST request to `/api/check`
      ✓ Check a puzzle placement with invalid placement value: POST request to `/api/check`


  26 passing (283ms)
```

### [American British Translator](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator)

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

#### Testing

Each test is described in a _suite_ and with the following structure.

```js
suite('Message introducing the testing suite', function () {
  test("Message introducing the test", function (done) {
    assert.METHOD(ASSERTION, "Message show when the assertion fails")
    // ...

    done()
  }
}
```

The strings passed as first argument to the `suite` and `test` functions are displayed in the console to contextualize the test. You validate the code in the body of the test and terminate the test executing the `done` function.

For instance and with a first assertion.

```js
const assert = chai.assert;
assert.isNull(null, "null is null");
```

If the test fails `chai` displays the error message passed as the last argument to further detail which check has failed.

#### null

Use `assert.isNull` and `assert.isNotNull` to test if the input value is null and not null respectively.

```js
assert.isNull(null, "null is null");
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

#### defined

Use `isDefined` and `isUndefined` to consider if a variable or a function is defined and undefined.

```js
assert.isDefined(null, "null is not undefined");
assert.isUndefined(undefined, "undefined IS undefined");
```

`null` is **not** undefined.

#### Truthy and falsy

Use `isOk` and `isNotOk` to test truthy and falsy values

```js
assert.isNotOk(null, "null is falsey");
assert.isOk("I'm truthy", "A string is truthy");
assert.isOk(true, "true is truthy");
```

In JavaScript there are only a few falsy values: `false`, `0`, `-0` and `0n` (zeros including BigInt zero), `""`, `''` and ``(empty strings), `null`, `undefined` and`NaN`. Everything else is truthy.

#### boolean

Use `isTrue` and `isNotTrue` to test `true` and not `true` values; use `isFalse` and `isNotFalse` to test the opposing boolean value.

```js
assert.isTrue(true, "true is true");
assert.isTrue(!!"double negation", "Double negation of a truthy value is true");
assert.isNotTrue(
  { value: "truthy" },
  "Objects are truthy, but are not boolean values"
);
```

The assertion only checks the two boolean values.

#### Loose equality

Use `equal` and `notEqual` to compare objects with two equal signs `==`.

```js
assert.equal(a, b, [message]);
```

```js
assert.equal(12, "12", "Numbers are coerced into strings with ==");
assert.notEqual({ value: 1 }, { value: 1 }, "== compares object references");
assert.equal(6 * "2", "12");
assert.notEqual(6 + "2", "12");
```

Objects are compared by reference:

- with `6 * '2'` JavaScript coerces the `'2'` to a number in order to compute the arithmetic operation

- with `6 + '2'` it is the number which is coerced to a string and the two halves are concatenated

#### Strict equality

Use `strictEqual`, `notStrictEqual` to compare objects with three equal signs `===`.

```js
assert.notStrictEqual(6, "6");
assert.strictEqual(6, 3 * 2);
assert.strictEqual(6 * "2", 12);
assert.notStrictEqual([1, "a", {}], [1, "a", {}]);
```

#### Deep equality

Use `deepEqual`, `notDeepEqual` to consider if two objects are deep equal, contain the same values.

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

#### Inequality

Use `isAbove`, `isAtMost` to compare two elements with the greater than sign `>` and with the smaller than or equal two sign `<=`.

```js
assert.isAtMost("hello".length, 5);
assert.isAbove(1, 0);
assert.isAbove(Math.PI, 3);
assert.isAtMost(1 - Math.random(), 1);
```

Use `isBelow`, `isAtLeast` to compare two elements with the smaller than sign `<` and with the greater than or equal to sign `>=`.

```js
assert.isAtLeast("world".length, 5);
assert.isAtLeast(2 * Math.random(), 0);
assert.isBelow(5 % 2, 2);
assert.isBelow(2 / 3, 1);
```

#### Approximately

Use `approximately` to test if a value falls in a given range.

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

In the snippet `weirdNumbers` returns the input number plus a value in the `[0, 1)` range, meaning `[0.5, 1.5)` in the first instance, `[0.2, 1.2)` in the second.

#### Array

Use `isArray`, `isNotArray` to test if the variable refers to an array.

```js
assert.isArray(
  "isThisAnArray?".split(""),
  "String.prototype.split() returns an array"
);
assert.isNotArray([1, 2, 3].indexOf(2), "indexOf returns a number");
```

Use `include`, `notInclude` to test if an array contains a specific item.

```js
assert.include(array, item, [message]);
```

```js
const winterMonths = ["dec,", "jan", "feb", "mar"];
const backendLanguages = ["php", "python", "javascript", "ruby", "asp"];

assert.notInclude(winterMonths, "jul", "It's summer in july...");
assert.include(backendLanguages, "javascript", "JS is a backend language");
```

#### String

- Use isString`, `isNotString` to test if the input is a string.

  ```js
  assert.isNotString(Math.sin(Math.PI / 4), "A float is not a string");
  assert.isString(
    process.env.PATH,
    "An env variable is a string (or undefined)"
  );
  assert.isString(JSON.stringify({ type: "object" }), "JSON is a string");
  ```

Use `include`, `notInclude` to test if a string contains a sequence of characters.

```js
assert.include(string, charsequence, [message]);
```

```js
assert.include("Arrow", "row", "'Arrow' contains 'row'");
assert.notInclude("dart", "queue", "But 'dart' doesn't contain 'queue'");
```

Use `match`, `notMatch` to compare strings against a regular expression.

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

#### Object

Use `property`, `notProperty` to check if an object has a certain property.

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

#### Type

Use `typeOf`, `notTypeOf` to consider the type of the variable

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

#### Instance

Use `instanceOf`, `notInstanceOf` to consider if an object is an instance of a constructor.

```js
assert.instanceOf(object, constructor);
```

```js
assert.notInstanceOf(myCar, Plane);
assert.instanceOf(airlinePlane, Plane);
assert.instanceOf(airlinePlane, Object);
assert.notInstanceOf(myCar.wheels, String);
```

#### http

`chai-http` allows to test asynchornous operations. Consider a server equipped to respond to a GET request with specific query parameters.

```text
request:  GET /hello?name=name
response: 'hello [name]'
```

With this setup the module is able to assert the response as follows.

```js
chai
  .request(server)
  .get("/hello?name=John")
  .end(function (err, res) {
    assert.equal(res.status, 200, "Response status should be 200");
    assert.equal(res.text, "hello John", 'Response should be "hello John"');
    done();
  });
```

`server` refers to the instance of the express app. In the REPL the value is exported from `server.js`.

The module supports several methods throw dedicated functions, like `get`, `post`, `put` and `delete`.

To send data in the request the module provides the `send` methods. .

```js
.put('/users')
.send(PAYLOAD)
```

To evaluate the response the `end` function terminates the asynchronous process with a callback function.

```js
.end(function(err, res) {
  // ...
})
```

The assertions are carried out on the response object or the error if need be.

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

#### zombie

`zombie` is a headless browser, a browser without an interface which allows to visit web pages similar to actual users. Together with `chai` the module allows to validate existing content, for instance the HTML elements rendered on the page.

The module is particularly suited to execute code outside of a test, before or after the validation, to ensure the appropriate setup. As a for instance `chai` might need to test that submitting a form modifies the rendered markup. Use `zombie` to visit the page, populate the form and submit its value.

Instruct which page to visit through the `site` property.

```js
const Browser = require("zombie");
Browser.site = "https://boilerplate-mochachai.borntofrappe.repl.co";
```

Create an instance of the browser.

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

`browser.fill` works as a promise which is resolved when the form is submitted. Chaining the `.then` function allows to then refer to the button in sequence. `pressButton` accepts as a second argument a callback function to validate the instance of the browser.

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

### Advanced Node and Express

[Link to REPL](https://replit.com/@borntofrappe/boilerplate-advancednode)

The goal is to create a node app with authentication, a templating engine and client-server communication.

#### pug

A template engine like `pug` produces the relevant HTML file at runtime.

```json
{
  "dependencies": {
    "pug": "~3.0.0"
  }
}
```

Set up the `pug` engine in the express app.

```js
app.set("view engine", "pug");
```

By default the application will look for the files in the `views/` folder.

```js
// views/index.pug
res.render("index.pug");
```

One of the benefits of a view engine is that it's possible to pass data to change the content rendered on page. From the `res.render` function send the relevant information as a second argument.

```js
res.render("/index.pug", {
  title: "Hello world",
  date: new Date(),
});
```

In the `.pug` file include the variable through a specific syntax. It's possible to include the value inline with the `#{}` sequence.

```pug
time=date.toDateString()
```

Or again following the equal sign character `=`.

```pug
h1=title
```

_Please note:_ pug is based on whitespace and indentation, and the documentation in [the module's README](https://github.com/pugjs/pug#syntax) provides more information.

#### passport and session

`passport` handles authentication validating the user. `express-session` stores information in a cookie and on the client, in order to compare the value to an identifier on the server and maintain a connection.

```json
{
  "dependencies": {
    "express-session": "~1.17.1",
    "passport": "~0.4.1"
  }
}
```

```js
const passport = require("passport");
const session = require("express-session");
```

Setup the session with a secret, a random value in the env value to use to encrypt the cookie

```js
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());
```

Passport works by serializing and de-serializing information. The process allows to transform an input object to a key, and the key back to the object. By storing the key it's possible to keep data secure.

With `serializeUser` passport receives the data and a callback to return a key. The key is often the `_id` created in the database, unique in value. Using only the identifier allows to reduce the amount of data stored.

```js
passport.serializeUser(user, (done) => {
  done(null, user.id);
});
```

With `deserialize` passport receives the key and a similar callback, this time to return the data.

```js
passport.deserializeUser(id, (done) => {
  User.findOne({ _id: id }, (err, user) => {
    done(null, user);
  });
});
```

To create an ID similar to one set up by the database use the `mongodb` library.

```json
{
  "dependencies": {
    "mongodb": "~3.6.0"
  }
}
```

```js
const ObjectID = require("mongodb").ObjectID;
```

The function will allow to create a unique identifier based on the key passed to the `deserialize` function.

```js
passport.deserializeUser((id, done) => {
  myDB.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, doc);
  });
});
```

Since the application relies on a database the app logic is conditioned to a valid connection.

```js
myDB(async (client) => {});
```

If the connection fails immediately render the error in the page.

```js
.catch((error) => {
  app.route("/").get((req, res) => {
    res.render("pug", {
      title: error,
      message: "Unable to login",
    });
  });
});
```

If the connection is established prompt the user to sign in.

First retrieve the relevant collection and render the correct page.

```js
myDB(async (client) => {
  const myDatabase = await client.db("database").collection("users");

  app.route("/").get();
});
```

Then include the passport functions to serialize and de-serialize the information.

```js
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  myDatabase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, doc);
  });
});
```

#### passport-local

Passport ultimately relies on a _strategy_ to authenticate users. Consider for instance a local strategy, relying on local data, or a GitHub strategy, relying on the social authentication provided by GitHub.

Install the relevant strategy and then follow the pertinent information.

```json
{
  "dependencies": {
    "passport-local": "~1.0.0"
  }
}
```

For the local strategy initialize the module.

```js
const LocalStrategy = require("passport-local");
```

Past the serialize and deserialize functions set up the strategy with `passport.use`.

```js
passport.use(new LocalStrategy());
```

The strategy receives a function with three arguments: a username, a password and a callback function to execute once you have handled the authentication.

```js
new LocalStrategy((username, password, done) => {});
```

Begin by looking for an existing user.

```js
myDatabase.findOne(
  {
    username,
  },
  (err, user) => {
    if (err) {
      return done(err);
    }
    console.log(`User ${username} attempted to log in`);
  }
);
```

If the user does not exist or the password does not match call `done` with a booelan describing the lack of authentication.

```js
if (!user) {
  return done(null, false);
}
if (password !== user.password) {
  return done(null, false);
}
```

Outside of these instances the user exists and the password matches. Authenticate the user returning the `done` function with the relevant document.

```js
return done(null, user);
```

#### Authenticate

Once you have set up the strategy the application routes are able to use `passport.authenticate` with said strategy.

```js
passport.authenticate("local");
```

The function works as a middleware, so that it is possible to authenticate the user before sending a response.

```js
app.route("/login").post(passport.authenticate("local"), (req, res) => {
  res.redirect("/profile");
});
```

It's possible to further customize the middleware with an object, for instance to instruct a redirect when the authentication fails.

```js
passport.authenticate("local", { failureRedirect: "/" });
```

When the authentication succeeds, finally, the document is saved in `req.user`.

```js
app.route("/profile").get((req, res) => {
  res.render("pug/profile.pug", {
    username: req.user.username,
  });
});
```

#### Ensure authentication

Passport adds a function to the request object to check if the user is indeed authenticated. It is possible to use this information in a middleware function to prevent a visit to `/profile` without the necessary permission.

In the middleware call `next` when passport was able to add the `isAuthenticated` function.

```js
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}
```

In the app route include the middleware prior to handling the response.

```js
app.route("/profile").get(ensureAuthenticated, (req, res) => {
  // render profile.pug
});
```

#### Log out

Log out by unauthenticating the user with `req.logout()`. The function is added by passport on the request object.

```js
req.logout();
res.redirect("/");
```

#### Register

When registering a user the idea is to consider the following sequence:

- query the database to find an existing user

- if the user exist redirect to a page, like profile or the home page

- if the user does not exist create a document and add it in the database with a username and password, before redirecting toward the desired page

When creating the document **do not** store the password in plain text, however. To add a layer of security use `bcrypt` module.

```json
{
  "dependencies": {
    "bcrypt": "~5.0.0"
  }
}
```

```js
const bcrypt = require("bcrypt");
```

Once initialized use the library and specifically the `hashSync` function to have a reference the passowrd more secure.

```js
const hash = bcrypt.hashSync(req.body.password, 12);
```

The idea is to store `username` and `hash`.

`hashSync` produces the secure hash. `compareSync` allows to then check if an input value is indeed a hash. The function is used to check if the password patches when authenticating the user.

```js
// if(password !== user.password) {}
if (!bcrypt.compareSync(password, user.password)) {
  return done(null, false);
}
```

#### Modules

In place of having the authentication and routing logic in the same file the curriculum suggests separating the functionalities and exporting the connected logic.

```js
module.exports = function (app, myDatabase) {};
```

The individual files require the necessary modules and implement the connected logic.

From the main file you then require the functionality and execute the logic as needed.

```js
const routes = require("./routes.js");
const auth = require("./auth.js");

// establish connection
const myDatabase = await client.db("database").collection("users");
routes(app, myDatabase);
auth(app, myDatabase);
```

#### passport-github

As an alternative to the local strategy set up with `passport-local` passport allows to authenticate users with GitHub and `passport-github`.

```js
const GitHubStrategy = require("passport-github").Strategy;
```

In this instance set up the strategy in `passport.use` with a series of options.

```js
passport.use(new GitHubStrategy({}));
```

Among these options three necessary values are: a client ID, a client secret and a callback URL. The information is retrieved from GitHub itself when creating a new application benefiting of the social authentication.

```js
new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL:
    "https://boilerplate-advancednode.borntofrappe.repl.co/auth/github/callback",
});
```

The strategy specifies with a second argument a callback function.

```js
new GitHubStrategy({}, (accessToken, refreshToken, profile, cb) => {
  // ..
});
```

`profile` is a sizeable object with information on the user. It's possible to use `profile.id` to retrieve a unique identifier and ultimately authenticate the user. Since the session object stores the identifier modify the `auth/github/callback` route to store its value, more on the route later.

```js
req.session.user_id = req.user.id;
```

In the specific application the information is used to create a document if necessary.

```js
myDatabase.findOneAndUpdate(
  { id: profile.id },
  {
    $setOnInsert: {
      id: profile.id,
      username: profile.displayName || "Default Name",
    },
    $set: {
      last_login: new Date(),
    },
    $inc: {
      login_count: 1,
    },
  },
  { upsert: true, new: true },
  (err, doc) => {
    return cb(null, doc.value);
  }
);
```

The different `$` directives allow to create a user in the database if necessary, update the `last_login` value and increment `login_count`.

The final callback allows the strategy to terminate and the express app to continue to the relevant page.

Just like with the local strategy, and past the set up, refer to the strategy by name to authenticate the user. Here there are two routes however.

With `auth/github/` prompt the social authentication.

```js
app.route("/auth/github").get(passport.authenticate("github"));
```

With `auth/github/callback` handle a successful redirect from GitHub.

```js
app
  .route("/auth/github/callback")
  .get(
    passport.authenticate("github", { failureRedirect: "/" }),
    (req, res) => {
      res.redirect("/profile");
    }
  );
```

The path ultimately matches the URL provided in the GitHub strategy.

#### socket

`socket.io` is a library to communicate with client and server.

```json
{
  "dependencies": {
    "socket.io": "~2.3.0"
  }
}
```

In terms of setup rely on the `http` module on top of the express app.

```js
const http = require("http").createServer(app);
```

Require the library passing the server as argument.

```js
const io = require("socket.io")(http);
```

Instead of listening on the app then, listen on the `http` module.

```js
http.listen(3000, () => {
  console.log("Listening on port 3000");
});
```

The instance of the socket library allows to consider events through the `on` keyword.

```js
io.on("event", (socket) => {
  // ..
});
```

The `connection` event, for instance, signals that a user was able to connect to the application.

```js
io.on("connection", (socket) => {
  console.log("User has connected");
});
```

Create an instance of `io()` on the client to capture the event. In `public/client.js`, a script run when the page is rendered, add the following:

```js
let socket = io();
```

One way to communicate through the library is through the `emit` method.

```js
io.emit("event", payload);
```

All connected sockets are then able to capture the event and consider the optional data passed through the function.

As a for instance consider a variable describing the number of connections established through the client. The instance on the client is equipped to log the value in the console.

```js
const socket = io();

socket.on("user count", (count) => {
  console.log(`${count} current users`);
});
```

The server then increments a local variable following a connection, before emitting the connected event to all sockets.

```js
let currentUsers = 0;

io.on("connection", (socket) => {
  ++currentUsers;
  io.emit("user count", currentUsers);
});
```

Through the `disconnect` event then, the server compensates the value when a client disconnects.

```js
socket.on("disconnect", () => {
  --currentUsers;
  io.emit("user count", currentUsers);
});
```

Notice how `connection` is tested on `io`, the server, while `disconnect` is captured on `socket`, the socket received through the connection and describing a single instance.

#### passport.socketio

To know the user the socket needs to tap in the information provided by passport. To achieve this the curriculum describes a setup with three npm pacakges: `connect-mongo`, `cookie-parser` and `passport.socketio`.

```json
{
  "dependencies": {
    "connect-mongo": "~3.2.0",
    "cookie-parser": "~1.4.5",
    "passport.socketio": "~3.7.0"
  }
}
```

The challenge instructs to initialize the modules in the server file.

```js
const passportSocketIo = require("passport.socketio");
const cookieParser = require("cookie-parser");
```

With `connect-mongo` specifically the idea is to create a store with the session object.

```js
const MongoStore = require("connect-mongo")(session);
const URI = process.env.MONGO_URI;
const store = new MongoStore({ url: URI });
```

The idea is to then use the store in the configuration of the socket library.

```js
io.use(
  passportSocketIo.authorize({
    cookieParser,
    key: "express.sid",
    secret: process.env.SESSION_SECRET,
    store,
    success: onAuthorizeSuccess,
    fail: onAuthorizeFail,
  })
);
```

The setup is similar to the middleware for the session since both rely on the same authentication method, on retrieving and validating a cookie. `key` sets the name of the cookie, which for the session was left unspecified. Update the field to match to have the two connect.

```js
app.use(
  session({
    // ...
    cookie: { secure: false },
    key: "express.sid",
    store,
  })
);
```

The `success` and `fail` functions are invoked with multiple parameters, among which a function to signal that the authorization has succeeded or failed.

```js
function onAuthorizeSuccess(data, accept) {
  accept(null, true);
}

function onAuthorizeFail(data, message, error, accept) {
  accept(null, false);
}
```

The entire setup allows `socket.request` to retrieve the user object set in the session.

```js
console.log(`${socket.request.user.name} has connected`);
```

**Update**: as of January 2022 the instructions provided in the curriculum do not work as expected. [One issue](https://github.com/jfromaniello/passport.socketio/issues/148) on the `passport.socketio` module, at the time a deprecated module, points toward the solution:

1. remove the deprecated library from `package.json` and remove any reference to the module in `server.js`

2. store the session middleware in a variable

   ```js
   const sessionMiddleware = session({
     secret: process.env.SESSION_SECRET,
     resave: true,
     saveUninitialized: true,
     cookie: { secure: false },
     key: "express.sid",
     store,
   });
   ```

3. pass the middleware to `app.use`

   ```js
   app.use(sessionMiddleware);
   ```

4. pass the middleware to `io.use`, but this time using a `wrap` function around the middleware

   ```js
   const wrap = (middleware) => (socket, next) =>
     middleware(socket.request, {}, next);
   io.use(wrap(sessionMiddleware));
   ```

5. repeat 3. and 4. adding the `passport.initialize()` and `passport.session()` middleware

The only issue with this working solution is that the code no longer passes the tests set up on the curriculum. The user is however displayed in the console as being connected, and future challenges do pass the connected tests.

#### socket practice

To practice with the socket library the curriculum ends with two additional features shown through `chat.pug`: display when a user is connected and disconnected, display messages from a specific user.

For the first feature emit a `user` event from the socket on the server, when a connection takes place:

```js
io.emit("user", {
  name: socket.request.user.name,
  currentUsers,
  connected: true,
});
```

On the client then listen for the matching event and add the relevant information in specific HTML elements.

```js
socket.on("user", ({ name, currentUsers, connected }) => {
  $("#num-users").text(`${currentUsers} users online`);
  const message = `${name} has ${connected ? "joined" : "left"} the chat`;
  $("#messages").append($("<li>").html(`<b>${message}</b>`));
});
```

For the second feature it is first necessary to consider user input, therefore the client. Following the `submit` event emit an event with the retrieved text value.

```js
$("form").submit(function () {
  const messageToSend = $("#m").val();

  socket.emit("chat message", messageToSend);
});
```

On the server listen to the event on the individual socket and emit a corresponding event from server, adding the name of the associated user.

```js
socket.on("chat message", (message) => {
  io.emit("chat message", {
    name: socket.request.user.name,
    message,
  });
});
```

On the client, finally, listen to the event and append the value to the destination root element.

```js
socket.on("chat message", ({ name, message }) => {
  $("#messages").append($("li").text(`${name}: ${message}`));
});
```
