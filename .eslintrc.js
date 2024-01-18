module.exports = {
  "extends": [
    "next/core-web-vitals",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended"
  ],
  "rules": {
    "semi": ["warn", "always"],
    "quotes": ["warn", "double"],
    "react/jsx-curly-brace-presence": ["warn", { props: "never", children: "never" }]
  }
};
