# 📚 DEH Student Dashboard - Complete Installation Guide

## Table of Contents
- [System Requirements](#system-requirements)
- [Prerequisites Installation](#prerequisites-installation)
- [Project Setup](#project-setup)
- [Development Environment](#development-environment)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Development Workflow](#development-workflow)
- [Build & Deployment](#build--deployment)
- [Troubleshooting](#troubleshooting)
- [Common Commands Reference](#common-commands-reference)

---

## System Requirements

### Minimum Requirements:
- **Operating System**: Windows 10/11, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **RAM**: 4GB minimum (8GB recommended)
- **Storage**: 1GB free space
- **Internet**: Stable connection for package downloads

### Software Requirements:
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)
- **Code Editor**: VS Code (recommended) or any modern text editor
- **Browser**: Chrome, Firefox, Safari, or Edge (latest versions)

---

## Prerequisites Installation

### Step 1: Install Node.js and npm

#### For Windows:
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the "LTS" version (recommended for most users)
3. Run the installer and follow the setup wizard
4. Choose "Add to PATH" during installation
5. Restart your computer after installation

#### For macOS:
**Option A: Direct Download**
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the macOS installer
3. Run the `.pkg` file and follow instructions

**Option B: Using Homebrew** (if you have Homebrew installed)
```bash
brew install node
```

#### For Linux (Ubuntu/Debian):
```bash
# Update package index
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm

# Verify installation
node --version
npm --version
```

### Step 2: Verify Installation
Open your terminal/command prompt and run:
```bash
node --version
npm --version
```

You should see version numbers like:
```
v18.17.0
9.6.7
```

### Step 3: Install a Code Editor (Recommended)

#### Visual Studio Code:
1. Visit [code.visualstudio.com](https://code.visualstudio.com/)
2. Download for your operating system
3. Install and launch VS Code

#### Recommended VS Code Extensions:
- ES7+ React/Redux/React-Native snippets
- TypeScript Importer
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- Auto Rename Tag
- Bracket Pair Colorizer

---

## Project Setup

### Step 1: Download/Clone the Project
1. Download the project files or clone from your repository
2. Extract to your desired location (e.g., `C:\Projects\` or `~/Projects/`)

### Step 2: Navigate to Project Directory
Open your terminal/command prompt and navigate to the project folder:

**Windows:**
```cmd
cd C:\path\to\deh-student-dashboard
```

**macOS/Linux:**
```bash
cd /path/to/deh-student-dashboard
```

### Step 3: Verify Project Structure
Make sure your project structure looks like this:
```
deh-student-dashboard/
├── App.tsx
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── index.html
├── main.tsx
├── components/
├── contexts/
├── styles/
└── guidelines/
```

### Step 4: Install Dependencies
Run the following command to install all required packages:
```bash
npm install
```

This process will:
- Download all dependencies listed in `package.json`
- Create a `node_modules` folder
- Update `package-lock.json` with exact versions
- Take 2-5 minutes depending on your internet speed

### Step 5: Verify Installation
Check if installation was successful:
```bash
npm list --depth=0
```

You should see a list of installed packages without any errors.

---

## Development Environment

### Environment Setup
The project uses several key technologies:

1. **React 18** - Frontend framework
2. **TypeScript** - Type safety
3. **Tailwind CSS v4** - Styling framework
4. **Vite** - Build tool and dev server
5. **ShadCN UI** - Component library

### Editor Configuration
If using VS Code, create a `.vscode/settings.json` file in your project root:
```json
{
  "typescript.preferences.includePackageJsonAutoImports": "auto",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

---

## Running the Application

### Step 1: Start Development Server
```bash
npm run dev
```

You should see output like:
```
  VITE v5.2.0  ready in 1234 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.1.100:3000/
  ➜  press h to show help
```

### Step 2: Open in Browser
1. Open your web browser
2. Navigate to `http://localhost:3000`
3. You should see the DEH Student Dashboard login screen

### Step 3: Test the Application
1. **Register a new account** or **login** with existing credentials
2. **Navigate through the dashboard** - you should see 4 course tiles
3. **Test theme toggle** - switch between light/dark modes
4. **Click on a course** - verify course details page loads
5. **Test responsiveness** - resize browser window

---

## Project Structure

### Root Files:
- `App.tsx` - Main application component
- `main.tsx` - Application entry point
- `index.html` - HTML template
- `package.json` - Project dependencies and scripts
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration

### Key Directories:

#### `/components/`
- `AuthForm.tsx` - Login/Register form
- `Dashboard.tsx` - Main dashboard with course tiles
- `CourseDetails.tsx` - Individual course pages
- `ThemeToggle.tsx` - Dark/light mode toggle
- `/ui/` - ShadCN UI components (buttons, cards, etc.)

#### `/contexts/`
- `AuthContext.tsx` - User authentication state
- `CourseContext.tsx` - Course enrollment and progress
- `ThemeContext.tsx` - Theme management (dark/light)

#### `/styles/`
- `globals.css` - Global styles and Tailwind configuration

#### `/guidelines/`
- `Guidelines.md` - Project development guidelines

---

## Available Scripts

### Development Scripts:
```bash
# Start development server (hot reload enabled)
npm run dev

# Type checking without building
npm run type-check

# Lint code for errors and style issues
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

### Production Scripts:
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Package Management:
```bash
# Install a new package
npm install package-name

# Install as development dependency
npm install --save-dev package-name

# Update all packages
npm update

# Check for outdated packages
npm outdated
```

---

## Development Workflow

### Daily Development:
1. **Start your day:**
   ```bash
   npm run dev
   ```

2. **Make changes** to components in `/components/` directory

3. **Test changes** - browser auto-refreshes with hot reload

4. **Check for errors:**
   ```bash
   npm run lint
   npm run type-check
   ```

### Adding New Features:
1. **Create new components** in `/components/` directory
2. **Update contexts** if you need global state
3. **Add new styles** to `/styles/globals.css` if needed
4. **Test thoroughly** in both light and dark themes

### Code Quality:
- Follow TypeScript best practices
- Use existing ShadCN components when possible
- Maintain responsive design principles
- Test on multiple screen sizes

---

## Build & Deployment

### Production Build:
```bash
# Create optimized production build
npm run build
```

This creates a `dist/` folder with:
- Minified JavaScript and CSS
- Optimized images and assets
- Static files ready for deployment

### Preview Production Build:
```bash
# Test production build locally
npm run preview
```

### Deployment Options:

#### Option 1: Netlify (Recommended)
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your `dist/` folder
3. Your site will be live instantly

#### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the prompts

#### Option 3: GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to GitHub Actions
4. Use GitHub Actions workflow for automatic deployment

---

## Troubleshooting

### Common Issues and Solutions:

#### Issue: "npm install" fails
**Solutions:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Use different registry
npm install --registry https://registry.npmjs.org/
```

#### Issue: "Module not found" errors
**Solutions:**
1. Check file paths and imports
2. Ensure file extensions are correct (.tsx, .ts)
3. Verify all dependencies are installed
4. Restart development server

#### Issue: Port 3000 already in use
**Solutions:**
```bash
# Use different port
npm run dev -- --port 3001

# Kill process using port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Kill process using port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

#### Issue: TypeScript errors
**Solutions:**
1. Run `npm run type-check` to see all errors
2. Check imports and exports
3. Verify type definitions
4. Restart VS Code TypeScript service

#### Issue: Styling not working
**Solutions:**
1. Verify `globals.css` is imported in `main.tsx`
2. Check Tailwind classes are correct
3. Clear browser cache
4. Check browser developer tools for CSS errors

#### Issue: Dark/Light theme not working
**Solutions:**
1. Check `ThemeContext` is properly wrapped around app
2. Verify localStorage permissions in browser
3. Check browser developer tools for JavaScript errors

### Getting Help:
1. **Check browser console** for JavaScript errors
2. **Check terminal** for build errors
3. **Verify all files** are in correct locations
4. **Test in incognito mode** to rule out browser cache issues

---

## Common Commands Reference

### Project Management:
```bash
# Clone/download project
git clone <repository-url>

# Navigate to project
cd deh-student-dashboard

# Install dependencies
npm install

# Start development
npm run dev
```

### Package Management:
```bash
# Add new dependency
npm install <package-name>

# Remove dependency
npm uninstall <package-name>

# Update dependencies
npm update

# Audit for vulnerabilities
npm audit
```

### Development:
```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Build for production
npm run build

# Preview production
npm run preview
```

### Git Commands (if using version control):
```bash
# Initialize git repository
git init

# Add files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository
git remote add origin <repository-url>

# Push to remote
git push -u origin main
```

---

## Success Checklist

After following this guide, you should be able to:

- ✅ **Start development server** with `npm run dev`
- ✅ **See the application** running at http://localhost:3000
- ✅ **Register/login** to the dashboard
- ✅ **Navigate between pages** (dashboard ↔ course details)
- ✅ **Toggle dark/light theme** with smooth transitions
- ✅ **View course content** with collapsible chapters
- ✅ **See responsive design** on different screen sizes
- ✅ **Build for production** with `npm run build`
- ✅ **No console errors** in browser developer tools

---

## Next Steps

Once you have the project running:

1. **Explore the codebase** to understand the structure
2. **Read the Guidelines.md** file for development standards
3. **Customize the courses** and content as needed
4. **Add new features** following the existing patterns
5. **Deploy to production** when ready

---

**🎉 Congratulations! Your DEH Student Dashboard is now ready for development!**

For additional support, refer to:
- [React Documentation](https://reactjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide)