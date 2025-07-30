/**
 * ESLint Configuration
 * 
 * This configuration provides linting rules for:
 * - Next.js applications
 * - React components
 * - TypeScript code
 * - Accessibility best practices
 */

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript"
  ),
  {
    rules: {
      // React specific rules
      "react/no-unescaped-entities": "off",
      "react/display-name": "off",
      "react/jsx-key": "warn",
      
      // Next.js specific rules
      "@next/next/no-img-element": "warn",
      "@next/next/no-html-link-for-pages": "off",
      
      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": ["warn", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_" 
      }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/prefer-const": "warn",
      
      // General code quality
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "prefer-const": "warn",
      "no-var": "error",
      
      // Import/Export rules
      "import/no-anonymous-default-export": "off",
      
      // Accessibility rules
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-is-valid": "warn"
    }
  },
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "dist/**",
      "build/**",
      "*.config.js",
      "*.config.mjs"
    ]
  }
];

export default eslintConfig;
