# American British Translator

Create an application similar [to the example American British Translator](https://american-british-translator.freecodecamp.rocks/).

## Links

- [Assignment](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator)

- [REPL](https://replit.com/@borntofrappe/boilerplate-project-american-british-english-translator)

## API

Consider the only app route in `routes/api.js` with a POST request to `/api/translate`. The method receives an object with `text` and `locale`, with the goal of returning a JSON object with `text` and `translation`, containing the translated string.

```js
const text = "Mangoes are my favorite fruit.";
const locale = "american-to-british";

const output = {
  text: "Mangoes are my favorite fruit.",
  translation: 'Mangoes are my <span class="highlight">favourite</span> fruit.',
};
```

Refer to `/components/*.js` for the different terms. Starting from these files the application should handle:

- time; ten thirty is UK "10.30", US "10:30"

- title and honorifics; Doctor Wright is UK "Dr Wright", US "Dr. Wright"

Wrap any translated spelling or terms with a `<span>` element with a specific class.

```html
Dear <span class="highlight">Dr. Wright</span>, ...
```

In place of an object with the translated string return an error message in the following instances:

- the input object does not contain the required field(s); return `{ error: 'Required field(s) missing' }`.

- the input `text` is an empty string; return `{ error: 'No text to translate' }`

- the input `locale` does not match one of the valid values; return `{ error: 'Invalid value for locale field' }`. The application covers only two values, `american-to-british` and `british-to-american`

When the text doesn't need to be translated, finally, return `"Everything looks good to me!"` in the `translation` field.

## Translator

Translation takes place in `components/translator.js`.

Considering the requirements described in [the API section](#api) the `Traslator` builds a helpful data structure in the constructor function, to then use this information with different methods.

The data structure is an object with two keys matching the locale, both objects.

```js
{
  'american-to-british': {

  },
  'british-to-american': {

  }
}
```

In each object the idea is to store keywords and titles/honorifics, with the source and destination language.

```js
{
  'keywords': [],
  'titles': []
}
```

Separating the two helps given the need to handle the strings differently. Keywords can be translated with a regular expression considering word boundaries.

```js
new RegExp(`\\b${keyword}\\b`).test("Test string");
```

For titles the possible dot character `.` is considered a word boundary, which means the same technique does not work for all instances. Since titles are supposed to be followed by additional characters it's possible to test the sequence extending the regular expression.

```js
new RegExp(`\\b${title}\\b.+`);
```

What matters is that the title is identified and stored without the additional characters.

An additional complication comes in the form of capitalized strings. in this instance consider the first letter of the match and make the first character of the replacement string uppercase, if need be.

```js

```

## Test

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

Highlight the translation in:

- `Mangoes are my favorite fruit.`

- `I ate yogurt for breakfast.`

- `We watched the footie match for a while.`

- `Paracetamol takes up to an hour to work.`

### Functional tests

Write tests to perform POST requests and validate the returned object. Consider specifically a translation with:

- `text` and `locale`

- `text` and invalid `locale`

- missing `text`

- missing `locale`

- empty `text`

- `text` that needs no translation
