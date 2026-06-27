# Beast Marketing Co — website

Marketing site for **Beast Marketing Co**, a one-stop marketing and custom-apparel
team in Sarasota and Bradenton, FL. Single-page, conversion-focused landing page
with a quote-request form.

Built with **[Astro](https://astro.build)** + **Tailwind CSS**, self-hosted fonts
(Clash Display / General Sans), dark "spectrum lion" brand system. No backend — the
quote form posts to a static form service.

## Develop locally

```bash
npm install
npm run dev      # http://localhost:4321/
```

Other scripts: `npm run build` (output to `dist/`), `npm run preview`.

## Deployment

Auto-deploys to **GitHub Pages** on every push to `main` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

- Live URL: **https://beastmarketing.pro**
- Served at the **root** via the custom domain pinned in [`public/CNAME`](public/CNAME);
  the apex + `www` DNS point at GitHub Pages. No `base` is set, so dev
  (`localhost:4321/`) and prod are both at the root.
- Settings (already configured): Settings → Pages → Source: GitHub Actions, custom
  domain `beastmarketing.pro`, Enforce HTTPS.

## Before launch — connect the quote form

The quote form is not wired to a backend yet. In
[`src/components/QuoteForm.astro`](src/components/QuoteForm.astro), replace
`REPLACE_WITH_WEB3FORMS_ACCESS_KEY` with a free key from
[web3forms.com](https://web3forms.com) so submissions email the owner. Until then
the form shows a "call or text" fallback.

## Structure

```
src/
  components/   section components (Hero, Services, Packages, FAQ, QuoteForm, ...)
  layouts/      Base.astro (head, meta, OG, reveal-on-scroll)
  pages/        index.astro, privacy.astro
  styles/       global.css (design tokens)
  fonts/        self-hosted WOFF2
  assets/       lion mark, favicons, OG image
public/         static passthrough (.nojekyll for Pages)
```
