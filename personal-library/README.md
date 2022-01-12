# Personal Library

Create an application similar [to the example Personal Library](https://personal-library.freecodecamp.rocks/).

## Links

- [Assignment](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/personal-library)

- [REPL](https://replit.com/@borntofrappe/boilerplate-project-library)

## Routes

Create routes within `routes/api.js`.

### POST

Handle a POST request to `/api/books` with an object with a `title` field.

```js
{
  title: string;
}
```

Return an object with the `title` and a unique `_id`.

```js
{
  title: string,
  _id: identifier
}
```

If `title` is not included return the string `missing required field title`.

### GET

Handle a GET request to `/api/books` by returning an array of objects for all books. For each book specify three fields: `title`, `_id`, and `commentcount`.

```js
[
  {
    title: string,
    _id: identifier,
    commentcount: number,
  },
];
```

Handle a GET request to `/api/books/{_id}` by returning a book matching the `_id` route parameter. Describe the book with an object with three fields: `title`, `_id`, and a `comments`.

```js
{
  title: string,
  _id: identifier,
  comments: array
}
```

`comments` is an array describing comments, more on this later. Without comments return an emoty array.

When no book matches the `_id` input return the string `no book exists`.

### POST/2

Handle a POST request to `/api/books/{_id}` with an object with a `comment` field. Return an object similar to the GET request to `/api/books/{_id}`.

```js
{
  title: string,
  _id: identifier,
  comments: array
}
```

When the POST request doesn't include a `comment` return the string `missing required field comment`.

When no book matches the `_id` input return the string `no book exists`.

### DELETE

Handle a DELETE request to `/api/books/{_id}` to delete a book. Return the string `delete successful` if successful.

When no book matches the `_id` input return the string `no book exists`.

Handle a DELETE request to `/api/books` to delete all book. Return the string `complete delete successful` if successful.

## Tests

Create functional tests in `tests/2_functional-tests.js`.

Unlike other projects in the curriculum the script already sets up the necessary tests. With the suite test:

- a POST request to `/api/books` with a `title` property

- a POST request to `/api/books` without the required `title`

- a GET request to `/api/books`

- a GET request to `/api/books/:id` with an invalid `_id`

- a GET request to `/api/books/:id` with a valid `_id`

- a POST request to `/api/books/:id` with a `comment` property

- a POST request to `/api/books/:id` without the required `comment` field

- a POST request to `/api/books/:id` with a `comment` property, but with an invalid `_id`

- a DELETE request to `/api/books/:id` with a valid `_id`

- a DELETE request to `/api/books/:id` with an invalid `_id`

## Notes

The application is first developed without a database, with the goal of focusing on the necessary routes and tests. Once both are implemented, the idea is to repurpose the project to rely from Mongo and Mongoose.

### NoDB

Without a database the application works with a local data structure, prepopulated with a few random books. `getRandomId` is defined as a utility function to create the `_id` value normally set up by Mongoose.

```js
function getRandomId() {
  return Math.random().toString().slice(2);
}
```

With the data structure creating a book is a matter of adding an item to the array, deleting a book is a matter of removing the item at the precised index.

The working application passes all the tests set up by freeCodeCamp, producing the following result in the online REPL.

```text
Running Tests...


  Functional Tests
    ✓ #example Test GET /api/books (74ms)
    Routing tests
      POST /api/books with title => create book object/expect book object
        ✓ Test POST /api/books with title
        ✓ Test POST /api/books with no title given
      GET /api/books => array of books
        ✓ Test GET /api/books
      GET /api/books/[id] => book object with [id]
        ✓ Test GET /api/books/[id] with id not in db (90ms)
        ✓ Test GET /api/books/[id] with valid id in db
      POST /api/books/[id] => add comment/expect book object with id
        ✓ Test POST /api/books/[id] with comment
        ✓ Test POST /api/books/[id] without comment field
        ✓ Test POST /api/books/[id] with comment, id not in db
      DELETE /api/books/[id] => delete book object id
        ✓ Test DELETE /api/books/[id] with valid id in db (53ms)
        ✓ Test DELETE /api/books/[id] with  id not in db


  11 passing (373ms)
```

### DB

With a database.

```text

```

<!--
zombie rewrite
 -->
