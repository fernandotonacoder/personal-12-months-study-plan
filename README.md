# 12-Month Study Plan

A static single-page study plan rendered from a JS data file. No build step — edit locally, open in a browser, deploy anywhere that serves static files. Includes a GitHub Actions workflow for on-demand deployment to GitHub Pages — triggered manually via the Actions tab, not on every push.

## What to edit

All content lives in [`data.js`](data.js). Touch nothing else for content changes.

**`approach`** — the intro box at the top:
- `intro`: one-line description of the learning approach
- `platforms`: list of `{ name, note }` entries — one per platform

**`categories`** — the legend and pill colours:
- Each `{ cls, label }` maps to a CSS class in [`style.css`](style.css) that defines the colour
- To add a category: add an entry here **and** a matching `.cls { border-color, color }` + `.cls .pill-dot, .cls .dot { background }` block in `style.css`

**`plan`** — the monthly table:
- `{ type: 'sep', label }` inserts a quarter separator row
- Month object fields: `month`, `pills`, `resources`, `official`, `notes`, `milestone` (optional)
- `pills`: `[{ cls, label }]` — `cls` must be one of the keys in `categories`
- `resources`: `[{ text, platform? }]` — non-official learning column
- `official`: `[{ state, text, sub? }]` — `state` is `'pending'`, `'done'`, or `'none'`
- `notes`: `string[]` — each string is one line

## Reuse

To reuse this template for a different plan: replace `data.js` entirely. The header text in [`index.html`](index.html) (name, date range, tech stack) should also be updated.

___

**Fernando Tona**

- GitHub: [@fernandotonacoder](https://github.com/fernandotonacoder)
- LinkedIn: [Fernando Tona](https://www.linkedin.com/in/fernandotona/)
- Website: [fernandotonacoder.github.io](https://fernandotonacoder.github.io/)