# MOZAIC Website

A modern, AI-enhanced digital studio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git (optional)

### Installation

1. **Extract the project files** to your desired directory
2. **Open terminal/command prompt** in the project directory
3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173`

## 📁 Project Structure

```
mozaic-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── sections/     # Page sections
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Site footer
│   ├── pages/            # Page components
│   │   ├── HomePage.tsx  # Main landing page
│   │   └── ServicePage.tsx # Service detail pages
│   ├── App.tsx           # Main app component
│   ├── App.css          # Custom styles and animations
│   ├── main.tsx         # App entry point
│   └── index.css        # Tailwind imports
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## 🛠️ Technology Stack

### Core Framework
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.2** - Build tool and dev server

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Custom CSS** - Advanced animations and effects
- **Lucide React 0.344.0** - Icon library

### Routing
- **React Router DOM 6.21.0** - Client-side routing

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Alternative with Yarn
yarn dev
yarn build
yarn preview
yarn lint
```

## 🎨 Features

### Design System
- **Responsive Design** - Mobile-first approach
- **Dark/Light Themes** - Consistent color schemes
- **Advanced Animations** - CSS-based smooth transitions
- **Glass Morphism** - Modern UI effects
- **Gradient Text** - Animated gradient effects

### Interactive Components
- **Multi-Axis Grid** - Interactive service matrix
- **Service Cards** - Hover effects and animations
- **Team Profiles** - Enhanced member cards
- **Case Studies** - Result-focused presentations
- **Testimonials** - Social proof sections

### Performance
- **Optimized Images** - Pexels integration
- **Lazy Loading** - Improved performance
- **CSS Animations** - Hardware-accelerated
- **Code Splitting** - Automatic by Vite

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration Files

### Vite Configuration (`vite.config.ts`)
- React plugin setup
- Lucide React optimization
- Development server configuration

### Tailwind Configuration (`tailwind.config.js`)
- Content paths for purging
- Custom theme extensions
- Responsive breakpoints

### TypeScript Configuration
- **tsconfig.json** - Main TypeScript config
- **tsconfig.app.json** - App-specific settings
- **tsconfig.node.json** - Node.js settings

### ESLint Configuration (`eslint.config.js`)
- React hooks rules
- TypeScript integration
- Code quality standards

## 🎯 Key Components

### Sections
- **HeroSection** - Main landing area
- **ProblemSolutionSection** - Value proposition
- **ServicePillarsSection** - Service overview
- **MultiAxisSection** - Interactive grid
- **CaseStudySection** - Success stories
- **TeamSection** - Team profiles
- **SocialProofSection** - Testimonials
- **FinalCTASection** - Conversion focus

### Pages
- **HomePage** - Main landing page
- **ServicePage** - Dynamic service details

### Navigation
- **Header** - Responsive navigation
- **Footer** - Comprehensive site footer

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project
2. Upload `dist` folder to Netlify
3. Configure redirects for SPA routing

### Deploy to Vercel
1. Connect GitHub repository
2. Auto-deploy on push
3. Configure build settings

## 🔍 SEO Optimization

- **Meta Tags** - Proper HTML structure
- **Semantic HTML** - Accessibility compliance
- **Image Alt Tags** - Screen reader support
- **Fast Loading** - Optimized performance

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette.

### Animations
Modify `src/App.css` for custom animations and effects.

### Content
Update component files in `src/components/sections/` for content changes.

## 📞 Support

For questions or issues:
1. Check the browser console for errors
2. Ensure all dependencies are installed
3. Verify Node.js version compatibility
4. Check network connectivity for external assets

## 📄 License

This project is proprietary software for MOZAIC Digital Studio.

---

**Built with ❤️ by the MOZAIC Team**