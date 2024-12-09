import config from '@shelf/eslint-config/typescript.js';

export default [
  {files: ['**/*.js', '**/*.json', '**/*.ts']},
  ...config,
  {
    ignores: ['**/.circleci', '**/node_modules/'],
  },
];
