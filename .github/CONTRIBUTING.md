# Contributing to Link in Bio Portfolio

Thank you for your interest in contributing to this project! We welcome contributions from everyone.

## Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm 8.0 or higher
- Git

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/linkinbio-nextjs.git
   cd linkinbio-nextjs
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## How to Contribute

### Reporting Bugs
1. Check if the bug has already been reported
2. Use the bug report template
3. Provide detailed steps to reproduce
4. Include screenshots if applicable

### Suggesting Features
1. Check if the feature has already been requested
2. Use the feature request template
3. Explain the use case and benefits
4. Provide mockups if possible

### Code Contributions

#### Branch Naming Convention
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `style/description` - UI/styling changes

#### Commit Message Format
```
type: brief description

Detailed explanation if needed

- List of changes
- Another change
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting, UI changes
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

#### Pull Request Process
1. **Create a branch** from `main`
2. **Make your changes**
3. **Test thoroughly**
4. **Update documentation** if needed
5. **Submit a pull request**
6. **Respond to feedback**

## Code Style Guidelines

### TypeScript/React
- Use TypeScript for all new code
- Follow React best practices
- Use functional components with hooks
- Add proper type annotations

### Styling
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Maintain consistent spacing and colors
- Test in both dark and light modes

### File Structure
```
app/
├── globals.css          # Global styles
├── layout.tsx           # Root layout
└── page.tsx             # Main page

components/
└── social-icons.tsx     # Reusable components

public/
└── images/              # Static assets
```

## Testing

### Before Submitting
- [ ] Test in development mode (`npm run dev`)
- [ ] Build successfully (`npm run build`)
- [ ] Test in production mode (`npm start`)
- [ ] Check responsive design
- [ ] Test dark/light mode toggle
- [ ] Verify all links work
- [ ] Check console for errors

### Cross-browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📚 Documentation

### When to Update Documentation
- Adding new features
- Changing existing functionality
- Fixing bugs that affect usage
- Adding new dependencies

### Documentation Files
- `README.md` - Main project documentation
- `CONTRIBUTING.md` - This file
- Code comments - For complex logic

## 🏷️ Labels

We use these labels to organize issues and PRs:

**Type:**
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `question` - Further information is requested
- `documentation` - Improvements or additions to docs

**Priority:**
- `priority: low` - Nice to have
- `priority: medium` - Should be addressed
- `priority: high` - Important
- `priority: critical` - Urgent

**Status:**
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `wontfix` - This will not be worked on

## Recognition

Contributors will be:
- Added to the contributors list
- Mentioned in release notes
- Given credit in the project

## Getting Help

- 💬 [GitHub Discussions](https://github.com/nayandas69/linkinbio-nextjs/discussions)
- 📧 Email: nayanchandradas@hotmail.com

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing!
