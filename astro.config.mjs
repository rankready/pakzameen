// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Live custom domain (served via GitHub Pages).
  site: 'https://pakzameentravels.com',
  integrations: [sitemap()],
});
