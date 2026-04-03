# Skills — implementing new features

Use this checklist when adding or changing product behavior. For stack details, file layout, and deployment rules, read **`AGENTS.md`** first.

## Before you code

1. Confirm the feature scope (what ships on `/`, new route, constants-only change, etc.).
2. Identify files using the “Files agents touch most often” table in `AGENTS.md`.
3. Start from an up-to-date **`main`** and use a **feature branch** (never commit directly to `main` for feature work).

## Git workflow (required)

Run from the repository root. Replace placeholders with a short, accurate slug and message.

```bash
git checkout main
git pull
git checkout -b feature/<short-description>
```

After implementing:

```bash
npm run lint
npm run build
git add .
git commit -m "Implement <feature description>"
git push -u origin feature/<short-description>
```

Open a pull request (requires [GitHub CLI](https://cli.github.com/) authenticated to this repo):

```bash
gh pr create --base main --head feature/<short-description> --fill
```

If `gh` is unavailable, push the branch and open a PR manually in the GitHub UI against **`main`**.

## Feature patterns (this repo)

### New home-page section

1. Add a component under `src/components/<Name>.jsx` (default export, match existing JSX + Tailwind style).
2. Import it in `src/App.jsx` and render it in the `/` route fragment in the order you want (see `AGENTS.md` for current order).
3. Prefer **responsive Tailwind** (`sm:`, `md:`, `lg:`) and **Framer Motion** `whileInView` with `viewport={{ once: true }}` if other sections animate on scroll.

### New route (e.g. mini-app or page)

1. Add a `Route` in `src/App.jsx` next to `/CounterGame`.
2. Use **`Link`** for navigation; paths must work with **`HashRouter`** (e.g. `/MyPage`, not hash literals in `to=`).
3. Keep the shared shell (`NavBar`, background) unless the issue says otherwise.

### New project card

1. Add image under `src/assets/projects/`.
2. Import the asset in `src/constants/index.js` and append an object to **`PROJECTS`** (title, image, description, technologies, optional `link`).

### Copy / data only

1. Edit `src/constants/index.js` (`HERO_CONTENT`, `EXPERIENCES`, `PROJECTS`, etc.).
2. No new component needed unless layout must change.

### Styling and motion

- Use **Tailwind** utilities; keep the neutral + cyan palette unless the issue specifies otherwise.
- Avoid leaving **permanent** `x` / `y` offsets in `whileInView` or `animate` final states on full-width mobile columns (use **`x: 0` / `y: 0`** at rest).

## Quality gate (before push)

- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] Manually spot-check **mobile width** and **desktop** for layout regressions
- [ ] Commit message describes the user-visible change

## After merge

Production site is **GitHub Pages**; merging to `main` updates the source repo. Deploying the built site still follows `package.json` scripts (`npm run deploy` / `gh-pages`) when you are ready to publish **`dist/`**.
