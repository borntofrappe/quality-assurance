"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const { text, locale } = req.body;

    if (text === undefined || locale === undefined) {
      return res.json({ error: "Required field(s) missing" });
    }

    if (text.trim() === "") {
      return res.json({ error: "No text to translate" });
    }

    if (!translator.dictionary[locale]) {
      return res.json({ error: "Invalid value for locale field" });
    }

    const translation = translator.translate(text, locale, true);

    if (text === translation) {
      return res.json({
        text,
        translation: "Everything looks good to me!",
      });
    }

    res.json({
      text,
      translation,
    });
  });
};
