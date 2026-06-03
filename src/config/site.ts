/**
 * Site-wide configuration constants.
 *
 * Centralizing these values means:
 * - One place to update the app name, description, or nav structure
 * - Components consume config instead of hardcoding strings
 * - Metadata (used by Next.js layout.tsx) stays consistent with UI
 *
 * As LifeOS grows, this file will also hold:
 * - social links
 * - feature flags
 * - external URLs
 */

export const siteConfig = {
  name: "LifeOS",

  description:
    "An AI-powered personal operating system that transforms goals into intelligent daily execution plans.",

  /**
   * Navigation items used by Navbar.
   * Each item maps a visible label to an anchor href.
   * Adding a new nav link means editing only this array.
   */
  navItems: [
    { href: "#features", label: "Features" },
    { href: "#vision", label: "Vision" },
    { href: "#roadmap", label: "Roadmap" },
  ],
} as const;

/**
 * `as const` tells TypeScript to treat every value as a literal type.
 *
 * Without it: navItems[0].href is typed as string
 * With it:    navItems[0].href is typed as "#features"
 *
 * This prevents typos from compiling silently and enables
 * better autocomplete across the codebase.
 */