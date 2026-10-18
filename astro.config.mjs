import { defineConfig } from 'astro/config';

// The final domain has not been confirmed by the business owner.
// Set `site` here once a domain is chosen so canonical URLs and the
// sitemap can be generated without inventing an address.
export default defineConfig({
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
