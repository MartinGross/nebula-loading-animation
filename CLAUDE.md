# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React/TypeScript library for customizable loading animations, published as `nebula-loading-animation` on npm. The library provides multiple component variants (CSS-in-JS, Tailwind, styled-components) and vanilla JavaScript support.

## Development Commands

- **Build**: `npm run build` - Creates production build using Rollup
- **Development**: `npm run dev` - Builds in watch mode for development
- **Demo**: `npm run demo` - Runs the demo application (Vite dev server on port 3000)
- **Demo Build**: `npm run demo:build` - Builds the demo application
- **Type Check**: `npm run type-check` - Runs TypeScript type checking without emitting files
- **Lint**: `npm run lint` - Runs ESLint on TypeScript/TSX files in src/
- **Test**: `npm run test` - Runs Jest tests

## Architecture

### Core Structure
- **src/components/**: Three main component variants:
  - `LoadingAnimation.tsx` - Main component with CSS-in-JS
  - `LoadingAnimationTailwind.tsx` - Tailwind CSS optimized version
  - `LoadingAnimationStyled.tsx` - styled-components version
- **src/vanilla/**: Vanilla JavaScript implementation for non-React usage
- **src/types/**: TypeScript interfaces and type definitions
- **src/constants/**: Color themes and size presets
- **src/utils/**: CSS generation utilities

### Demo Application
Located in `demo/` directory, uses Vite with alias mapping to import from source (`../src/index.ts`).

## Build System

- **Rollup** configuration generates both CommonJS and ESM builds
- Outputs to `dist/` with source maps and type declarations
- External dependencies: react, react-dom, styled-components
- Uses TypeScript plugin with exclusions for demo and examples

## Key Features

- Multiple styling approaches (CSS-in-JS, Tailwind, styled-components)
- Vanilla JavaScript API via `createLoadingAnimation()`
- TypeScript support with comprehensive type definitions
- Customizable colors (HSL format), sizes, and timing
- React hooks (`useLoadingAnimation`) and HOCs (`withLoadingAnimation`)
- CSS utility functions for custom implementations

## Type System

All color values use HSL format strings (e.g., '200 85% 65%'). Size configurations specify pixel values. The library exports comprehensive TypeScript interfaces for all component props and configuration options.