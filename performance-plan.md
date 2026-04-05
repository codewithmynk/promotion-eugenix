# Performance Optimization Plan: Eugenix Headless

This document outlines the strategy to speed up the React application by optimizing how data is fetched from the WordPress API.

## Current Problem
The application fetches data from the WordPress API on every page load (at the server level). This causes a **1.4s - 2.5s delay** before the page even starts rendering (TTFB), as Next.js waits for the WP response.

## Proposed Solutions

### 1. Client-Side SWR (Stale-While-Revalidate)
**Goal:** Instant page loads with background updates.
- **How:** The page is built with "initial data" baked into the HTML. 
- **Effect:** The user sees the page IMMEDIATELY.
- **Dynamism:** A background fetch updates the content if WordPress has changed, ensuring the site isn't "stuck" with old data.

### 2. Local JSON Caching (Dev & Build Optimization)
**Goal:** Make development and building near-instant.
- **How:** Create a script to download the WP JSON into `src/data/cache.json`.
- **Effect:** Instead of hitting the network on every `npm run dev` refresh, the app reads from the local file.
- **Updates:** Run `npm run sync-wp` only when you want to pull fresh data from the API.

### 3. Incremental Static Regeneration (ISR)
- **Goal:** Cache on the server side.
- **Configuration:** Add `revalidate: 3600` to your `fetch` calls.
- **Note:** This works best if you move away from `output: 'export'` to a hosted Next.js server (like Vercel or VPS).

## Implementation Steps

1. Create a `src/hooks/useWPData.js` hook for background syncing.
2. Integrate this hook into `ClientHome.jsx`.
3. Create a `scripts/sync-api.js` to allow manual data refreshing during development.
4. Update `package.json` with a `sync-wp` command.

---
*Created on 2026-04-05*
