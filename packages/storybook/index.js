module.exports = {
  extends: ["plugin:storybook/recommended"],
  rules: {
    "import/no-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "react/function-component-definition": "off",
  },
}
