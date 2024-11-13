# Slate Web

This is a monorepo containing all the Slate web stuff, such as the main facing website, the Web OS, and our React style & component kit.

Uses:
- pnpm & Turborepo
- Next.js (web os)
- Astro (website)
- unUI (design system)
- Typescript
- React

# Monorepo

We chose to use a monorepo because we use the same design system across multiple projects, and having them in 1 monorepo will make it easier to work with.

`apps/web-os` - The Web OS
`apps/website` - The front facing website
`packages/ui` - Our React UI kit

#### Usage

```bash
pnpm install
pnpm turbo dev --filter=@slate/web-os # or /website or /ui
```

# Status

Version 0.0.0, we are still getting started.

# Web OS

The Slate Web OS is a mockup of what a real, built from the ground up operating system would look like from us. It also serves as a starting point for our desktop envrionment, and a place to test out Slate Desktop to see if you like it.

It is built with Next.js, and unWindow for window and task managment.

# License

`GPL-3`
