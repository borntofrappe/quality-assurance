# Issue Tracker

Create an application similar [to the example Issue Tracker](https://issue-tracker.freecodecamp.rocks/).

## Links

- [Assignment](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/issue-tracker)

- [Solution](https://replit.com/@borntofrappe/boilerplate-project-issuetracker)

## API

Complete the necessary routes in `/routes/api.js`.

### GET

Respond to a GET request to `/api/issues/{projectname}` with array of issues. Filter the issues according to query parameters, covering all of the possible fields.

### POST

Respond to a POST request to `/api/issues/{projectname}` with an object describing the issue. Include the issue in the project's issues.

The issue is created with required, optional, and default fields:

- required: `issue_title`, `issue_text`, `created_by`. If one is missing return an error message: `{ error: 'required field(s) missing' }`

- optional: `assigned_to`, `status_text`. Initialize with an empty string if the value is not received

- default: `created_on` and `updated_on`, both using the current date, and `open`, true, `_id`, identifying the issue

### PUT

Respond to a PUT request to `/api/issues/{projectname}` with an object describing whether or not the update was successful.

If the request does not include the `_id` return `{ error: 'missing _id' }`.

If the request does not include update fields return `{ error: 'no update field(s) sent', '_id': _id }`.

On any error return `{ error: 'could not update', '_id': _id }`.

On success update and return `{ result: 'successfully updated', '_id': _id }`. Be sure to update the date in the `updated_on` field beyond the keys passed in the request body.

### DELETE

Respond to a DELETE request to `/api/issues/{projectname}` with an object describing whether or not an issue was deleted.

Without `_id` return `{ error: 'missing _id' }`.

On any error return `{ error: 'could not delete', '_id': _id }`.

On success delete and return `{ result: 'successfully deleted', '_id': _id }`.

## Tests

Create all of the functional tests in `tests/2_functional-tests.js`

- create an issue with every field: POST request to `/api/issues/{project}`

- create an issue with only required fields: POST request to `/api/issues/{project}`

- create an issue with missing required fields: POST request to `/api/issues/{project}`

- view issues on a project: GET request to `/api/issues/{project}`

- view issues on a project with one filter: GET request to `/api/issues/{project}`

- view issues on a project with multiple filters: GET request to `/api/issues/{project}`

- update one field on an issue: PUT request to `/api/issues/{project}`

- update multiple fields on an issue: PUT request to `/api/issues/{project}`

- update an issue with missing `_id`: PUT request to `/api/issues/{project}`

- update an issue with no fields to update: PUT request to `/api/issues/{project}`

- update an issue with an invalid `_id`: PUT request to `/api/issues/{project}`

- delete an issue: DELETE request to `/api/issues/{project}`

- delete an issue with an invalid `_id`: DELETE request to `/api/issues/{project}`

- delete an issue with missing `_id`: DELETE request to `/api/issues/{project}`

## Notes

### chai-http

For the functional tests the `chai-http` library performs requests with a series of promises. For some requests it is necessary to nest multiple calls, for instance to first create an item to then update and test.

```js
chai
  .request(server)
  .post("/api/issues/apitest")
  .send(issue)
  .end(() => {
    chai.request(server).put("/api/issues/apitest").send(/**/);
  });
```

What matters is that the test includes the `done` callback at the end of the testing process.

```js
.end(() => {
    // assertions
    done()
});
```

### Projects

To focus on the quality assurance portion of the curriculum the script works with an array of issues for a specific project.

```js
const projects = [
  {
    name: "apitest",
    issues: [
      // {}, {}, ...
    ],
  },
];
```

Ultimately you'd have a way to interact with a database, but most importantly you'd be able to create new projects.

When testing the project in the freeCodeCamp curriculum the tests actually rely on a new project being created. Consider the `req.params.project` received with POST requests.

```js
/*
fcc-project
fcc-project
fcc-project
get_issues_test_323535
get_issues_test_323570
fcc-project
fcc-project
*/
```

It would be possible to handle the name `fcc-project` with an additional object, but the `get_issues_test_*` labels are created with a date object. To work around this update the POST request to check if a project exist, and if not add a corresponding object in the `projects` array.

```js
if (!project) {
  project = {
    name: req.params.project,
    issues: [],
  };

  projects.push(project);
}
```

### Order

The tests set up in the curriculum expect a specific order in terms of error messages. For instance and with the PUT request the expectation is that the response considers a missing ID, then missing fields, then an invalid ID.

```js
return res.json({ error: "missing _id" });

return res.json({ error: "no update field(s) sent", _id });

return res.json({ error: "could not update", _id });
```
