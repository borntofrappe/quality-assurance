/*
 *
 *
 *       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]-----
 *
 */

const chaiHttp = require("chai-http");
const chai = require("chai");
const assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {
  /*
   * ----[EXAMPLE TEST]----
   * Each test should completely test the response of the API end-point including response status code!
   */
  test("#example Test GET /api/books", function (done) {
    chai
      .request(server)
      .get("/api/books")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.isArray(res.body, "response should be an array");
        assert.property(
          res.body[0],
          "commentcount",
          "Books in array should contain commentcount"
        );
        assert.property(
          res.body[0],
          "title",
          "Books in array should contain title"
        );
        assert.property(
          res.body[0],
          "_id",
          "Books in array should contain _id"
        );
        done();
      });
  });
  /*
   * ----[END of EXAMPLE TEST]----
   */

  suite("Routing tests", function () {
    suite(
      "POST /api/books with title => create book object/expect book object",
      function () {
        test("Test POST /api/books with title", function (done) {
          const title = "Around the World in 80 Days";

          chai
            .request(server)
            .post("/api/books")
            .send({
              title,
            })
            .end((_, res) => {
              console.log(res);
              assert.isObject(res.body);
              assert.hasAllKeys(res.body, ["title", "_id"]);
              assert.strictEqual(res.body.title, title);

              done();
            });
        });

        test("Test POST /api/books with no title given", function (done) {
          chai
            .request(server)
            .post("/api/books")
            .send({})
            .end((_, res) => {
              assert.strictEqual(res.text, "missing required field title");

              done();
            });
        });
      }
    );

    suite("GET /api/books => array of books", function () {
      test("Test GET /api/books", function (done) {
        chai
          .request(server)
          .get("/api/books")
          .end((_, res) => {
            assert.isArray(res.body);

            done();
          });
      });
    });

    suite("GET /api/books/[id] => book object with [id]", function () {
      test("Test GET /api/books/[id] with id not in db", function (done) {
        const id = Math.random().toString().slice(2);

        chai
          .request(server)
          .get(`/api/books/${id}`)
          .end((_, res) => {
            assert.strictEqual(res.text, "no book exists");

            done();
          });
      });

      test("Test GET /api/books/[id] with valid id in db", function (done) {
        const title = "Around the World in 80 Days";

        chai
          .request(server)
          .post("/api/books")
          .send({
            title,
          })
          .end((_, res) => {
            const { _id } = res.body;

            chai
              .request(server)
              .get(`/api/books/${_id}`)
              .end((_, res) => {
                assert.isObject(res.body);
                assert.hasAllKeys(res.body, ["title", "_id", "comments"]);
                assert.strictEqual(res.body.title, title);
                assert.strictEqual(res.body._id, _id);
                assert.isArray(res.body.comments);
                assert.strictEqual(res.body.comments.length, 0);

                done();
              });
          });
      });
    });

    suite(
      "POST /api/books/[id] => add comment/expect book object with id",
      function () {
        test("Test POST /api/books/[id] with comment", function (done) {
          const title = "Around the World in 80 Days";
          const comment = "An enticing story.";

          chai
            .request(server)
            .post("/api/books")
            .send({
              title,
            })
            .end((_, res) => {
              const { _id } = res.body;

              chai
                .request(server)
                .post(`/api/books/${_id}`)
                .send({
                  comment,
                })
                .end((_, res) => {
                  assert.isObject(res.body);
                  assert.hasAllKeys(res.body, ["title", "_id", "comments"]);
                  assert.strictEqual(res.body.title, title);
                  assert.strictEqual(res.body._id, _id);
                  assert.isArray(res.body.comments);
                  assert.isAbove(res.body.comments.length, 0);

                  done();
                });
            });
        });

        test("Test POST /api/books/[id] without comment field", function (done) {
          const title = "Around the World in 80 Days";

          chai
            .request(server)
            .post("/api/books")
            .send({
              title,
            })
            .end((_, res) => {
              const { _id } = res.body;

              chai
                .request(server)
                .post(`/api/books/${_id}`)
                .send({})
                .end((_, res) => {
                  assert.strictEqual(
                    res.text,
                    "missing required field comment"
                  );

                  done();
                });
            });
        });

        test("Test POST /api/books/[id] with comment, id not in db", function (done) {
          const id = Math.random().toString().slice(2);
          const comment = "An enticing story.";
          chai
            .request(server)
            .post(`/api/books/${id}`)
            .send({
              comment,
            })
            .end((_, res) => {
              assert.strictEqual(res.text, "no book exists");

              done();
            });
        });
      }
    );

    suite("DELETE /api/books/[id] => delete book object id", function () {
      test("Test DELETE /api/books/[id] with valid id in db", function (done) {
        const title = "Around the World in 80 Days";

        chai
          .request(server)
          .post("/api/books")
          .send({
            title,
          })
          .end((_, res) => {
            const { _id } = res.body;

            chai
              .request(server)
              .delete(`/api/books/${_id}`)
              .end((_, res) => {
                assert.strictEqual(res.text, "delete successful");

                chai
                  .request(server)
                  .get(`/api/books/${_id}`)
                  .end((_, res) => {
                    assert.strictEqual(res.text, "no book exists");

                    done();
                  });
              });
          });
      });

      test("Test DELETE /api/books/[id] with  id not in db", function (done) {
        const id = Math.random().toString().slice(2);
        chai
          .request(server)
          .delete(`/api/books/${id}`)
          .end((_, res) => {
            assert.strictEqual(res.text, "no book exists");

            done();
          });
      });
    });
  });
});
