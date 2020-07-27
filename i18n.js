const NextI18 = require('next-i18next').default;

const NextI18Next = new NextI18({
  fallbackLng: 'cs',
  defaultNS: 'common',
  ns: ['common'],
  defaultLanguage: 'cs',
  otherLanguages: ['en'],
  browserLanguageDetection: false,
  serverLanguageDetection: false,
  localePath: './public/locales',
  saveMissing: false,
  nsSeparator: false,
  shallowRender: true,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ','
  }
  // ,debug: true
});
module.exports = NextI18Next;
