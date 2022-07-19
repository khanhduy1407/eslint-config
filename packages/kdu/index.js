module.exports = {
  overrides: [
    {
      files: ['*.kdu'],
      parser: 'kdu-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  extends: [
    'plugin:kdu/kdu3-recommended',
    '@nkduy/eslint-config-ts',
  ],
  rules: {
    'kdu/max-attributes-per-line': 'off',
    'kdu/no-k-html': 'off',
    'kdu/require-prop-types': 'off',
    'kdu/require-default-prop': 'off',
    'kdu/multi-word-component-names': 'off',

    // reactivity transform
    'kdu/no-setup-props-destructure': 'off',

    'kdu/component-tags-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'kdu/block-tag-newline': ['error', {
      singleline: 'always',
      multiline: 'always',
    }],
    'kdu/component-name-in-template-casing': ['error', 'PascalCase'],
    'kdu/component-options-name-casing': ['error', 'PascalCase'],
    'kdu/custom-event-name-casing': ['error', 'camelCase'],
    'kdu/define-macros-order': ['error', {
      order: ['defineProps', 'defineEmits'],
    }],
    'kdu/html-comment-content-spacing': ['error', 'always', {
      exceptions: ['-'],
    }],
    'kdu/no-restricted-k-bind': ['error', '/^k-/'],
    'kdu/no-useless-k-bind': 'error',
    'kdu/no-k-text-k-html-on-component': 'error',
    'kdu/padding-line-between-blocks': ['error', 'always'],
    'kdu/prefer-separate-static-class': 'error',

    // extensions
    'kdu/array-bracket-spacing': ['error', 'never'],
    'kdu/arrow-spacing': ['error', { before: true, after: true }],
    'kdu/block-spacing': ['error', 'always'],
    'kdu/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'kdu/comma-dangle': ['error', 'always-multiline'],
    'kdu/comma-spacing': ['error', { before: false, after: true }],
    'kdu/comma-style': ['error', 'last'],
    'kdu/dot-location': ['error', 'property'],
    'kdu/dot-notation': ['error', { allowKeywords: true }],
    'kdu/eqeqeq': ['error', 'smart'],
    // 'kdu/func-call-spacing': ['off', 'never'],
    'kdu/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'kdu/keyword-spacing': ['error', { before: true, after: true }],
    'kdu/no-constant-condition': 'warn',
    'kdu/no-empty-pattern': 'error',
    'kdu/no-extra-parens': ['error', 'functions'],
    'kdu/no-irregular-whitespace': 'error',
    'kdu/no-loss-of-precision': 'error',
    'kdu/no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'kdu/no-sparse-arrays': 'error',
    'kdu/object-curly-newline': ['error', { multiline: true, consistent: true }],
    'kdu/object-curly-spacing': ['error', 'always'],
    'kdu/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    'kdu/object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'kdu/operator-linebreak': ['error', 'before'],
    'kdu/prefer-template': 'error',
    'kdu/quote-props': ['error', 'consistent-as-needed'],
    'kdu/space-in-parens': ['error', 'never'],
    'kdu/space-infix-ops': 'error',
    'kdu/space-unary-ops': ['error', { words: true, nonwords: false }],
    'kdu/template-curly-spacing': 'error',
  },
}
