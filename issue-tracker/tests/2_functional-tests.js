const chaiHttp = require("chai-http");
const chai = require("chai");
const assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {
  test("Create an issue with every field: POST request to `/api/issues/{project}`", function (done) {
    /* test:
      - that the object has all the prescribed keys
      - that the object includes the key-value pairs of the issue sent in the request plus the 'open' default value
      - that the date is approximately similar to the instance created before sending the request
    */
    const issue = {
      issue_title: "POST/1",
      issue_text:
        "Create an issue with every field: POST request to `/api/issues/{project}`",
      created_by: "replit",

      assigned_to: "replit",
      status_text: "QA",
    };

    const date = new Date();

    chai
      .request(server)
      .post("/api/issues/apitest")
      .send(issue)
      .end(function (err, res) {
        assert.hasAllKeys(res.body, [
          "assigned_to",
          "status_text",
          "open",
          "_id",
          "issue_title",
          "issue_text",
          "created_by",
          "created_on",
          "updated_on",
        ]);

        assert.include(res.body, {
          ...issue,
          open: true,
        });

        // assert.isTrue(res.body.open);

        assert.approximately(
          date.getTime(),
          new Date(res.body.created_on).getTime(),
          500
        );
        assert.approximately(
          date.getTime(),
          new Date(res.body.updated_on).getTime(),
          500
        );
        done();
      });
  });

  test("Create an issue with only required fields: POST request to `/api/issues/{project}`", function (done) {
    /* test:
      - that the object has all the prescribed keys
      - that the object includes the key-value pairs of the issue sent in the request plus the optional and the 'open' default value
      - that the date is approximately similar to the instance created before sending the request
    */
    const issue = {
      issue_title: "POST/2",
      issue_text:
        "Create an issue with only required fields: POST request to `/api/issues/{project}`",
      created_by: "replit",
    };

    const date = new Date();

    chai
      .request(server)
      .post("/api/issues/apitest")
      .send(issue)
      .end(function (err, res) {
        assert.equal(res.status, 200);

        assert.hasAllKeys(res.body, [
          "assigned_to",
          "status_text",
          "open",
          "_id",
          "issue_title",
          "issue_text",
          "created_by",
          "created_on",
          "updated_on",
        ]);

        assert.include(res.body, {
          ...issue,
          assigned_to: "",
          status_text: "",
          open: true,
        });

        // assert.strictEqual(res.body.assigned_to, "");
        // assert.strictEqual(res.body.status_text, "");
        // assert.isTrue(res.body.open);

        assert.approximately(
          date.getTime(),
          new Date(res.body.created_on).getTime(),
          500
        );
        assert.approximately(
          date.getTime(),
          new Date(res.body.updated_on).getTime(),
          500
        );
        done();
      });
  });

  test("Create an issue with missing required fields: POST request to `/api/issues/{project}` ", function (done) {
    /* test:
      - that the object highlights the prescribed error message
    */
    const issue = {
      issue_title: "POST/3",
    };

    // test the object higlighting the missing field(s)
    chai
      .request(server)
      .post("/api/issues/apitest")
      .send(issue)
      .end(function (err, res) {
        assert.equal(res.status, 200);

        assert.deepEqual(res.body, { error: "required field(s) missing" });
        done();
      });
  });

  test("View issues on a project: GET request to `/api/issues/{project}`", function (done) {
    /* first create an issue with a POST request
    only afterwards test:
      - that the request returns an array
      - that the array includes the issue sent with the POST request specifically
    */
    const issue = {
      issue_title: "GET/1",
      issue_text:
        "View issues on a project: GET request to `/api/issues/{project}`",
      created_by: "replit",
    };

    chai
      .request(server)
      .post("/api/issues/apitest")
      .send(issue)
      .end(function (err, res) {
        chai
          .request(server)
          .get("/api/issues/apitest")
          .end(function (err, res) {
            assert.equal(res.status, 200);

            assert.isArray(res.body);

            const existingIssue = res.body.find(
              (d) =>
                d.issue_title === issue.issue_title &&
                d.issue_text === issue.issue_text &&
                d.created_by === issue.created_by
            );

            assert.isDefined(existingIssue);

            done();
          });
      });
  });

  test("View issues on a project with one filter: GET request to `/api/issues/{project}`", function (done) {
    /* first create an issue with a POST request
    only afterwards test:
      - that the request returns an array
      - that the array includes only issues matching the filter condition
    */
    const issue = {
      issue_title: "GET/2",
      issue_text:
        "View issues on a project with one filter: GET request to `/api/issues/{project}`",
      created_by: "replit",
    };

    chai
      .request(server)
      .post("/api/issues/apitest")
      .send(issue)
      .end(function (err, res) {
        chai
          .request(server)
          .get(`/api/issues/apitest?created_by=${issue.created_by}`)
          .end(function (err, res) {
            assert.equal(res.status, 200);

            assert.isArray(res.body);

            assert.isTrue(
              res.body.every((d) => d.created_by === issue.created_by)
            );

            done();
          });
      });
  });

  test("View issues on a project with multiple filters: GET request to `/api/issues/{project}`", function (done) {
    /* first create an issue with a POST request
    only afterwards test:
      - that the request returns an array
      - that the array includes only issues matching the filter conditions
    */
    const issue = {
      issue_title: "GET/3",
      issue_text:
        "View issues on a project with multiple filters: GET request to `/api/issues/{project}`",
      created_by: "replit",
    };

    chai
      .request(server)
      .post("/api/issues/apitest")
      .send(issue)
      .end(function (err, res) {
        chai
          .request(server)
          .get(
            `/api/issues/apitest?issue_title=${issue.issue_title}&created_by=${issue.created_by}`
          )
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.isArray(res.body);

            assert.isTrue(
              res.body.every(
                (d) =>
                  d.issue_title === issue.issue_title &&
                  d.created_by === issue.created_by
              )
            );

            done();
          });
      });
  });

  test("Update one field on an issue: PUT request to `/api/issues/{project}`", function (done) {
    /* first create an issue with a POST request
    second retrieve the issue and test:
      - the issue exists
    third update the issue by _id and test:
      - the response returns an object with the prescribed success message
    finally retrieve the issues and test:
      - the array includes the issue with the _id
      - the issue is updated in the prescribed field
    */
    const issue = {
      issue_title: "PUT/1",
      issue_text:
        "Update one field on an issue: PUT request to `/api/issues/{project}`",
      created_by: "replit",
    };

    chai
      .request(server)
      .post("/api/issues/apitest")
      .send(issue)
      .end(function (err, res) {
        chai
          .request(server)
          .get("/api/issues/apitest")
          .end(function (err, res) {
            const existingIssue = res.body.find(
              (d) =>
                d.issue_title === issue.issue_title &&
                d.issue_text === issue.issue_text &&
                d.created_by === issue.created_by
            );

            assert.isDefined(existingIssue);

            const { _id } = existingIssue;

            chai
              .request(server)
              .put("/api/issues/apitest")
              .send({
                _id,
                open: true,
              })
              .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, {
                  result: "successfully updated",
                  _id,
                });

                chai
                  .request(server)
                  .get(`/api/issues/apitest?_id=${_id}`)
                  .end(function (err, res) {
                    const updatedIssue = res.body[0];
                    assert.isDefined(updatedIssue);
                    assert.strictEqual(updatedIssue._id, _id);
                    assert.isFalse(updatedIssue.open);

                    done();
                  });
              });
          });
      });
  });

  test("Update multiple fields on an issue: PUT request to `/api/issues/{project}`", function (done) {
    /* first create an issue with a POST request
    second retrieve the issue and test:
      - the issue exists
    third update the issue by _id and test:
      - the response returns an object with the prescribed success message
    finally retrieve the issues and test:
      - the array includes the issue with the _id
      - the issue is updated in the prescribed fields
    */
    const issue = {
      issue_title: "PUT/2",
      issue_text:
        "Update multiple fields on an issue: PUT request to `/api/issues/{project}`",
      created_by: "replit",
    };

    chai
      .request(server)
      .post("/api/issues/apitest")
      .send(issue)
      .end(function (err, res) {
        chai
          .request(server)
          .get("/api/issues/apitest")
          .end(function (err, res) {
            const existingIssue = res.body.find(
              (d) =>
                d.issue_title === issue.issue_title &&
                d.issue_text === issue.issue_text &&
                d.created_by === issue.created_by
            );

            assert.isDefined(existingIssue);

            const { _id } = existingIssue;

            chai
              .request(server)
              .put("/api/issues/apitest")
              .send({
                _id,
                open: true,
                assigned_to: "replit",
              })
              .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, {
                  result: "successfully updated",
                  _id,
                });

                chai
                  .request(server)
                  .get(`/api/issues/apitest?_id=${_id}`)
                  .end(function (err, res) {
                    const updatedIssue = res.body[0];
                    assert.isDefined(updatedIssue);
                    assert.strictEqual(updatedIssue._id, _id);
                    assert.isFalse(updatedIssue.open);
                    assert.strictEqual(updatedIssue.assigned_to, "replit");

                    done();
                  });
              });
          });
      });
  });

  test("Update an issue with missing `_id`: PUT request to `/api/issues/{project}`", function (done) {
    /* test:
      - that the object highlights the prescribed error message
    */
    chai
      .request(server)
      .put("/api/issues/apitest")
      .send({})
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: "missing _id" });

        done();
      });
  });

  test("Update an issue with no fields to update: PUT request to `/api/issues/{project}`", function (done) {
    /* first create an issue with a POST request
    second retrieve the issue
    third update the issue by _id without fields
    only afterwards test:
      - that the object highlights the prescribed error message
    */

    const issue = {
      issue_title: "PUT/3",
      issue_text:
        "Update an issue with no fields to update: PUT request to `/api/issues/{project}`",
      created_by: "replit",
    };

    chai
      .request(server)
      .post("/api/issues/apitest")
      .send(issue)
      .end(function (err, res) {
        chai
          .request(server)
          .get("/api/issues/apitest")
          .end(function (err, res) {
            const existingIssue = res.body.find(
              (d) =>
                d.issue_title === issue.issue_title &&
                d.issue_text === issue.issue_text &&
                d.created_by === issue.created_by
            );

            const { _id } = existingIssue;

            chai
              .request(server)
              .put("/api/issues/apitest")
              .send({
                _id,
              })
              .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.deepEqual(res.body, {
                  error: "no update field(s) sent",
                  _id,
                });

                done();
              });
          });
      });
  });

  test("Update an issue with an invalid `_id`: PUT request to `/api/issues/{project}`", function (done) {
    /* first update an issue with a random identifier
    only afterwards test:
      - that the object highlights the prescribed error message
    */
    const _id = Math.random().toString().slice(2);

    chai
      .request(server)
      .put("/api/issues/apitest")
      .send({
        _id,
        issue_title: "PUT/4",
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: "could not update", _id });

        done();
      });
  });

  test("Delete an issue: DELETE request to `/api/issues/{project}`", function (done) {
    /* first create an issue with a POST request
    second retrieve the issue and test:
      - the issue exists
    third delete the issue by _id and test:
      - the response returns an object with the prescribed success message
    finally retrieve the issues and test:
      - the array no longer includes the issue with the _id
    */
    const issue = {
      issue_title: "DELETE/1",
      issue_text: "Delete an issue: DELETE request to `/api/issues/{project}`",
      created_by: "replit",
    };

    chai
      .request(server)
      .post("/api/issues/apitest")
      .send(issue)
      .end(function (err, res) {
        chai
          .request(server)
          .get("/api/issues/apitest")
          .end(function (err, res) {
            const existingIssue = res.body.find(
              (d) =>
                d.issue_title === issue.issue_title &&
                d.issue_text === issue.issue_text &&
                d.created_by === issue.created_by
            );

            assert.isDefined(existingIssue);

            const { _id } = existingIssue;

            chai
              .request(server)
              .delete("/api/issues/apitest")
              .send({
                _id,
              })
              .end(function (err, res) {
                chai
                  .request(server)
                  .get("/api/issues/apitest")
                  .end(function (err, res) {
                    const missingIssue = res.body.find(
                      (d) =>
                        d.issue_title === issue.issue_title &&
                        d.issue_text === issue.issue_text &&
                        d.created_by === issue.created_by
                    );

                    assert.isUndefined(missingIssue);

                    done();
                  });
              });
          });
      });
  });

  test("Delete an issue with an invalid `_id`: DELETE request to `/api/issues/{project}`", function (done) {
    /* first delete an issue with a random identifier
    only afterwards test:
      - that the object highlights the prescribed error message
    */
    const _id = Math.random().toString().slice(2);

    chai
      .request(server)
      .delete("/api/issues/apitest")
      .send({
        _id,
      })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: "could not delete", _id });

        done();
      });
  });

  test("Delete an issue with missing `_id`: DELETE request to `/api/issues/{project}`", function (done) {
    /* test:
      - that the object highlights the prescribed error message
    */
    chai
      .request(server)
      .delete("/api/issues/apitest")
      .send({})
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.deepEqual(res.body, { error: "missing _id" });

        done();
      });
  });
});
