module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        "@vue/prettier",
        "./.eslintrc-auto-import.json",
    ],
    "overrides": [
    ],
    // "parser": "@typescript-eslint/parser",
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "vue/multi-word-component-names": "off",
        "prettier/prettier": [
            "error",
            {
                "singleQuote": false, // 使用单引号
                "semi": false, // 末尾添加分号
                "tabWidth": 2,
                "trailingComma": "none",
                "useTabs": false,
                "endOfLine": "auto",
            },
        ],
        "@typescript-eslint/no-non-null-assertion": "off",
    }
}
