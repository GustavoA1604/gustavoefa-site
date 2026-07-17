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
- `enquadrados/` - git submodule (separate game repo, a 3x3 word-board game).

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
    `↗` line), and for jobs `positions[]` (nested sub-roles: `title`, `date`, optional `mode`
    like `Remote`/`Hybrid` shown as `date · mode`, and `bullets[]`).
  - **Experience tiering:** an entry may carry `tier: "earlier"` plus a one-line `compact`
    string. Earlier-tier entries (the junior-enterprise work) render under an "Earlier
    experience" divider as just their header + the `compact` outcome line, with the full
    `positions` tucked behind a single "Show these roles (N)" expander. They render this way
    in every view **except the Leadership lens**, where they expand to full depth (that is the
    early-leadership story). The `compact` line is hidden in `@media print`, which restores
    the full roles, so print stays complete. See `showCompact` in `renderEntry`.
  - `highlights[]`: `{group, label, meta?, text?, href?}`, rendered as showcase cards in the
    "Selected highlights" band (`makeHighlight`). `group` buckets each item under a labelled
    subheading; the subheadings and their display order come from `highlightGroups[]`
    (`{key, title}`, currently Patents / Talks & publications / Open source). `label` is the
    bold lead-in (a link if `href` is set, else `<strong>`); `meta` is an optional small line
    (e.g. patent number + status, or medium); `text` is an optional one-line description.
    Note the `highlights[]` array order is independent of the display order (items are
    bucketed by `group`), but it must stay index-aligned with `LENS_TAGS.highlights`.
  - `skills[]`: `{title, tags[]}`, grouped by proficiency area (not a flat keyword dump).
    Each tag is `{label, detail}` (a bare string is also accepted and renders as a plain,
    non-interactive chip). Keep `label` short so the chip never wraps; `detail` is the
    longer evidence (drawn from experience/patents/highlights) that a chip reveals on
    hover/focus/click into a single per-group `.skill-detail` line (hover previews, click
    pins). See `renderSkill`.
  - Per-lens prose (see below) also lives in each language block: `roles` and `summaries`
    (keyed `ai`/`cpp`/`lead`; the top-level `role`/`summary` are the `all` defaults) and a
    `lens` object holding all lens UI strings (pill labels via `names`, the `viewing:` label,
    and expander labels with a `{n}` placeholder).
- **Role lenses** (the resume spans AI, C++/hardware, and leadership; a lens lets a visitor
  focus it without losing anything):
  - **Lens precedence on load** (`getLensFromURL` → `getLens` → default): a `?lens=` URL
    param wins, then a remembered choice in `localStorage` (`resumeLens`), then the full
    resume (`Everything`/`all`). There is **no blocking entry modal** and **no discovery
    glow** (the site is meant to be reached from a link the user crafts per job application,
    so arrivals are pre-aimed, not discovering the feature). A persistent pill bar under the
    hero (`AI / ML`, `C++ / Hardware`, `Leadership`, `Everything`) re-focuses at any time.
  - **The `?lens=` param is the primary delivery mechanism.** The resume site is sent as a
    "curious reader" link from a PDF (first contact), and the per-application link presets the
    lens: `…/resume/?lens=ai`, `?lens=cpp`, `?lens=lead`, or no param for `all`. The param is
    validated against `ai|cpp|lead|all` (invalid/missing falls through to stored/default) and
    **wins over a stored choice** so a freshly sent link always lands where intended. A URL
    param is not persisted to `localStorage`; clicking a pill is (`setLens`).
  - A lens **reorganizes and collapses**, it never greys out. On-lens content leads; off-lens
    content tucks behind a quiet `▾` expander: off-lens bullets become `+N more`, a wholly
    off-lens role becomes `Show this role (N)`, and a company whose every role is off-lens
    collapses to one `Show these roles (N)` (see `renderEntry`). Earlier-tier entries use this
    same whole-company collapse for their compact line (see the experience-tiering note above).
  - Tags live in **one language-independent `LENS_TAGS` map** in `resume.js`, index-aligned
    with the pt/en data (whose order is identical): `highlights[i]`, `skills[i]`, and
    `bullets[experienceIdx][positionIdx][bulletIdx]`. Each is an array of lens keys; an empty
    array always surfaces. Edit tags here, prose in the language blocks.
  - `@media print` reveals all collapsed content and hides the lens UI, so printing always
    yields the complete resume.
- Layout: full-width **Summary**, then a full-width **Selected highlights** band (cards
  grouped into Patents / Talks & publications / Open source), then a two-column grid
  (`.resume-layout`) with the main text (Experience, Education) on the left and a narrow side
  rail (Skills, Languages, Awards, Beyond work) on the right. Collapses to one column at
  <=760px. **Beyond work** is a small, lens-free list (`beyond[]` per language:
  `{label, text?, href?}`, rendered into `#r-beyond`) of personal projects (the book, the
  Entrelinhas game), kept out of the highlights band so it does not compete with the
  patents/talks/open-source credentials.
- The toolbar has a **← Back to home** link (`.back-btn`, id `r-back`) pointing to `../`
  (the main site) and a **⤓ Download PDF** button (`.print-btn`, id `r-print`, label from
  `dict.download`) that calls `window.print()`. `@media print` in `resume.css` reveals all
  lens/tier-collapsed content and restyles to clean black-on-white, so both that button and
  the browser's own print (Ctrl+P) yield the complete resume.
- Source resume PDF lives outside the repo at `D:/dev/candidaturas/resume.pdf`. It had **no
  embedded hyperlink annotations** (verified by decompressing all streams); the live links
  were supplied by the user separately and hardcoded in `resume.js`.

## Previewing locally

**Don't screenshot/render the page to verify routine changes.** The user does not
want the hassle of spinning up a server and capturing headless screenshots for
ordinary edits (copy, styling, data tweaks). Reason through the change and, if
needed, verify with `node --check assets/resume.js` and a DOM dump / grep instead.
Only render when a change is genuinely disruptive (a layout overhaul) and the visual
result can't be reasoned about confidently.

```sh
python -m http.server 8000
# then open http://localhost:8000/resume/ and http://localhost:8000/curriculo/
```

Headless screenshot (Windows, Edge available) — reserve for the disruptive cases above:

```sh
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" \
  --headless --disable-gpu --window-size=1100,1600 \
  --screenshot="shot.png" "http://127.0.0.1:8000/resume/"
```

## Deploy

Pushing to the default branch (`main`) publishes via GitHub Pages. Commit/push only when
the user asks.
