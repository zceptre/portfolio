# Copilot Instructions for AI Coding Agents

## Project Overview
This is a static portfolio website project. The main files are:
- `index.html`: Main HTML entry point
- `script.js`: Handles interactive behavior
- `style.css` and `styles/`: Main and modular CSS files for layout and components
- `images/`: Contains image assets

## Architecture & Patterns
- **Single-page static site**: All content is rendered client-side; no backend or build system is present.
- **CSS modularization**: The `styles/` directory contains CSS files for specific UI sections (e.g., `navbar.css`, `hero.css`). Each file targets a distinct component or section in `index.html`.
- **JavaScript**: All scripts are in `script.js`. There is no module system; all code is global-scope and directly manipulates the DOM.
- **Assets**: Images are stored in `images/`. Reference them with relative paths in HTML/CSS.

## Developer Workflows
- **No build step**: Open `index.html` directly in a browser to view the site.
- **No tests or CI/CD**: There are no automated tests or pipelines.
- **Debugging**: Use browser dev tools (F12) for inspecting HTML, CSS, and JS.
- **Adding styles**: Place new CSS for sections in `styles/` and link in `index.html`.
- **Adding scripts**: Add new JS to `script.js`.

## Project Conventions
- **Class naming**: CSS classes use kebab-case (e.g., `.main-header`, `.project-card`).
- **Section structure**: Each major section in `index.html` (e.g., About, Projects, Skills) is styled by a corresponding file in `styles/`.
- **No frameworks**: Do not introduce React, Vue, or other frameworks.
- **No package manager**: Do not add `package.json` or node_modules.

## Examples
- To add a new section (e.g., Testimonials):
  1. Add HTML markup in `index.html`.
  2. Create `styles/testimonials.css` and link it in `index.html`.
  3. Add any JS logic to `script.js`.

## Key Files
- `index.html`: Main structure and content
- `script.js`: All JavaScript logic
- `style.css`: Global styles
- `styles/`: Section/component CSS
- `images/`: Static assets

## Integration Points
- No external APIs or libraries are used by default. If needed, use CDN links in `index.html`.

---
For more details, review the structure and comments in each file. Follow the above conventions for consistency.