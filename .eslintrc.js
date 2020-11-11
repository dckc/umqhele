/* global module */
module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    "plugin:vue/vue3-recommended",
    "prettier/vue",
    "prettier",],
  env: {
    es6: true, // supports new ES6 globals (e.g., new types such as Set)
  },
  globals: {
    harden: 'readonly',
  },
  rules: {
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'arrow-parens': 'off',
    strict: 'off',
    'prefer-destructuring': 'off',
    'no-else-return': 'off',
    'no-console': 'off',
    'no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    }],
    'no-return-assign': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': ['off', 'ForOfStatement'],
    'no-unused-expressions': 'off',
    'no-loop-func': 'off',
    'no-inner-declarations': 'off',
    'import/prefer-default-export': 'off',
  },
};