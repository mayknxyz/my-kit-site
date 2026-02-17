# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-02-17

### Added

- Astro Starlight docs site scaffolded with bun
- Site configured for `mykit.mikenavales.xyz`
- 6 sidebar sections: Start Here, Workflow, Commands, Skills, Architecture, Troubleshooting
- 35 content pages with frontmatter and placeholder content
- Start Here: getting started (full content), installation (full content), supported stack
- Workflow: overview, specify, plan, tasks, implement, ship, audit
- Commands: overview + 6 category pages (setup, development, ship & release, audit, issues, utilities) covering all 29 commands
- Skills: 5 workflow skills (specify, plan, tasks, implement, ship) + 6 domain skills (Astro, Svelte, Cloudflare, TypeScript, testing, Tailwind)
- Architecture: overview, stow layout, extension guide
- Troubleshooting: index, installation issues, workflow issues
- Splash landing page with my-backpack logo, feature CardGrid, and hero actions
- Hero buttons: "Getting Started" (primary) + "there's more in my-backpack >>>" (accent-colored, opens new tab)
- Custom SocialIcons component overriding Starlight default (all links open in new tab)
- GitHub social link in header
- mikenavales.xyz social link in header with custom globe/www icon
- "Edit this page" links pointing to GitHub repo
- Cloudflare Pages deployment config (`wrangler.json`)
- `deploy` and `preview:cf` scripts in `package.json`
- `.gitignore` for Astro, Cloudflare, and Node artifacts
- Pagefind search index (built-in with Starlight)
- Sitemap generation
- `CLAUDE.md` project configuration via `/mykit.init` (Astro framework)
- `CHANGELOG.md` following Keep a Changelog format
- `README.md` with dev and deploy instructions
- GitHub repo at `mayknxyz/my-kit-site`

[Unreleased]: https://github.com/mayknxyz/my-kit-site/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/mayknxyz/my-kit-site/releases/tag/v0.1.0
