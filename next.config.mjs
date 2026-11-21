/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static HTML in ./out for GitHub Pages
  trailingSlash: true, // /agents/ → out/agents/index.html
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
