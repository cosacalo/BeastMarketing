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
npm run dev      # http://localhost:4321/BeastMarketing/
```

Other scripts: `npm run build` (output to `dist/`), `npm run preview`.

## Deployment

Auto-deploys to **GitHub Pages** on every push to `main` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

- Live URL: **https://cosacalo.github.io/BeastMarketing/**
- One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Because it's a project site (served from `/BeastMarketing/`), `base` is set in
[`astro.config.mjs`](astro.config.mjs). **To move to a custom domain** (e.g.
`beastmarketingco.com`): set `site` to the domain, change `base` to `'/'`, add the
domain under Settings → Pages (a `CNAME` file is created), and point DNS at GitHub.

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
