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

The application is first developed without a database, with the goal of focusing on the necessary routes and tests. Once both are implemented, the idea is to repurpose the project to benefit from Mongo and Mongoose. <!-- To handle the connection it might be necessary to update `server.js` as well. -->
