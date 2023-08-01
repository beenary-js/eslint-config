module.exports = {
  extends: ["airbnb-typescript/base"],
  rules: {
    "no-unused-vars": "off",
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
