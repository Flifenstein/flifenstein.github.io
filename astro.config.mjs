// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ponytail: site URL is the GitHub Pages one; change if you move to flifenstein.com or another host
export default defineConfig({
  site: 'https://flifenstein.github.io',
  integrations: [sitemap()],
});
