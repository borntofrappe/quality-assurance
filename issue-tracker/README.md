# Issue Tracker

Create an application similar [to the example Issue Tracker](https://issue-tracker.freecodecamp.rocks/).

## Links

- [Assignment](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/issue-tracker)

- [Solution](https://replit.com/@borntofrappe/boilerplate-project-issuetracker)

## Notes

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

Ultimately you'd have a way to interact with a database, but most importantly you'd be able to create new projects. The assignment does not consider any interaction beyond those listed below.

### API

Complete the necessary routes in `/routes/api.js`

#### GET

Respond to a GET request to `/api/issues/{projectname}` with array of issues. Filter the issues according to query parameters, covering all of the possible fields.

#### POST

Respond to a POST request to `/api/issues/{projectname}` with an object describing the issue. Include the issue in the project's issues.

The issue is created with required, optional, and default fields:

- required: `issue_title`, `issue_text`, `created_by`. If one is missing return an error message: `{ error: 'required field(s) missing' }`

- optional: `assigned_to`, `status_text`. Initialize with an empty string if the value is not received

- default: `created_on` and `updated_on`, both using the current date, and `open`, true, `_id`, identifying the issue

#### PUT

Respond to a PUT request to `/api/issues/{projectname}` with an object describing whether or not the update was successful.

If the request does not include the `_id` return `{ error: 'missing _id' }`

If the request does not include update fields return `{ error: 'no update field(s) sent', '_id': _id }`

On any error return `{ error: 'could not update', '_id': _id }`

On success update and return `{ result: 'successfully updated', '_id': _id }`

#### DELETE

Respond to a DELETE request to `/api/issues/{projectname}` with an object describing whether or not an issue was deleted.

Without `_id` return `{ error: 'missing _id' }`

On any error return `{ error: 'could not delete', '_id': _id }`

On success delete and return `{ result: 'successfully deleted', '_id': _id }`

### Tests

Create all of the functional tests in `tests/2_functional-tests.js`

- Create an issue with every field: POST request to `/api/issues/{project}`

- Create an issue with only required fields: POST request to `/api/issues/{project}`

- Create an issue with missing required fields: POST request to `/api/issues/{project}`

- View issues on a project: GET request to `/api/issues/{project}`

- View issues on a project with one filter: GET request to `/api/issues/{project}`

- View issues on a project with multiple filters: GET request to `/api/issues/{project}`

- Update one field on an issue: PUT request to `/api/issues/{project}`

- Update multiple fields on an issue: PUT request to `/api/issues/{project}`

- Update an issue with missing `_id`: PUT request to `/api/issues/{project}`

- Update an issue with no fields to update: PUT request to `/api/issues/{project}`

- Update an issue with an invalid `_id`: PUT request to `/api/issues/{project}`

- Delete an issue: DELETE request to `/api/issues/{project}`

- Delete an issue with an invalid `_id`: DELETE request to `/api/issues/{project}`

- Delete an issue with missing `_id`: DELETE request to `/api/issues/{project}`

### issues

- put request. The order of the assignment is that the request should handle missing input fields first, a bad id afterwards

- get. The testing suite creates a new project with a post request, so to test update operations. update post to create a new project with req.params.project

```bash
fcc-project
fcc-project
fcc-project
get_issues_test_323535
get_issues_test_323570
fcc-project
fcc-project
requested
```

- update field with successful put request `updated_on`
