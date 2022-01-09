const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  constructor() {
    this.dictionary = {
      "american-to-british": {
        keywords: Object.entries({
          ...americanOnly,
          ...americanToBritishSpelling,
        }).sort((a, b) => b[0].length - a[0].length),
        timeSeparators: [":", "."],
        titles: Object.entries(americanToBritishTitles).sort(
          (a, b) => b[0].length - a[0].length
        ),
      },
      "british-to-american": {
        keywords: Object.entries({
          ...britishOnly,
          ...Object.fromEntries(
            Object.entries(americanToBritishSpelling).map(
              ([american, british]) => [british, american]
            )
          ),
        }).sort((a, b) => b[0].length - a[0].length),
        timeSeparators: [".", ":"],
        titles: Object.entries(americanToBritishTitles)
          .map(([american, british]) => [british, american])
          .sort((a, b) => b[0].length - a[0].length),
      },
    };
  }

  translate(text, locale) {
    const dictionary = this.dictionary[locale];

    const [t1, t2] = dictionary.timeSeparators;

    let translation = text;

    dictionary.keywords.forEach(([e1, e2]) => {
      const uniqueMatches = new Set(
        translation.match(new RegExp(`\\b${e1}\\b`, "ig")) || []
      );
      uniqueMatches.forEach((uniqueMatch) => {
        const charCode = uniqueMatch.charCodeAt();
        const uniqueTranslation =
          charCode >= 65 && charCode <= 90
            ? `${e2[0].toUpperCase()}${e2.slice(1)}`
            : e2;
        translation = translation.replace(
          new RegExp(`\\b${uniqueMatch}\\b`, "g"),
          `<span class="highlight">${uniqueTranslation}</span>`
        );
      });
    });

    dictionary.titles.forEach(([t1, t2]) => {
      const uniqueMatches = new Set(
        translation.match(new RegExp(`\\b${t1} `, "ig")) || []
      );
      uniqueMatches.forEach((uniqueMatch) => {
        const charCode = uniqueMatch.charCodeAt();
        const uniqueTranslation =
          charCode >= 65 && charCode <= 90
            ? `${t2[0].toUpperCase()}${t2.slice(1)} `
            : `${t2} `;
        translation = translation.replace(
          new RegExp(`\\b${uniqueMatch}`, "g"),
          `<span class="highlight">${uniqueTranslation.slice(0, -1)}</span> `
        );
      });
    });

    translation = translation.replace(
      new RegExp(`\\b(\\d{1,2})\\${t1}(\\d{1,2})\\b`, "g"),
      `<span class="highlight">$1${t2}$2</span>`
    );

    return translation;
  }
}

module.exports = Translator;
