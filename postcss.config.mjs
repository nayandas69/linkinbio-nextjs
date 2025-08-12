/**
 * PostCSS Configuration
 *
 * This configuration file sets up PostCSS plugins for processing CSS:
 * - Tailwind CSS: Utility-first CSS framework
 * - Autoprefixer: Automatically adds vendor prefixes for better browser support
 */

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Tailwind CSS plugin for processing utility classes
    tailwindcss: {},

    // Autoprefixer for adding vendor prefixes automatically
    autoprefixer: {},
  },
}

export default config
