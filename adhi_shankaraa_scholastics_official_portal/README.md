# Adhi Shankaraa Scholastics — Website

A clean React (Vite) implementation of the Adhi Shankaraa Scholastics single-page
website, converted 1:1 from the original Google Stitch HTML/CSS export. The rendered result is
intended to be visually identical to the Stitch design — the conversion only changes the
implementation technology (HTML → React), not the design.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

Other scripts:

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## How fidelity is preserved

| Concern        | Approach |
| -------------- | -------- |
| Design tokens  | The Stitch `tailwind.config` (colors, spacing, `fontFamily`, `fontSize`, `borderRadius`) is transcribed verbatim into [`tailwind.config.js`](tailwind.config.js). |
| CSS            | No CSS was rewritten. Tailwind moved from the Play CDN to Vite + PostCSS. The base resets and the `#font-hierarchy-override` block from the Stitch `<head>` are copied verbatim into [`src/index.css`](src/index.css), `!important` rules intact. |
| Fonts          | Playfair Display, Inter, Merriweather, Montserrat, Lato and Material Symbols Outlined are loaded from Google Fonts in [`index.html`](index.html), matching the original `<link>` tags. |
| Markup         | Every `className` string is identical to the source. HTML → JSX only (`class`→`className`, `for`→`htmlFor`, self-closed tags, inline `onsubmit`→React handler). |
| Icons          | Kept as Material Symbols glyphs via the [`Icon`](src/components/Icon.jsx) wrapper — no emoji substitutes. |
| Carousel       | The vanilla-JS campus carousel (7 slides, 4.5s autoplay, pause-on-hover, arrows + dots + counter) is reimplemented with React state in [`CampusShowcase`](src/components/CampusShowcase.jsx) with the same classes and timing. |
| Images         | The Stitch export references remote images on `lh3.googleusercontent.com`; no local asset files were supplied, so the URLs are kept as-is in [`src/data/societyData.js`](src/data/societyData.js). If official local assets become available, drop them in `src/assets/images/` and swap the constants. |

## Project structure

```
index.html
tailwind.config.js      # verbatim Stitch design tokens
postcss.config.js
vite.config.js
src/
├── main.jsx
├── App.jsx
├── index.css           # Tailwind entry + verbatim base/font-override CSS
├── data/
│   └── societyData.js   # image URLs + repeated content (stats, objects, facts, slides, nav)
└── components/
    ├── Icon.jsx
    ├── Header.jsx
    ├── Hero.jsx
    ├── About.jsx           #about
    ├── AffiliatedSchool.jsx #school
    ├── CampusShowcase.jsx   # interactive carousel
    ├── Contact.jsx          #contact  (enquiry form, front-end handler only)
    └── Footer.jsx
```

## Notes

- Single-page site with in-page anchor navigation (`#about`, `#school`, `#contact`). No router.
- The enquiry form has a front-end-only submit handler that shows the success message and resets
  the fields — there is no backend, matching the original.
- `section[id] { scroll-margin-top: 5rem }` is the only additive rule: it keeps anchored sections
  clear of the fixed 80px header. It has no visual effect on the page itself.
