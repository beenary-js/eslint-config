module.exports = {
  extends: ["plugin:jest/recommended"],
  plugins: ["jest"],
  env: {
    "jest/globals": true,
  },
  rules: {
    "jest/no-disabled-tests": "error",
    "jest/no-focused-tests": "error",
    "jest/no-commented-out-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    "jest/expect-expect": [
      "error",
      {
        assertFunctionNames: ["expect"],
      },
    ],
    "jest/no-done-callback": "error",
  },
}
