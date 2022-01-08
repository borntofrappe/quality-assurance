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

    const locales = ["american-to-british", "british-to-american"];
    if (!locales.includes(locale)) {
      return res.json({ error: "Invalid value for locale field" });
    }

    const terms =
      locale === "american-to-british"
        ? translator.getAmericanTerms(text)
        : translator.getBritishTerms(text);

    if (terms.length === 0) {
      return res.json({
        text,
        translation: "Everything looks good to me!",
      });
    }

    const translation = translator.translate(text, terms);

    res.json({
      text,
      translation,
    });
  });
};
