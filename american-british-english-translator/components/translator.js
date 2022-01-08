const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  getAmericanTerms(text) {
    const americanTerms = [];

    Object.entries({
      ...americanOnly,
      ...americanToBritishSpelling,
      ...americanToBritishTitles,
    }).forEach(([american, british]) => {
      if (new RegExp(`\\b${american}\\b`).test(text)) {
        americanTerms.push([american, british]);
      }
    });

    const times = text.match(/\d{1,2}:\d{1,2}/g) || [];
    times.forEach((time) => americanTerms.push([time, time.replace(":", ".")]));

    return americanTerms;
  }

  getBritishTerms(text) {
    const britishTerms = [];

    Object.entries({
      ...americanOnly,
      ...americanToBritishSpelling,
      ...americanToBritishTitles,
    }).forEach(([american, british]) => {
      if (new RegExp(`\\b${british}\\b`).test(text)) {
        britishTerms.push([british, american]);
      }
    });

    Object.entries({
      ...britishOnly,
    }).forEach(([british, american]) => {
      if (new RegExp(`\\b${british}\\b`).test(text)) {
        britishTerms.push([british, american]);
      }
    });

    const times = text.match(/\d{1,2}.\d{1,2}/g) || [];
    times.forEach((time) => britishTerms.push([time, time.replace(".", ":")]));

    return britishTerms;
  }

  translate(text, terms) {
    let translation;

    terms.forEach(([v1, v2]) => {
      translation = text.replace(
        new RegExp(`\\b${v1}\\b`, "g"),
        `<span class="highlight">${v2}</span>`
      );
    });

    return translation;
  }
}

module.exports = Translator;
