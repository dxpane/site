import type { NextConfig } from "next";

// Static export for GitHub Pages. PAGES_BASE_PATH is set by the deploy workflow from actions/configure-pages:
// "/site" while served from dxpane.github.io/site, "" once the dxpane.com custom domain is active.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default config;
