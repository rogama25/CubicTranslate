module.exports = {
  "extends": "next/core-web-vitals",
  "rules": {
    "semi": ["warn", "always"],
    "quotes": ["warn", "double"],
    "react/jsx-curly-brace-presence": ["warn", { props: "never", children: "never" }]
  }
};
