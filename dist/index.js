module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: 'detect',
    },
    'import/ignore': ['node_modules'],
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  overrides: [{ extends: 'plugin:jest/all', files: ['src'] }],
  plugins: ['@typescript-eslint', 'jest', 'unused-imports', 'import', 'react-hooks'],
  root: true,
  ignorePatterns: ['*.js', 'node_modules', '**/schemas.tsx', '**/translationKeys.ts'],
  rules: {
    'import/order': ['error', { groups: ['builtin', 'external', 'parent', 'sibling', 'index'] }],
    'no-console': 'warn',
    'import/no-unresolved': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: ['objectLiteralProperty', 'typeProperty'],
        format: ['camelCase'],
      },
      {
        selector: ['enum', 'enumMember', 'class', 'interface', 'typeAlias'],
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    'react/display-name': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'max-lines': ['error', 500],
    'no-nested-ternary': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    'import/newline-after-import': 'error',
    'no-unneeded-ternary': ['error'],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-lonely-if': ['error'],
    'max-params': ['error', 3],
    'array-callback-return': 'error',
    'no-param-reassign': 'error',
    'prefer-destructuring': ['error'],
    'object-shorthand': 'error',
    'dot-notation': 'error',
    'multiline-comment-style': ['error', 'starred-block'],
    'prefer-template': 'error',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'default-case-last': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'unused-imports/no-unused-vars-ts': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
