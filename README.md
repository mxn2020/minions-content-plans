# minions-content-plans

**Content calendars, themes, and posting schedules per account group**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-content-plans/sdk minions-sdk

# Python
pip install minions-content-plans

# CLI (global)
npm install -g @minions-content-plans/cli
```

---

## CLI

```bash
# Show help
content-plans --help
```

---

## Python SDK

```python
from minions_content_plans import create_client

client = create_client()
```

---

## Project Structure

```
minions-content-plans/
  packages/
    core/           # TypeScript core library (@minions-content-plans/sdk on npm)
    python/         # Python SDK (minions-content-plans on PyPI)
    cli/            # CLI tool (@minions-content-plans/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [content-plans.minions.help](https://content-plans.minions.help)
- Blog: [content-plans.minions.blog](https://content-plans.minions.blog)
- App: [content-plans.minions.wtf](https://content-plans.minions.wtf)

---

## License

[MIT](LICENSE)
