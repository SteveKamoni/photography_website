**Copilot Prompt: Restructure Photography Website to Vite + React + SCSS Modules**

You are tasked with restructuring an existing photography portfolio website codebase into a modern Vite + React application with SCSS modules. Follow these instructions carefully:

## Project Setup

1. **Initialize Vite React Application**
   - Set up a new Vite + React project
   - Install all necessary dependencies:
     ```bash
     npm create vite@latest . -- --template react
     npm install
     npm install -D sass
     ```

2. **Folder Structure**
   Create the following directory structure:
   ```
   /
   ├── frontend/
   │   ├── src/
   │   │   ├── components/
   │   │   │   ├── Navbar.jsx
   │   │   │   ├── Hero.jsx
   │   │   │   ├── About.jsx
   │   │   │   ├── Services.jsx
   │   │   │   ├── Work.jsx
   │   │   │   ├── Gallery.jsx
   │   │   │   ├── Testimonials.jsx
   │   │   │   ├── Contact.jsx
   │   │   │   └── Footer.jsx
   │   │   ├── styles/
   │   │   │   ├── _variables.scss
   │   │   │   ├── Navbar.module.scss
   │   │   │   ├── Hero.module.scss
   │   │   │   ├── About.module.scss
   │   │   │   ├── Services.module.scss
   │   │   │   ├── Work.module.scss
   │   │   │   ├── Gallery.module.scss
   │   │   │   ├── Testimonials.module.scss
   │   │   │   ├── Contact.module.scss
   │   │   │   ├── Footer.module.scss
   │   │   │   └── App.module.scss
   │   │   ├── assets/
   │   │   │   └── images/
   │   │   ├── App.jsx
   │   │   └── main.jsx
   │   ├── vite.config.js
   │   └── package.json
   └── backend/
       └── (empty for now - placeholder for future backend)
   ```

## SCSS Configuration

3. **Configure Vite for SCSS Global Variables**
   Update `vite.config.js` to make global SCSS variables accessible across all module files:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     css: {
       preprocessorOptions: {
         scss: {
           additionalData: `@import "./src/styles/_variables.scss";`
         }
       }
     }
   })
   ```

4. **Create _variables.scss**
   - Analyze the existing codebase and extract ALL colors, typography, spacing, breakpoints, and any reusable styles
   - Create `frontend/src/styles/_variables.scss` with proper naming conventions
   - This file will contain ALL global styles including colors, typography, breakpoints, mixins, spacing, and any other global variables
   
   **Color Variables:** Use format `$color-[name]`
   - Example: `$color-primary`, `$color-secondary`, `$color-accent`, `$color-background`, `$color-text`, `$color-charcoal`, `$color-gold`, `$color-cream`, etc.
   
   **Typography Variables:** Use format `$font-[property]`
   - Example: `$font-primary`, `$font-secondary`, `$font-size-base`, `$font-size-heading`, `$font-weight-regular`, `$font-weight-bold`, `$line-height-base`, etc.
   
   **Breakpoints:** Use format `$breakpoint-[size]`
   - Example: `$breakpoint-mobile: 768px`, `$breakpoint-tablet: 1024px`, `$breakpoint-desktop: 1440px`, `$breakpoint-wide: 1920px`
   
   **Spacing:** Use format `$spacing-[size]`
   - Example: `$spacing-xs`, `$spacing-sm`, `$spacing-md`, `$spacing-lg`, `$spacing-xl`, `$spacing-xxl`
   
   **Mixins:** Create useful mixins in the same `_variables.scss` file for:
   - Responsive breakpoints (e.g., `@mixin respond-to($breakpoint)`)
   - Flexbox/Grid layouts (e.g., `@mixin flex-center`, `@mixin grid-layout`)
   - Typography styles (e.g., `@mixin heading-style`, `@mixin body-text`)
   - Transitions/animations (e.g., `@mixin transition-smooth`)
   - Any repeated patterns in the existing code
   
   Example mixin structure:
   ```scss
   @mixin respond-to($breakpoint) {
     @if $breakpoint == mobile {
       @media (max-width: $breakpoint-mobile) { @content; }
     }
     @else if $breakpoint == tablet {
       @media (max-width: $breakpoint-tablet) { @content; }
     }
     // ... etc
   }
   ```

## Code Conversion

5. **Convert CSS to SCSS Modules**
   - For each component (Navbar, Hero, About, Services, Work, Gallery, Testimonials, Contact, Footer):
     - Extract the relevant CSS from the existing codebase
     - Create corresponding SCSS module in `frontend/src/styles/` folder
     - Convert to SCSS module format (`.module.scss`)
     - Replace ALL hardcoded values (colors, fonts, spacing) with variables from `_variables.scss`
     - Use proper SCSS nesting where appropriate
     - Use mixins where applicable for DRY code
     - Ensure module naming follows: `[ComponentName].module.scss`
     - **CRITICAL:** All SCSS modules are in the `styles` folder, NOT with components

6. **Component Structure**
   - Create React functional components for each section in `frontend/src/components/` folder
   - Import corresponding SCSS modules from styles folder: `import styles from '../styles/ComponentName.module.scss'`
   - Use className with styles object: `className={styles.className}`
   - Maintain the single-page layout structure
   - Keep all images in the `assets/images` folder
   - Import images properly in components using relative paths

7. **App.jsx Structure**
   - Import App styles: `import styles from './styles/App.module.scss'`
   - Import all section components from `./components/`
   - Render them in order: Navbar, Hero, About, Services, Work, Gallery, Testimonials, Contact, Footer
   - Keep it clean and organized

## Quality Checks

8. **Before completing, ensure:**
   - ALL global styles (colors, typography, breakpoints, mixins, spacing) are in `_variables.scss`
   - All colors are extracted and properly named with `$color-` prefix
   - All typography is extracted and properly named with `$font-` prefix
   - Breakpoints are defined with `$breakpoint-` prefix
   - Spacing variables use `$spacing-` prefix
   - Useful mixins are created in `_variables.scss`
   - All SCSS modules are in the `styles` folder (NOT with components)
   - All components are in the `components` folder
   - No CSS overlap between modules
   - All SCSS modules use variables instead of hardcoded values
   - All SCSS modules properly utilize mixins where appropriate
   - Components properly import their styles from `../styles/[ComponentName].module.scss`
   - Vite config correctly imports `_variables.scss` globally
   - All images are in `assets/images` folder
   - The application runs without errors: `npm run dev`
   - Responsive design is maintained using breakpoint mixins
   - Code is clean, organized, and follows best practices

## Final Structure Reminder
```
frontend/src/
├── components/          (All .jsx files here)
├── styles/             (All .scss files here)
├── assets/images/      (All images here)
├── App.jsx
└── main.jsx
```

**Key Points:**
- Components folder = JavaScript only
- Styles folder = SCSS only
- All global variables, mixins, breakpoints in `_variables.scss`
- Naming: `$color-*`, `$font-*`, `$breakpoint-*`, `$spacing-*`

---
