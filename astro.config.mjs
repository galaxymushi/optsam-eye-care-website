import { defineConfig } from 'astro/config';

// Hosted on GitHub Pages as a project site after the repository was
// renamed from `galaxymushizo-netizen.github.io` to
// `optsam-eye-care-website`. `base` must stay in sync with the repo name.
export default defineConfig({
  site: 'https://galaxymushizo-netizen.github.io',
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
