import { defineConfig, devices } from "@playwright/test";

// Smoke tests against the static export in out/ (run `npm run build` first). BASE_PATH mirrors PAGES_BASE_PATH.
const base = process.env.BASE_PATH ?? "";
const port = 3100;

export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  reporter: process.env.CI ? "github" : "list",
  use: { baseURL: `http://127.0.0.1:${port}${base}/` },
  webServer: {
    // serve the export so it lives under the base path, like GitHub Pages does
    command: base
      ? `rm -rf .serve && mkdir -p .serve && cp -R out .serve${base} && npx serve .serve -l ${port} --no-clipboard`
      : `npx serve out -l ${port} --no-clipboard`,
    url: `http://127.0.0.1:${port}${base}/`,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "iphone", use: { ...devices["iPhone 15"] } },
  ],
});
