# playwright-cli cheat-sheet

Running record of UI element names, routes, form shapes, and flow gotchas discovered while testing with `playwright-cli`. Consult before scanning snapshots. Append new learnings as they are discovered.

## Routes

Page paths and their purpose.

- `/` Home. Title `Next.js Starter Fullstack`. Header brand `NSF App` links to `/`, nav `Home` links to `/`, theme toggle button in nav. Main has `h1 Next.js Starter Fullstack`, `h2 Production grade Fullstack Next.js starter template`, `Click Me!` toast button.

## UI element names

Accessible names, testids, and where they live.

- `banner app-header`: brand link `NSF App`, nav link `Home`, theme toggle `button` with no accessible name. Use `page.getByRole('banner').getByRole('button')` for toggle.
- `main` button `Click Me!`: fires `toast.add` with title `Hello there` and description `Happy to see you`.
- Toast renders in `region Notifications` as `dialog` with `heading Hello there` plus close button. `Toaster` lives in `ThemeProvider` with `timeout={2000}`.
- Dev only button `Open Next.js Dev Tools` is present on `next dev` pages.

## Form shapes

Fields, schemas, and defaults per form.

- No forms on `/`. No schemas exercised in this pass.

## Flow gotchas

Ordering, timing, and state pitfalls found during click-testing.

- Toast auto dismisses after 2000 ms. Click `Click Me!` then snapshot immediately or the `Notifications` region reads empty.
- Theme toggle flips `html` class between dark and `light` and sets `style color-scheme`. Dark is default via `ThemeProvider defaultTheme="dark"`.
- `next dev` rewrites the `nextjs-agent-rules` block at the top of `AGENTS.md`. Keep that diff with the working change or it reappears as an uncommitted change on every dev run.
- `next@16.4.3` peers accept React `^18.2.0 || ^19.0.0`, so React 19.2.8 needed no bump for this update.
