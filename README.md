# flifenstein.github.io

Personal research site (Astro, static output, no client JS except the theme toggle).

## Add things

- **Project:** drop a `.md` file in `src/content/projects/` (copy an existing one; frontmatter sets the meta line and links, body uses the Question / What I did / What we found / Why it matters template). `featured: true` puts it under "Selected work" on the home page.
- **Writing:** drop a `.md` file in `src/content/writing/` (title, url, venue, order).
- **Copy still to write:** search for `TODO(Ioana)`.
- **CV:** replace `public/cv/ioana-frincu-cv.pdf`.
- **Open Graph image:** edit `scripts/og.mjs`, run `npm run og`.

## Build

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static files in dist/
npm run preview
```

## Deploy

- **GitHub Pages (configured):** repo Settings → Pages → Source: *GitHub Actions*. Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.
- **Netlify:** build command `npm run build`, publish directory `dist`.
- **SFTP / shared hosting:** run `npm run build`, upload the contents of `dist/`.

If the site moves off `flifenstein.github.io`, change `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt`.
