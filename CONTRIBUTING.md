# Contributing to Nebula Loading Animation

Thank you for your interest in contributing to Nebula Loading Animation! This document provides guidelines and information for contributors.

## Development Setup

### Prerequisites

- Node.js 14.0.0 or higher
- npm or yarn package manager

### Getting Started

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/MartinGross/nebula-loading-animation.git
   cd nebula-loading-animation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Run the demo application**
   ```bash
   npm run demo
   ```

## Project Structure

```
nebula-loading-animation/
├── src/                    # Source code
│   ├── components/         # React components
│   ├── vanilla/           # Vanilla JavaScript implementation
│   ├── utils/             # Utility functions
│   ├── types/             # TypeScript type definitions
│   ├── constants/         # Constants and presets
│   └── index.ts           # Main entry point
├── demo/                  # Demo application
├── docs/                  # Documentation
├── dist/                  # Built output
└── examples/              # Usage examples
```

## Development Workflow

### Available Scripts

- `npm run build` - Build the library
- `npm run dev` - Build in watch mode
- `npm run demo` - Run the demo application
- `npm run demo:build` - Build the demo for production
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the existing code style
   - Add tests for new functionality
   - Update documentation as needed

3. **Test your changes**
   ```bash
   npm run build
   npm run demo
   npm run test
   npm run lint
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push and create a pull request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Code Style Guidelines

### TypeScript

- Use TypeScript for all new code
- Provide proper type definitions
- Use interfaces for props and configuration objects
- Export types from the main index file

### React Components

- Use functional components with hooks
- Follow React best practices
- Use proper prop validation with TypeScript
- Include accessibility attributes (ARIA labels, roles)

### Naming Conventions

- Use PascalCase for component names
- Use camelCase for variables and functions
- Use UPPER_SNAKE_CASE for constants
- Use descriptive names that explain the purpose

### Code Organization

- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use constants for magic numbers and strings
- Group related functionality together

## Testing

### Writing Tests

- Write unit tests for all new functionality
- Test edge cases and error conditions
- Mock external dependencies
- Use descriptive test names

### Running Tests

```bash
npm run test          # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

## Documentation

### Code Documentation

- Use JSDoc comments for functions and classes
- Document complex logic with inline comments
- Keep README.md up to date
- Update API documentation for changes

### Examples

- Provide usage examples for new features
- Update the demo application
- Add integration examples for popular frameworks

## Pull Request Process

### Before Submitting

1. Ensure all tests pass
2. Run the linter and fix any issues
3. Update documentation
4. Test the demo application
5. Add/update examples if needed

### PR Requirements

- **Clear description**: Explain what changes you made and why
- **Issue reference**: Link to relevant issues if applicable
- **Breaking changes**: Clearly mark any breaking changes
- **Screenshots**: Include screenshots for UI changes

### Review Process

1. Automated checks must pass (CI/CD)
2. Code review by maintainers
3. Address feedback and requested changes
4. Final approval and merge

## Release Process

Releases are handled by maintainers using semantic versioning:

- **Patch** (1.0.1): Bug fixes and small improvements
- **Minor** (1.1.0): New features, non-breaking changes
- **Major** (2.0.0): Breaking changes

## Issue Reporting

### Bug Reports

When reporting bugs, please include:

- **Environment**: OS, browser, Node.js version
- **Steps to reproduce**: Detailed steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Code sample**: Minimal reproduction case

### Feature Requests

For feature requests, please provide:

- **Use case**: Why is this feature needed
- **Proposed solution**: How should it work
- **Alternatives**: Other solutions you've considered
- **Examples**: Usage examples if applicable

## Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Help others learn and grow
- Focus on constructive feedback
- Celebrate contributions from all skill levels

### Communication

- Use GitHub issues for bugs and features
- Be clear and concise in communication
- Provide context and examples
- Follow up on discussions

## Getting Help

- **Documentation**: Check the README and docs
- **Issues**: Search existing issues first
- **Examples**: Look at the demo application
- **Community**: Ask questions in GitHub discussions

Thank you for contributing to Nebula Loading Animation! 🌟