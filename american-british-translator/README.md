# American British Translator

Create an application similar [to the example American British Translator](https://american-british-translator.freecodecamp.rocks/).

## Links

- [Assignment](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator)

- [Solution](https://replit.com/@borntofrappe/boilerplate-project-american-british-english-translator)

## API

Consider the only app route in `routes/api.js` with a POST request to `/api/translate`. The method receives an object with `text` and `locale`.

```js
const text = "Mangoes are my favorite fruit.";
const locale = "american-to-british";
```

With this information return an object with `text` and `translation`.

```js
const output = {
  text: "Mangoes are my favorite fruit.",
  translation: 'Mangoes are my <span class="highlight">favourite</span> fruit.',
};
```

Refer to the JavaScript files in the `/components` folder for the different terms. Starting from these files handle the exported values and also time — ten thirty is UK "10.30", US "10:30".

Wrap the translated portions in a `<span>` element with a specific class.

```html
Dear <span class="highlight">Dr. Wright</span>, ...
```

In place of an object with the translated string return an error message in the following instances:

- the input object does not contain the required field(s); return `{ error: 'Required field(s) missing' }`

- the input `text` is an empty string; return `{ error: 'No text to translate' }`

- the input `locale` does not match one of the valid values; return `{ error: 'Invalid value for locale field' }`.

  The application covers only two values, `american-to-british` and `british-to-american`

As a final instance return `"Everything looks good to me!"` in the `translation` field when the text doesn't need to be translated.

## Translator

Translation takes place in `components/translator.js`.

Considering the requirements described in [the API section](#api) the `Traslator` builds a data structure in the constructor function, to then use this information to translate an input string.

```js
this.dictionary = {
  "american-to-british": {},
  "british-to-american": {},
};
```

Each object describes a locale supported by the translator. Each object specifies three fields:

1. `keywords`, a 2D array describing the words and spelling to change from one language to another

2. `titles`, a 2D array describing the titles to change from one language to another

3. `timeSeparators`, an array of two items describing how time is separated in one language and another

Creating two separate 2D arrays is but one solution I found to translate the different terms. Words and spelling can be translated with a regular expression considering word boundaries.

```js
new RegExp(`\\b${keyword}\\b`);
```

For titles the possible dot character `.` is considered a word boundary, however. Since titles are supposed to be followed by a spaceit's possible to test the sequence extending the regular expression.

```js
new RegExp(`\\b${title} `);
```

What matters is that you consider the extra whitespace when translating the sentence, and most importantly include the translation in the `<span>` element.

An additional complication comes in the form of capitalized strings. In this instance one solution I found is to consider the first letter of the match and make the first character of the replacement string uppercase, if need be. To consider multiple casing I create a set with all possible matches. The approach is rather convoluted, but allows to translate capitalized and lowercase portions even in repeated instances.

## Test

As per the assignment write several tests in the `test` folder.

### Unit tests

Write tests to validate the translation of few strings:

- `Mangoes are my favorite fruit.` to British English

- `I ate yogurt for breakfast.` to British English

- `We had a party at my friend's condo.` to British English

- `Can you toss this in the trashcan for me?` to British English

- `The parking lot was full.` to British English

- `Like a high tech Rube Goldberg machine.` to British English

- `To play hooky means to skip class or work.` to British English

- `No Mr. Bond, I expect you to die.` to British English

- `Dr. Grosh will see you now.` to British English

- `Lunch is at 12:15 today.` to British English

- `We watched the footie match for a while.` to American English

- `Paracetamol takes up to an hour to work.` to American English

- `First, caramelise the onions.` to American English

- `I spent the bank holiday at the funfair.` to American English

- `I had a bicky then went to the chippy.` to American English

- `I've just got bits and bobs in my bum bag.` to American English

- `The car boot sale at Boxted Airfield was called off.` to American English

- `Have you met Mrs Kalyani?` to American English

- `Prof Joyner of King's College, London.` to American English

- `Tea time is usually around 4 or 4.30.` to American English

Since the `Translator` class returns the translation in a `<span>` element either create a separate logic to return the string as-is, without additional markup, or remove the extra HTML elements in the testing suite. Ultimately I chose the latter of teh two options.

Highlight the translation in:

- `Mangoes are my favorite fruit.`

- `I ate yogurt for breakfast.`

- `We watched the footie match for a while.`

- `Paracetamol takes up to an hour to work.`

### Functional tests

Write tests to perform POST requests and validate the returned object. Consider specifically a request with:

- `text` and `locale` fields

- `text` and invalid `locale`

- missing `text` field

- missing `locale` field

- empty `text`

- `text` that needs no translation
