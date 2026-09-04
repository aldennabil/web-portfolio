# Technical Architecture Document

## 1. System Architecture Overview

The portfolio is built as a blazing-fast, single-page web application leveraging modern web technologies, designed to be deployed with zero backend overhead on **Vercel's Global Edge Network**.

```
[Client Browser]
      │
      ├── [Vite Dev Server / Vercel Edge CDN]
      │         │
      │         ├── [Index.html + Meta SEO Tags]
      │         ├── [React 18 Component Tree]
      │         ├── [Vanilla CSS Design System & Theme Engine]
      │         ├── [Data Layer (src/data/*.ts)]
      │         └── [Static Assets & Media (/public)]
      │
      └── [Interactive Client-Side State]
            ├── [Active Category Filter State]
            ├── [Search Query State]
            ├── [Active Modal State (Deep Dive Case Studies)]
            ├── [Dark / Light Theme State (Persisted in localStorage)]
            └── [Interactive Simulation State (MDS, Elo Simulator, KPI Widget)]
```

---

## 2. Technology Stack & Rationale

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **React 18 + TypeScript** | Component modularity, type-safe data schema, and clean state handling for interactive widgets. |
| **Build Tool** | **Vite** | Instant Hot Module Replacement (HMR) during development, ultra-small bundled output for production. |
| **Styling** | **Modern Vanilla CSS & CSS Variables** | Full control over animations, glassmorphism, responsive grid layouts, and zero runtime CSS overhead. |
| **Icons** | **Lucide Icons (`lucide-react`)** | High-aesthetic, lightweight vector icons matching modern data & tech interfaces. |
| **Interactive Visuals** | **Custom Canvas / SVG Visualizers** | Zero bulky dependencies, lightning-fast rendering of 2D MDS maps and Elo probability curves. |
| **Deployment** | **Vercel** | Edge-hosted, automated CI/CD from GitHub, custom domain support, HTTPS by default. |

---

## 3. Directory & File Structure

```
Web Portofolio/
├── docs/                               # Project Planning & Guides
│   ├── PRD.md                          # Product Requirements Document
│   ├── ARCHITECTURE.md                 # Technical Architecture (This file)
│   ├── CONTENT_GUIDE.md                # Non-Developer Content Management Guide
│   └── DEPLOYMENT_GUIDE.md             # Vercel Deployment Instructions
├── public/                             # Static public assets
│   ├── images/                         # Project screenshots, photo avatar, icons
│   │   ├── avatar.jpg                  # Optimized profile photo (Foto KTM)
│   │   ├── projects/                   # Standardized 16:9 project preview images
│   │   └── favicon.svg                 # Branded modern monogram favicon
│   └── resume.pdf                      # Downloadable ATS CV
├── src/
│   ├── assets/                         # Bundled assets & SVG graphics
│   ├── components/                     # Reusable UI Components
│   │   ├── common/                     # Buttons, Badges, Modals, Section Headers
│   │   │   ├── Modal.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Toast.tsx
│   │   ├── layout/                     # Navbar, Footer, Mobile Drawer
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/                   # Page Sections
│   │   │   ├── Hero.tsx
│   │   │   ├── ImpactMetrics.tsx
│   │   │   ├── FlagshipSpotlights.tsx
│   │   │   ├── ProjectsCatalog.tsx
│   │   │   ├── EducationHonors.tsx
│   │   │   ├── ExperienceTimeline.tsx
│   │   │   ├── CertificationsGrid.tsx
│   │   │   ├── SkillsMatrix.tsx
│   │   │   └── ContactHub.tsx
│   │   └── widgets/                    # Interactive Data Widgets
│   │       ├── MDSMapExplorer.tsx      # Bogor Coffee Wars 2D Scatter Explorer
│   │       ├── EloSimulator.tsx        # Gammafest Football Outcome Probability Simulator
│   │       └── FinSightKPIWidget.tsx   # FinSight Risk & KPI Metric Gauge
│   ├── data/                           # Data Schema & Content Storage
│   │   ├── profile.ts                  # Bio, socials, contact info, key stats
│   │   ├── projects.ts                 # Full projects list & case studies
│   │   ├── experience.ts               # Organizational leadership & roles
│   │   ├── certifications.ts           # Certifications & honors
│   │   └── skills.ts                   # Skills taxonomy & proficiency
│   ├── styles/                         # CSS Design System
│   │   ├── variables.css               # Color tokens, glass tokens, typography, radii
│   │   ├── global.css                  # Resets, typography, scrollbars
│   │   ├── glass.css                   # Glassmorphism utilities & gradients
│   │   └── components.css              # Component-specific styles
│   ├── types/                          # TypeScript Interfaces
│   │   └── index.ts                    # Project, Experience, Certification data types
│   ├── App.tsx                         # Main Application Shell
│   └── main.tsx                        # React DOM Entrypoint
├── index.html                          # HTML5 Entrypoint with Rich SEO OpenGraph Tags
├── package.json                        # Dependencies & Scripts
├── tsconfig.json                       # TypeScript Configuration
├── vite.config.ts                      # Vite Configuration
└── vercel.json                         # Vercel Routing Configuration
```

---

## 4. Key Design System Tokens

```css
:root {
  /* Dark Mode Default Theme */
  --bg-primary: #060913;
  --bg-surface: #0c1222;
  --bg-surface-elevated: #131d36;
  --bg-glass: rgba(12, 18, 34, 0.75);
  --border-glass: rgba(255, 255, 255, 0.08);
  --border-glass-glow: rgba(0, 242, 254, 0.25);
  
  /* Vibrant Accents */
  --accent-cyan: #00f2fe;
  --accent-blue: #4facfe;
  --accent-emerald: #10b981;
  --accent-violet: #8b5cf6;
  --accent-amber: #f59e0b;
  
  /* Text */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  
  /* Standard 16:9 Aspect Ratio */
  --aspect-thumbnail: 16 / 9;
}
```
