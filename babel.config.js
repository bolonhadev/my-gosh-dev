const { env: { APP_LANG } } = process;

module.exports = {
  "presets": [
    [
      "babel-preset-gatsby",
    ],
  ],
  "plugins": [
    [
      "babel-plugin-ttag",
      {
        "resolve": {
          "translations": APP_LANG === "en" ?  "./i18n/en.po" : "./i18n/pt.po",
        },
      },
    ],
  ],
}
