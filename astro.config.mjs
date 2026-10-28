import { defineConfig } from 'astro/config';

// Hosted on GitHub Pages as a project site of the `galaxymushi` account
// (renamed from `galaxymushizo-netizen`). `base` must stay in sync with
// the repo name.
export default defineConfig({
  site: 'https://galaxymushi.github.io',
  base: '/optsam-eye-care-website/',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  devToolbar: {
    enabled: false,
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
