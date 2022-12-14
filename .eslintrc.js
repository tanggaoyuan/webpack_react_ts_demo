module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    semi: 2,
    'no-alert': 0,
    'no-bitwise': 0,
    'no-const-assign': 2,
    '@typescript-eslint/no-var-requires': 0,
    quotes: ['error', 'single'],
    eqeqeq: ['error', 'allow-null'],
    'no-catch-shadow': 2,
    'no-constant-condition': 2,
    'no-dupe-keys': 2,
    indent: ['error', 2],
    'getter-return': 2,
    'no-duplicate-case': 2,
    'block-scoped-var': 2,
    curly: 2,
    'no-else-return': 2,
    'no-eval': 2,
    'no-extra-bind': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-multi-spaces': 2,
    'no-return-await': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-return': 2,
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': 2,
    'brace-style': 'error',
    'key-spacing': 2,
    'no-multiple-empty-lines': 2,
    'spaced-comment': 2,
    'space-infix-ops': 2,
    'arrow-spacing': 2,
    'generator-star-spacing': 2,
    'no-confusing-arrow': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-var': 2,
    'switch-colon-spacing': 2,
    'object-curly-spacing': [0, 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 0,
  },
};
