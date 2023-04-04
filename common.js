#!/usr/bin/env node
import fs from 'node:fs';
import * as esbuild from 'esbuild';

/**
 * Build the project using esbuild
 *
 * @param {object} options - The options for building the project
 * @param {string[]} [options.entryPoints=['src/index.ts']] - An array of entry points for the build process
 * @param {string[]} [options.target=['esnext', 'node16']] - An array of target environments for the build process
 * @param {object} [options.config] - Additional configuration options for the build process
 * @param {string} [options.platform='browser'] - The platform to build for (browser or node)
 * @param {boolean} [options.metafile=false] - Whether to generate a metafile during the build process
 */
const build = async ({
  entryPoints = ['src/index.ts'],
  target = ['esnext', 'node16'],
  config,
  platform = 'node',
  metafile = false,
}) => {
  const result = await esbuild
    .build({
      logLevel: 'info',
      entryPoints,
      bundle: true,
      outdir: 'lib',
      target,
      minify: true,
      platform,
      format: 'esm',
      color: true,
      treeShaking: true,
      splitting: true,
      packages: 'external',
      metafile,
      ...config,
    })
    .catch(() => process.exit(1));

  if (metafile) {
    fs.writeFileSync('meta.json', JSON.stringify(result.metafile));
  }
};

export default build;
