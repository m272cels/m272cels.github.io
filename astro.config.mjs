// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://m272cels.github.io',
  base: '/',
  build: {
    format: 'directory'
  }
});
