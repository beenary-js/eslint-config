module.exports = {
  extends: ["plugin:jest/recommended", "plugin:testing-library/react"],
  plugins: ["jest", "testing-library"],
  env: {
    "jest/globals": true,
  },
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/function-component-definition": "off",
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
