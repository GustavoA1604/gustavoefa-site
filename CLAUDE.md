# CLAUDE.md

Guidance for working in this repository.

## Writing style

- **Never use em dashes (`—`) anywhere** in content, copy, or commit messages. They
  read as AI-generated. Use a colon, comma, parentheses, or a spaced hyphen instead.
- En dashes (`–`) are only acceptable inside numeric/date ranges (e.g. `2017 – 2021`).
  Prefer plain prose elsewhere.

## What this repo is

A static personal website for Gustavo Araujo, served by **GitHub Pages** on the custom
domain in `CNAME` (gustavoefa.com.br). No build step, no framework, no package.json.
Plain HTML/CSS/JS. `.nojekyll` is present, so files are served as-is.

## Structure

- `index.html` - main landing page (About + Games). Bilingual via an inline
  `translations` object and a PT/EN flag switcher.
- `assets/styles.css` - styles for the landing page.
- `resume/index.html` + `curriculo/index.html` - the resume page (see below).
- `assets/resume.js`, `assets/resume.css` - shared resume logic and styles.
- `entrelinhas/` - git submodule (separate game repo).

## Resume page (`/resume` and `/curriculo`)

Intentionally **not linked from `index.html`** and marked `noindex, nofollow` so it is
not easily discoverable from the main site or search engines. It is only reachable by
knowing the URL.

- Two routes via folder-based clean URLs (work on GitHub Pages with no server config):
  - `/resume/` defaults to **English**.
  - `/curriculo/` defaults to **Portuguese**.
- Both pages are thin wrappers. They differ only in `<html lang>`, the static section
  headings, and `window.RESUME_DEFAULT_LANG` (`"en"` vs `"pt"`). The PT/EN toggle still
  works on both; the route just sets the initial language.
- **All resume content lives once in `assets/resume.js`** as a `RESUME` object with `pt`
  and `en` blocks. Edit it there and both routes + both languages update. The HTML files
  only hold empty containers with `id="r-*"` that the script fills in.
- Data model highlights:
  - `experience[]`/`education[]` entries: `org`, optional `orgHref` (makes the org name a
    link), `place`, `date`, `sub`, optional `links[]` (`{text, href}`, rendered as a small
    `↗` line), and for jobs `positions[]` (nested dated sub-roles with `bullets[]`).
  - `highlights[]`: `{label, text?, href?}`. Prominent band promoting patents, the
    conference talk, the article, and open-source work. `label` is the bold lead-in; if
    `href` is set the label becomes a link, otherwise it renders as `<strong>`. `text` is
    an optional short description appended after a colon.
  - `skills[]`: `{title, tags[]}`. Grouped by proficiency area, not a flat keyword dump.
- Layout: full-width **Summary**, then a full-width **Selected research & highlights** band,
  then a two-column grid (`.resume-layout`) with the main text (Experience, Education) on the
  left and a narrow side rail (Skills, Languages, Awards) on the right. Collapses to one
  column at <=760px.
- The toolbar has a **← Back to home** link (`.back-btn`, id `r-back`) pointing to `../`
  (the main site). `@media print` in `resume.css` still restyles to clean black-on-white
  for browser printing (Ctrl+P), even though there is no in-page print button.
- Source resume PDF lives outside the repo at `D:/dev/candidaturas/resume.pdf`. It had **no
  embedded hyperlink annotations** (verified by decompressing all streams); the live links
  were supplied by the user separately and hardcoded in `resume.js`.

## Previewing locally

```sh
python -m http.server 8000
# then open http://localhost:8000/resume/ and http://localhost:8000/curriculo/
```

Headless screenshot (Windows, Edge available):

```sh
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" \
  --headless --disable-gpu --window-size=1100,1600 \
  --screenshot="shot.png" "http://127.0.0.1:8000/resume/"
```

## Deploy

Pushing to the default branch (`main`) publishes via GitHub Pages. Commit/push only when
the user asks.
