module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'vite.config.ts',
    'postcss.config.js',
    'tailwind.config.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: '18.2',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react/prop-types': 'off', 
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], 
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};