/**
 * Prettier Configuration
 *
 * Code formatting rules for consistent code style across the project
 */

/** @type {import('prettier').Config} */
module.exports = {
  // Print width - line length that the printer will wrap on
  printWidth: 120,

  // Tab width - number of spaces per indentation level
  tabWidth: 2,

  // Use tabs instead of spaces
  useTabs: false,

  // Semicolons at the end of statements
  semi: false,

  // Use single quotes instead of double quotes
  singleQuote: false,

  // Quote properties in objects only when necessary
  quoteProps: "as-needed",

  // Use single quotes in JSX
  jsxSingleQuote: false,

  // Trailing commas where valid in ES5 (objects, arrays, etc.)
  trailingComma: "es5",

  // Spaces between brackets in object literals
  bracketSpacing: true,

  // Put the > of a multi-line JSX element at the end of the last line
  bracketSameLine: false,

  // Include parentheses around a sole arrow function parameter
  arrowParens: "always",

  // Prettier can restrict itself to only format files that contain a special comment
  requirePragma: false,

  // Prettier can insert a special @format marker at the top of files
  insertPragma: false,

  // How to wrap prose (markdown)
  proseWrap: "preserve",

  // HTML whitespace sensitivity
  htmlWhitespaceSensitivity: "css",

  // Vue files script and style tags indentation
  vueIndentScriptAndStyle: false,

  // Line ending
  endOfLine: "lf",

  // Control whether Prettier formats quoted code embedded in the file
  embeddedLanguageFormatting: "auto",

  // Enforce single attribute per line in HTML, Vue and JSX
  singleAttributePerLine: false,

  // Tailwind CSS plugin
  plugins: ["prettier-plugin-tailwindcss"],

  // Override settings for specific file types
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 80,
      },
    },
    {
      files: "*.md",
      options: {
        proseWrap: "always",
        printWidth: 80,
      },
    },
  ],
}
