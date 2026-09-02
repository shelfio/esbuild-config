import config from '@shelf/eslint-config/typescript-no-prettier.js';

export default [
  {files: ['**/*.js', '**/*.json', '**/*.ts']},
  ...config,
  {
    ignores: [
      '**/.circleci',
      '**/node_modules/',
      '**/coverage/',
      '**/lib/',
      'renovate.json',
      'tsconfig.json',
    ],
  },
];
