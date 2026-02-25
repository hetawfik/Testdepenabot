export = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:chai-friendly/recommended",
        "plugin:prettier/recommended",
        "prettier"
    ],
    "overrides": [{
        files: ["test/**/*.ts", "./**/mocks.*.ts"],
        rules: {
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/explicit-function-return-type": "off"
        }
    },
    {
        files: ["gulpfile.js", "webpack.*.js"],
        rules: {
            "@typescript-eslint/no-var-requires": "off",
        }
    },
    {
        files: ["src/**/*.vue"],
        parser: "vue-eslint-parser",
        parserOptions: {
            sourceType: "module",
            project: "./tsconfig.json",
            extraFileExtensions: [".vue"],
            parser: "@typescript-eslint/parser",
        },
        extends: [
            "eslint:recommended",
            "plugin:@typescript-eslint/eslint-recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:vue/vue3-recommended",
        ],
        rules: {
            "prettier/prettier": ["warn", {
                printWidth: 100,
                quoteProps: "consistent",
                arrowParens: "always",
                endOfLine: "auto",
                trailingComma: "none"
            }], 
            // the following rules cause conflicts or redundancies with prettier.
            "vue/max-attributes-per-line": "off",
            "vue/html-indent": "off",
            "vue/html-quotes": "off",
            "vue/multiline-html-element-content-newline": "off",
            "vue/mustache-interpolation-spacing": "off",
            "vue/singleline-html-element-content-newline": "off",
            "vue/html-closing-bracket-newline": "off",
            "vue/html-closing-bracket-spacing": "off",
            "vue/valid-v-bind":"off",
            "vue/no-trailing-spaces": "off",
            "vue/no-multi-spaces": "off",
            "no-debugger": "warn",
            "no-console": "warn",
            "chai-friendly/no-unused-expressions": "off",
            "@typescript-eslint/member-delimiter-style": "off",
            "@typescript-eslint/type-annotation-spacing": "off",
            "@typescript-eslint/ban-types": "off",
            "vue/html-self-closing": ["error", {
                "html": {
                    "void": "always",
                }
            }],
            "vue/v-on-event-hyphenation": "off",
            "no-use-before-define": "off",
        }

    }
    ],
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
        extraFileExtensions: [".vue"],
    },
    rules: {
        "prettier/prettier": ["warn", {
            printWidth: 180,
            quoteProps: "consistent",
            arrowParens: "always",
            endOfLine: "auto",
            trailingComma: "none"
        }],
        "@typescript-eslint/naming-convention": [
            "warn",
            {
              selector: "class",
              format: ["PascalCase"]
            }
        ],
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                accessibility: "explicit"
            }
        ],
        "@typescript-eslint/no-use-before-define": [
            "error",
            {
                functions: false,
                classes: false,
                variables: true
            }
        ],
        //  conflict/redundant with by prettier
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/member-delimiter-style": 'off',
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/type-annotation-spacing": "off",
        "arrow-parens": ["off"],
        "brace-style": "off",
        "camelcase": "off",
        "comma-dangle": "off",
        "eol-last": "off",
        "indent": "off",
        "max-len": "off",
        "no-multiple-empty-lines": "off",
        "no-trailing-spaces": "off",
        "object-property-newline": "off",
        "quotes": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/ban-types": "off",
        "class-methods-use-this": "error",
        "curly": "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eqeqeq": ["error", "always"],
        "guard-for-in": "error",
        "id-blacklist": "error",
        "id-match": "error",
        "max-classes-per-file": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-console": "warn",
        "no-div-regex": "error",
        "no-debugger": "warn",
        "no-else-return": "error",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-implicit-coercion": "error",
        "no-implied-eval": "error",
        "no-multi-str": "error",
        "no-new-wrappers": "error",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-underscore-dangle": "error",
        "no-use-before-define": "off",
        "no-useless-concat": "error",
        "no-var": "error",
        "no-whitespace-before-property": "error",
        "radix": "error",
        "require-await": "error",
        "spaced-comment": "error",
        "wrap-iife": "error",
        "yoda": "error"
    },
    plugins: ["@typescript-eslint", "prettier"],
}
