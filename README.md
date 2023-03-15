# @shelf/esbuild-config ![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

> A collection of configurations and utilities to help you build projects or libraries using esbuild. This package includes plugins for common tasks like transpiling TypeScript and compiling SASS and styled-components, as well as presets for React.

## Install

```
$ yarn add -D @shelf/esbuild-config
```

## Usage
Once installed, you can use esbuild-config to configure and run your esbuild builds. The package provides two utility functions, common() and frontend(), that you can import and call from your build scripts:

```js
// Import the function you need
import {common, frontend} from '@shelf/esbuild-config';

// Call the functions with your options
await common({
  entryPoints: ['src/index.ts'],
  target: ['esnext', 'node16'],
  // ...
});

await frontend({
  entryPoints: ['src/index.ts'],
  target: ['esnext', 'node16'],
  sassConfig: {
    // ...
  },
  // ...
});
```
Both functions accept a similar set of options that you can use to customize the build process according to your needs. Check the JSDoc comments in the code for more information on the available options.

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT © [Shelf](https://shelf.io)
