module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  
  rules: {
    quotes: ['error', 'single'],
    semi: ['warn', 'always'],
    'no-console': 'warn',
    'jsx-quotes': ['error', 'prefer-double'],
    'prefer-const': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'max-len': [
      'error',
      120,
      { ignoreTemplateLiterals: true, ignoreStrings: true }
    ],
    'tailwindcss/no-custom-classname': 'off',
    'eol-last': ['warn', 'always'],
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true
      }
    ],
  },
}
