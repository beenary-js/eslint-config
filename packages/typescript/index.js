module.exports = {
  extends: ["airbnb-typescript"],
  rules: {
    "no-unused-vars": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"],
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/lines-between-class-members": [
      "warn",
      {
        "exceptAfterSingleLine": true
      }
    ]
  },
}
