module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'double'],
    quotes: [2, 'single', 'avoid-escape'],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  globals: {
    fetch: false,
  },
};
