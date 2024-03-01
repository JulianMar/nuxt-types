import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';
import * as path from 'node:path';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  workspaceDir: '../',
  srcDir: 'src',
  buildDir: '../dist/my-app/.nuxt',
  devtools: { enabled: true },
  devServer: {
    host: 'localhost',
    port: 4200,
  },
  typescript: {
    typeCheck: true,

    tsConfig: {
      compilerOptions: {
        noEmit: false,
        baseUrl: '.',
      },
      extends: path.join(__dirname, '..', 'tsconfig.base.json'),
    },
  },

  alias: {
    '@nuxt-types/services': path.resolve(__dirname, '../libs/services/src'),
  },

  css: ['~/assets/css/styles.css'],

  vite: {
    plugins: [nxViteTsPaths()],
  },
  nitro: {
    output: {
      dir: '../dist/my-app/.output',
    },
  },
});
