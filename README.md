# Pip Focus

One simple thing, done well.

A Chrome extension that blocks distracting websites to help you stay focused.

<a href="https://pipfocus.github.io/website/">
  <img src="https://img.shields.io/badge/Website-Visit-8b5cf6" alt="Website">
</a>
<a href="https://chromewebstore.google.com/detail/focus-mode/ijgbeipckbajgnkjgdhoponeenjdnimn">
  <img src="https://img.shields.io/badge/Chrome%20Web%20Store-Install-blue?logo=googlechrome" alt="Chrome Web Store">
</a>
<a href="https://buymeacoffee.com/pipfocus">
  <img src="https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Support-yellow?logo=buymeacoffee" alt="Buy Me A Coffee">
</a>
<a href="https://twitter.com/pip_focus">
  <img src="https://img.shields.io/badge/Twitter-@pip_focus-1DA1F2?logo=twitter" alt="Twitter">
</a>
<a href="https://instagram.com/pip_focus">
  <img src="https://img.shields.io/badge/Instagram-@pip_focus-E4405F?logo=instagram" alt="Instagram">
</a>

## Screenshots

<p align="center">
  <img src="docs/assets/popup.png" alt="Popup" width="280">
  <img src="docs/assets/stats.png" alt="Stats" width="500">
</p>
<p align="center">
  <img src="docs/assets/blocked.png" alt="Blocked Page" width="700">
</p>

## Features

- **One-click blocking** — Toggle focus mode instantly
- **Custom block list** — Block any website (YouTube, Twitter, Reddit, etc.)
- **Flexible timers** — 5min to 2hrs, custom duration, or infinite
- **Focus stats** — Track daily, weekly, monthly focus time
- **Streak tracking** — See current and best focus streaks
- **Hold to disable** — Prevents accidental turn-off during sessions
- **Smart wildcards** — `*youtube.com` blocks all subdomains, `https://youtube.com` blocks exact match only, doesn't block `music.youtube.com`
- **Minimal block page** — Clean overlay, no distractions
- **Import/Export** — Backup and restore your settings and stats
- **100% private** — No data collection, no tracking, no ads, fully local

## Install

**Chrome Web Store**: [Install Pip Focus](https://chromewebstore.google.com/detail/focus-mode/ijgbeipckbajgnkjgdhoponeenjdnimn)

**Manual**: Download from Chrome Web Store or contact support for installation instructions.

**Follow**: [@pip_focus](https://twitter.com/pip_focus) on Twitter | [@pip_focus](https://instagram.com/pip_focus) on Instagram

## Privacy

- No data collection or analytics
- No ads
- No external servers
- 100% local storage
- Open source

[Full Privacy Policy](PRIVACY.md)

## Development

This is the main development repository for Pip Focus. The source code is private, but the extension is fully open source in spirit.

### Repository Structure

- **Main Repo** (this repo): Private development repository containing source code
- **Website Repo**: [pipfocus/website](https://github.com/pipfocus/website) - Public repository with minified website and documentation

### Automatic Deployment

The website is automatically built and deployed to the public website repository on every push to `main` via GitHub Actions. See [`.github/workflows/README.md`](.github/workflows/README.md) for setup instructions.

### Building

- **Extension**: `npm run preview` or `npm run deploy`
- **Website**: `npm run build-website` (outputs to `website-dist/`)

## License

MIT License

---

Built for myself. Maybe useful for you too.
