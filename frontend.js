#!/usr/bin/env node
import {sassPlugin} from 'esbuild-sass-plugin';
import common from './common.js';

/**
 * Build the project using esbuild and SASS
 *
 * @param {object} options - The options for building the project
 * @param {string[]} [options.entryPoints=['src/index.ts']] - An array of entry points for the build process
 * @param {string[]} [options.target=['esnext', 'node16']] - An array of target environments for the build process
 * @param {object} [options.config] - Additional configuration options for the build process
 * @param {string} [options.platform='browser'] - The platform to build for (browser or node)
 * @param {boolean} [options.metafile=false] - Whether to generate a metafile during the build process
 * @param {object} [options.sassConfig] - Configuration options for the SASS plugin
 */
const build = ({
  entryPoints = ['src/index.ts'],
  target = ['esnext', 'node16'],
  config,
  platform = 'browser',
  metafile = false,
  sassConfig = {cssImports: true, type: 'style'},
}) => {
  common({
    entryPoints,
    target,
    config: {plugins: [sassPlugin(sassConfig)], ...config},
    platform,
    metafile,
  });
};

export default build;
