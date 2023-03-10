module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
	"jest": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
	"airbnb",
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
	'prettier'
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
	"project": "tsconfig.json",
	"sourceType": "module",
	"tsconfigRootDir": __dirname,
    },
    "plugins": [
        "react",
	"react-hooks",
        "@typescript-eslint",
	"prettier"
    ],
    "rules": {
	"semi": [2, "always"],
	"no-underscore-dangle": 0,
	"react/jsx-no-bind": 0,
	"react/require-default-props": 1,
    }
}
