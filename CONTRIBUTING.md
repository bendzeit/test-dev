# Contributing to Design System Component Library

Thank you for your interest in contributing to our design system! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git

### Development Setup

1. **Fork the repository**

   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/yourusername/design-system-component-library.git
   cd design-system-component-library
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run storybook
   ```

4. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📋 Contribution Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing code style and patterns
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Use CSS modules for styling
- Follow the design token system

### Component Development

#### File Structure

```
src/components/ComponentName/
├── ComponentName.tsx           # Main component
├── ComponentName.module.css    # Component styles
├── ComponentName.stories.tsx   # Storybook stories
└── __stories__/               # Story-specific files
    ├── helpers/               # Wrapper components
    ├── examples/              # Example components
    └── styles/                # Story-specific styles
```

#### Component Requirements

1. **Accessibility**

   - Include proper ARIA attributes
   - Support keyboard navigation
   - Ensure color contrast compliance
   - Add focus management

2. **Responsive Design**

   - Mobile-first approach
   - Use design tokens for breakpoints
   - Test on multiple screen sizes

3. **TypeScript**

   - Define proper prop types
   - Export component types
   - Use strict type checking

4. **Documentation**
   - Add comprehensive Storybook stories
   - Include usage examples
   - Document all props and variants

### Design System Guidelines

#### Using Design Tokens

```css
/* ✅ Good - Use design tokens */
.component {
  color: var(--color-primary);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
}

/* ❌ Bad - Hardcoded values */
.component {
  color: #3b82f6;
  padding: 16px;
  border-radius: 4px;
}
```

#### Component Naming

- Use PascalCase for component names
- Use descriptive, semantic names
- Follow the atomic design methodology (Atoms, Molecules, Organisms)

## 📝 Pull Request Process

### Before Submitting

1. **Run linting and tests**

   ```bash
   npm run lint
   npm run test
   npm run type-check
   ```

2. **Update documentation**

   - Update README if needed
   - Add/update Storybook stories
   - Update component documentation

3. **Test your changes**
   - Test in multiple browsers
   - Test responsive behavior
   - Test accessibility features

### Pull Request Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Tests pass locally
- [ ] Added tests for new functionality
- [ ] Tested in multiple browsers

## Screenshots

Add screenshots if applicable

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
```

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Description** - Clear description of the issue
2. **Steps to Reproduce** - Detailed steps to reproduce the bug
3. **Expected Behavior** - What should happen
4. **Actual Behavior** - What actually happens
5. **Environment** - Browser, OS, version information
6. **Screenshots** - Visual evidence if applicable

## 💡 Feature Requests

When suggesting features:

1. **Use Case** - Describe the problem you're trying to solve
2. **Proposed Solution** - How you think it should work
3. **Alternatives** - Other solutions you've considered
4. **Additional Context** - Any other relevant information

## 📚 Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Design System Best Practices](https://designsystemsrepo.com/)

## 🤝 Community

- Join our [Discord community](https://discord.gg/your-invite)
- Follow us on [Twitter](https://twitter.com/yourusername)
- Check out our [blog](https://yourblog.com)

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉
