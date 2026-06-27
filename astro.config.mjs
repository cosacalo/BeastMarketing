import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Deployed to GitHub Pages on the custom domain https://beastmarketing.pro, served at
// the ROOT (no `base` needed). Apex + www DNS point at GitHub Pages and public/CNAME
// pins the domain. Dev and prod are both at the root: localhost:4321/ and beastmarketing.pro/.
//
// PUBLIC build ships ONLY the welcome page (src/pages/index.astro). The full site is kept
// for development as DEV-ONLY routes that are never written to the production build:
//   - localhost:4321/preview          -> the full landing page (src/dev/full-site.astro)
//   - localhost:4321/privacy          -> the privacy page       (src/dev/privacy.astro)
// When the full site is ready, move src/dev/full-site.astro back to src/pages/index.astro.
function devOnlyRoutes() {
  return {
    name: 'beast-dev-only-routes',
    hooks: {
      'astro:config:setup': ({ command, injectRoute }) => {
        if (command === 'dev') {
          injectRoute({ pattern: '/preview', entrypoint: './src/dev/full-site.astro' });
          injectRoute({ pattern: '/privacy', entrypoint: './src/dev/privacy.astro' });
        }
      },
    },
  };
}

export default defineConfig({
  site: 'https://beastmarketing.pro',
  integrations: [devOnlyRoutes()],
  vite: {
    plugins: [tailwindcss()],
  },
});
