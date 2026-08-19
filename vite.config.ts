import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" makes every built asset path relative, so the build works
// whether it's served from the domain root or from a GitHub Pages
// project subpath (https://<user>.github.io/<repo-name>/) — no need to
// know the repo name ahead of time.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
