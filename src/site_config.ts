// This file contains the site configuration for the theme.

// Metadata, SEO, and Social
export const SITE_TITLE = "Advynt Docs"
export const SITE_DESCRIPTION = "The official documentation for Advynt."
export const SITE_URL = "https://advynt.reednel.com"
export const SITE_DEFAULT_OG_IMAGE = "/assets/og-image.png"

// Docs Sidebar
// Define the left sidebar items here.
// The path should match the folder name in src/content/docs/
export const SIDEBAR_ITEMS = {
  "Get Started": [
    "/docs/get-started/introduction/",
    "/docs/get-started/installation/",
  ],
  "Tutorials": [
    "/docs/tutorials/build-x/",
  ],
  "Guides": [
    "/docs/guides/migrate-from-z/",
  ]
}
