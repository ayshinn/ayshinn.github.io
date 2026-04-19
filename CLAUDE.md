# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `gulp dev` — Start development server with BrowserSync live reload
- `gulp` — Production build (vendor, CSS, JS)
- `gulp css` — Compile SCSS → CSS and minify
- `gulp js` — Minify JS
- `gulp vendor` — Copy dependencies from node_modules to vendor/

No npm scripts are defined; Gulp is the task runner.

## Architecture

Static single-page resume/portfolio site based on Start Bootstrap's Resume template. Deployed to GitHub Pages (ayshinn.github.io).

**Single entry point:** `index.html` — one HTML file with sidebar navigation and scrollable sections (About, Experience, Education, Skills).

**Styling pipeline:** `scss/resume.scss` imports modular partials (`_variables.scss`, `_mixins.scss`, `_global.scss`, `_nav.scss`, `_resume-item.scss`, `_bootstrap-overrides.scss`) → compiled to `css/resume.min.css`. Primary brand color is `#BD5D38` (defined in `_variables.scss`).

**JS:** `js/resume.js` uses jQuery for smooth scrolling (with jquery-easing), responsive navbar toggle, and ScrollSpy to highlight active nav links. Minified to `js/resume.min.js`.

**Vendor pattern:** Third-party libraries (Bootstrap, jQuery, Font Awesome, jquery-easing) are copied from `node_modules/` into `vendor/` by `gulp vendor`. The `vendor/` directory is what `index.html` actually references.

**Build tool:** `gulpfile.js` defines all Gulp tasks using Gulp 5 syntax with BrowserSync watching `scss/**/*.scss`, `js/**/*.js`, and `*.html`.
