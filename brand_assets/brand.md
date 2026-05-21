# Brand Assets — mrrz.dev

Canonical source of truth for colors, type, and visual primitives used across the
portfolio. **Do not invent new values** — pull from here.

## Identity

- **Name:** Son Morris Sasi
- **Role:** AI Developer
- **Domain:** mrrz.dev
- **Aesthetic:** macOS desktop + terminal window. Dark, code-forward, deliberate.

## Color Palette

| Token            | Hex       | Use                                                       |
| ---------------- | --------- | --------------------------------------------------------- |
| `--bg-base`      | `#0A0A0A` | Desktop background                                        |
| `--bg-surface`   | `#141414` | Terminal body                                             |
| `--bg-elevated`  | `#1E1E1E` | Title bar, dialogs                                        |
| `--bg-quoted`    | `#111111` | Pixel logo block, code chips                              |
| `--accent-green` | `#4afa7a` | Primary accent. Status, links, focus rings, CTAs          |
| `--accent-amber` | `#febc2e` | Secondary accent. Warnings, highlighted output (`.o-warn`)|
| `--accent-coral` | `#ff6b6b` | Errors only (`.o-err`)                                    |
| `--text-strong`  | `#ffffff` | Headlines, command prompts                                |
| `--text-body`    | `rgba(255,255,255,0.82)` | Body / command output                          |
| `--text-dim`     | `rgba(255,255,255,0.45)` | Meta, labels                                   |
| `--text-mute`    | `rgba(255,255,255,0.25)` | Hints, captions                                |

**Light theme** mirrors the structure with inverted values — see `html[data-theme="light"]` blocks in `index.html`.

### Color-tinted shadows

Never use pure-black shadows on top-level surfaces. Pair them with a faint tint:

- Terminal window: `--shadow-green-tint: rgba(20, 60, 35, 0.55)` (warm-green undertone)
- Floating UI (dock, peek card): `--shadow-amber-tint: rgba(50, 35, 5, 0.35)` (warm undertone)

## Typography

| Token            | Family                              | Use                                      |
| ---------------- | ----------------------------------- | ---------------------------------------- |
| `--font-mono`    | Space Grotesk (alias)               | Legacy refs — keep using everywhere |
| `--font-display` | Space Grotesk                       | Everything: headings, body, prompts      |
| (pixel)          | Press Start 2P                      | The "Morris Sasi" pixel logo block ONLY  |

> **Note:** JetBrains Mono was the original body face but has been retired. Both
> tokens now resolve to Space Grotesk. The `--font-mono` token is kept as an
> alias so existing references don't break. Do not reintroduce a monospace
> family without explicit user approval.

### Type rules

- Headings (`.o-head`, `.nav-label`, `.peek-heading`, `.exit-headline`):
  Space Grotesk, weight 600, letter-spacing `-0.02em`, line-height ~1.25
- Body (`.o-para`, `.o-line`, `.o-ai`): Space Grotesk weight 400, 13.5px, line-height 1.75
- ASCII-aligned command output (anything depending on equal-width columns) will
  no longer align perfectly — prefer real tables / flex layouts over text padding.

## Assets

- **Favicon:** `images/favicon.svg` — green `>` prompt on `#0A0A0A` rounded tile
- **OG cover:** `images/og-cover.svg` — 1200×630. Rasterize to PNG for max
  social-platform compatibility (Facebook/LinkedIn render SVG inconsistently)
- **Profile portrait:** `images/Profile.jpg` — primary headshot
- **Other images:** `images/` and `images/certificates/`

## Voice

- Direct, no fluff. The terminal aesthetic is a *commitment* — the copy should
  match its lack of marketing-speak.
- Use lowercase command names everywhere (`/about`, never `/About`).
- Prefer concrete deliverables over adjectives. "Built a 5-stage n8n pipeline"
  not "Crafted innovative AI solutions."

## Hard rules

- Don't introduce a new accent color without updating this file first.
- Don't use the default Tailwind palette (blue-600, indigo-500, etc.).
- Don't use the same font for headings and body.
- Don't use `transition-all`; only animate `transform` and `opacity`.
- Every interactive element needs hover **and** `:focus-visible` states.
