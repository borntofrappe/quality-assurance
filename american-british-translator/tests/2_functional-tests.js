const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  suite("Test POST requests", () => {
    const translator = new Translator();

    test("Translation with text and locale fields: POST request `to /api/translate`", function (done) {
      const text =
        "Loudhailer is sure a funny word in British English. Unfortunately it's lost in translation. Like pritt-stick and ice lolly. Look them up, I promise you won't regret it. By the way, and at this very moment, the clock tells me it's 20.18. At least in the UK.";
      const locale = "british-to-american";

      const translation = translator.translate(text, locale);

      chai
        .request(server)
        .post("/api/translate")
        .send({
          text,
          locale,
        })
        .end((_, res) => {
          assert.deepEqual(
            res.body,
            {
              text,
              translation,
            },
            "response should include text translation"
          );

          done();
        });
    });

    test("Translation with text and invalid locale field: POST request `to /api/translate`", function (done) {
      const text =
        "Loudhailer is sure a funny word in British English. Unfortunately it's lost in translation. Like pritt-stick and ice lolly. Look them up, I promise you won't regret it. By the way, and at this very moment, the clock tells me it's 20.18. At least in the UK.";
      const locale = "british-to-canadian";

      chai
        .request(server)
        .post("/api/translate")
        .send({
          text,
          locale,
        })
        .end((_, res) => {
          assert.deepEqual(
            res.body,
            { error: "Invalid value for locale field" },
            'response should include { error: "Invalid value for locale field" }'
          );

          done();
        });
    });

    test("Translation with missing text field: POST request `to /api/translate`", function (done) {
      const text =
        "Loudhailer is sure a funny word in British English. Unfortunately it's lost in translation. Like pritt-stick and ice lolly. Look them up, I promise you won't regret it. By the way, and at this very moment, the clock tells me it's 20.18. At least in the UK.";

      chai
        .request(server)
        .post("/api/translate")
        .send({
          text,
        })
        .end((_, res) => {
          assert.deepEqual(
            res.body,
            { error: "Required field(s) missing" },
            'response should include { error: "Required field(s) missing" }'
          );

          done();
        });
    });

    test("Translation with missing locale field: POST request `to /api/translate`", function (done) {
      const locale = "british-tp-american";

      chai
        .request(server)
        .post("/api/translate")
        .send({
          locale,
        })
        .end((_, res) => {
          assert.deepEqual(
            res.body,
            { error: "Required field(s) missing" },
            'response should include { error: "Required field(s) missing" }'
          );

          done();
        });
    });

    test("Translation with empty text: POST request `to /api/translate`", function (done) {
      const text = "";
      const locale = "british-tp-american";

      chai
        .request(server)
        .post("/api/translate")
        .send({
          text,
          locale,
        })
        .end((_, res) => {
          assert.deepEqual(
            res.body,
            { error: "No text to translate" },
            'response should include { error: "No text to translate" }'
          );

          done();
        });
    });

    test("Translation with text that needs no translation: POST request `to /api/translate`", function (done) {
      const text =
        "Loudhailer is sure a funny word in British English. Unfortunately it's lost in translation. Like pritt-stick and ice lolly. Look them up, I promise you won't regret it. By the way, and at this very moment, the clock tells me it's 20.18. At least in the UK.";
      const locale = "american-to-british";

      chai
        .request(server)
        .post("/api/translate")
        .send({
          text,
          locale,
        })
        .end((_, res) => {
          assert.deepEqual(
            res.body,
            {
              text,
              translation: "Everything looks good to me!",
            },
            'response should include text and "Everything looks good to me!" for the translation'
          );

          done();
        });
    });
  });
});
