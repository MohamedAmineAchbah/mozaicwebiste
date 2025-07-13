# MOZAIC Website - Local Development Setup

## 🚀 Quick Setup Guide for Windows

### Step 1: Prerequisites
Ensure you have the following installed on your Windows machine:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Choose the LTS version
   - Verify installation: `node --version` and `npm --version`

2. **Visual Studio Code**
   - Download from: https://code.visualstudio.com/
   - Install recommended extensions (see below)

3. **Git** (optional but recommended)
   - Download from: https://git-scm.com/

### Step 2: Project Setup

1. **Extract the ZIP file** to your desired location (e.g., `C:\Projects\mozaic-website`)

2. **Open VS Code** and open the project folder:
   - File → Open Folder → Select the extracted project folder

3. **Open Terminal in VS Code**:
   - Terminal → New Terminal (or Ctrl + `)

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```

6. **Open browser** and go to: `http://localhost:5173`

### Step 3: Recommended VS Code Extensions

Install these extensions for the best development experience:

1. **ES7+ React/Redux/React-Native snippets** - `dsznajder.es7-react-js-snippets`
2. **TypeScript Importer** - `pmneo.tsimporter`
3. **Tailwind CSS IntelliSense** - `bradlc.vscode-tailwindcss`
4. **Auto Rename Tag** - `formulahendry.auto-rename-tag`
5. **Bracket Pair Colorizer** - `coenraads.bracket-pair-colorizer`
6. **GitLens** - `eamodio.gitlens`
7. **Prettier** - `esbenp.prettier-vscode`
8. **ESLint** - `dbaeumer.vscode-eslint`

### Step 4: VS Code Settings

Create `.vscode/settings.json` in your project root:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

### Step 5: Troubleshooting

#### Common Issues:

1. **Port 5173 already in use**:
   ```bash
   npm run dev -- --port 3000
   ```

2. **Node modules issues**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript errors**:
   ```bash
   npm run type-check
   ```

4. **ESLint errors**:
   ```bash
   npm run lint
   ```

#### Windows-Specific Notes:

- Use **PowerShell** or **Command Prompt** for terminal commands
- If you encounter permission issues, run VS Code as Administrator
- For Git Bash users, all commands work the same

### Step 6: Development Workflow

1. **Start development server**: `npm run dev`
2. **Make changes** to files in `src/` directory
3. **Hot reload** will automatically update the browser
4. **Build for production**: `npm run build`
5. **Preview production build**: `npm run preview`

### Step 7: Project Structure Navigation

```
src/
├── components/
│   ├── sections/          # Homepage sections
│   ├── Header.tsx         # Navigation
│   └── Footer.tsx         # Footer
├── pages/
│   ├── HomePage.tsx       # Main page
│   └── ServicePage.tsx    # Service pages
├── App.tsx               # Main app
├── App.css              # Custom styles
└── main.tsx             # Entry point
```

### Step 8: Making Changes

#### To update content:
- Edit files in `src/components/sections/`
- Changes auto-reload in browser

#### To modify styles:
- Edit `src/App.css` for custom styles
- Use Tailwind classes in components

#### To add new pages:
- Create new file in `src/pages/`
- Add route in `src/App.tsx`

### Step 9: Building for Production

```bash
# Build the project
npm run build

# The built files will be in the 'dist' folder
# Upload the 'dist' folder contents to your web server
```

### Step 10: Getting Help

If you encounter issues:

1. Check the browser console (F12) for errors
2. Check the terminal for build errors
3. Ensure all dependencies are installed
4. Verify Node.js version compatibility

---

**Happy coding! 🚀**