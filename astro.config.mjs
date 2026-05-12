import { defineConfig } from 'astro/config';

// Served at https://jetlint.github.io/ — an org-pages site, so base is "/".
export default defineConfig({
  site: 'https://jetlint.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
