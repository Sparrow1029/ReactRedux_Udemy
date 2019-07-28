module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
      "react",
      "prettier"
    ],
    "rules": {
        "indent": [2, 2],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
