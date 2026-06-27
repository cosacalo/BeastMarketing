import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed to GitHub Pages as a PROJECT site at https://cosacalo.github.io/BeastMarketing/
// so `base` must match the repo name. When a custom domain (e.g. beastmarketingco.com)
// is connected later: set `site` to that domain and change `base` back to '/'.
export default defineConfig({
  site: 'https://cosacalo.github.io',
  base: '/BeastMarketing',
  vite: {
    plugins: [tailwindcss()],
  },
});
