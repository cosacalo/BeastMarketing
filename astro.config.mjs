import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed to GitHub Pages on the custom domain https://beastmarketing.pro, served at
// the ROOT (no `base` needed). Apex + www DNS point at GitHub Pages and public/CNAME
// pins the domain. Dev and prod are both at the root: localhost:4321/ and beastmarketing.pro/.
export default defineConfig({
  site: 'https://beastmarketing.pro',
  vite: {
    plugins: [tailwindcss()],
  },
});
