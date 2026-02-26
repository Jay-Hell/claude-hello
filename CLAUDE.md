# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A Node.js CLI tool written in TypeScript.

## Commands

```bash
# Install dependencies
npm install

# Build
npm run build

# Run in development (ts-node)
npm run dev -- <args>

# Run built CLI
node dist/index.js <args>

# Lint
npm run lint

# Run tests
npm test

# Run a single test file
npx jest path/to/test.test.ts
```

## Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **CLI framework**: (to be decided — e.g. `commander`, `yargs`, or `oclif`)
- **Test framework**: Jest
- **Linter**: ESLint + typescript-eslint
