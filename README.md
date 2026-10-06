# dxpane/site

The dxpane landing site: home (hero + "how it works" story + FAQ), Privacy, Terms and Support, in English (`/`) and
Turkish (`/tr/`). Next.js static export, published to GitHub Pages. No cookies, no analytics.

| | |
|---|---|
| Live | https://dxpane.github.io/site/ (→ https://dxpane.com once DNS is set, see below) |
| Stack | Next.js 16 (`output: "export"`), React 19, plain CSS, Playwright smoke tests |
| Content | `src/content/en.ts`, `src/content/tr.ts` — all copy, menus and legal text live here |
| Branches | `dev` (integration, default) · `master` (release: every push deploys) · `feat/*` `fix/*` `chore/*` |

## Develop

```bash
npm ci
npm run dev          # http://localhost:3000
npm run build        # static export → out/
npm test             # Playwright against out/ (Chromium + iPhone/WebKit)
PAGES_BASE_PATH=/site npm run build && BASE_PATH=/site npm test   # as served on github.io/site
```

## Release

Merge `dev` → `master`; `.github/workflows/pages.yml` builds and deploys. The base path comes from
`actions/configure-pages`, so the same build works on `github.io/site` and on the custom domain.

## Custom domain (dxpane.com, DNS at Cloudflare)

1. GitHub org → Settings → Pages → **Verified domains**: add `dxpane.com`, create the TXT record it shows.
2. Cloudflare DNS, **DNS only** (grey cloud) so GitHub can issue the certificate:
   `A @ 185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` and `CNAME www dxpane.github.io`.
3. Repo → Settings → Pages → Custom domain `dxpane.com`, then **Enforce HTTPS**. Re-run the pages workflow.

## Before App Store submission

Privacy and Terms are drafts written from how the app works today; have them reviewed (KVKK/GDPR) and add the legal
entity once it exists. Replace the "Coming soon" pill with Apple's official badge at launch.
