# Slate Design 1

Slate Design 1 is a Svelte 5 design system for building modern web applications. It provides a set of reusable components and styles that can be used to create consistent and visually appealing user interfaces.

## Installation

To install Slate Design 1, run the following command:

```bash
bun add @slatetech/design
```

## Development

To develop components in the Storybook environment, run the following command:

```bash
bun design dev
```

## Packaging & Testing

To run a test build, run:

```bash
bun design build:ui
```

This uses `svelte-package` to compile components and types into `dist/`, and runs a script to update the `package.json` exports map.

### Testing the package locally

##### In the package repo (Slate-Web)
```bash
bun link
```
##### In your app
```bash
bun link @slatetech/design
```

To drop the link and use the published version again:
```bash
bun unlink @slatetech/design
bun install
```

## Publish a Feature

Once you're done developing a feature, run the following command:

```bash
bunx changeset
```

- then select @slatetech/design
- choose patch, minor, or major
- write one short summary line

Then open a PR into `main`, we'll review it and merge it, then it'll be automatically published.
