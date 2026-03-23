import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['.vitepress/dist/**', 'node_modules/**']
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off'
    }
  }
];
