# Tiny Creatures — Cinematic Hero

A fullscreen hero section with a looping, fade-in/fade-out video background, built with React + Vite + TypeScript + Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The build output lands in `dist/`.

## Deploying to GitHub Pages

⚠️ GitHub Pages can only serve plain HTML/CSS/JS — it can't run `.tsx`/`.ts` files directly. If you upload the raw `src/` folder as-is, the page loads blank. This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the project for you on every push, so you never have to build it by hand.

1. Push **the whole project** (including `.github/`) to a GitHub repo, on the `main` branch.
2. In your repo, go to **Settings → Pages**.
3. Under "Build and deployment → Source", choose **GitHub Actions** (not "Deploy from a branch").
4. Push any small change (or go to the **Actions** tab and re-run the workflow manually) to trigger the first build.
5. Wait 1–2 minutes, then refresh **Settings → Pages** — it'll show your live URL, something like `https://<your-username>.github.io/<repo-name>/`.

From then on, every time you push new code to `main`, the site rebuilds and redeploys automatically — no manual `npm run build` step needed.

## Project structure

```
src/
  components/
    Navbar.tsx           nav bar: logo, links, "Begin Journey" CTA
    Hero.tsx              headline, description, hero CTA
    VideoBackground.tsx   video layer + gradient overlay
  hooks/
    useVideoFadeLoop.ts   the fade-in/hold/fade-out/rewind loop logic
  styles/
    fonts.css              Instrument Serif + Inter imports
    theme.css               the fade-rise entrance animations
    index.css                Tailwind directives + base styles
  App.tsx
  main.tsx
```

## Notes

- The background video URL lives in `src/components/VideoBackground.tsx` as the `VIDEO_URL` constant — swap it there if the asset ever moves.
- The video intentionally has no `loop` attribute: `useVideoFadeLoop` listens for the native `ended` event to restart it manually, which is what makes the fade-to-black-and-back loop possible in the first place.
- Colors and type sizes are written as literal Tailwind arbitrary values (e.g. `text-[#6F6F6F]`, `tracking-[-2.46px]`) to match the spec exactly rather than going through a design-token layer.
