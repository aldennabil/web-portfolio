# 🚀 Deployment Guide: Deploying to Vercel (`aldennabil.vercel.app`)

This guide walks you through deploying your portfolio to **Vercel** with automatic HTTPS, global CDN edge caching, and zero configuration.

---

## 🛠️ Prerequisites
- Node.js 18+ installed on your computer.
- A free [Vercel account](https://vercel.com).
- GitHub repository created under your GitHub account (`https://github.com/aldennabil/portfolio` or similar).

---

## 📦 Step 1: Validate Production Build Locally

Before deploying, always test that the production bundle builds cleanly with zero TypeScript errors:

```bash
# In c:\Alden\Web Portofolio
npm run build
```

This generates optimized static HTML/CSS/JS bundles in the `dist/` directory.

You can preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Step 2: Deploy to Vercel (2 Simple Options)

### Option A: Automatic Git Integration (Recommended)
1. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   git branch -M main
   git remote add origin https://github.com/aldennabil/web-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your `web-portfolio` repository.
4. Keep the default settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

---

### Option B: Deploy via Vercel CLI
1. Open PowerShell and install the Vercel CLI globally (or run via npx):
   ```bash
   npx vercel
   ```
2. Follow the interactive prompts:
   - *Set up and deploy?* ➔ `Y`
   - *Which scope?* ➔ `aldennabil`
   - *Link to existing project?* ➔ `N`
   - *Project name?* ➔ `aldennabil` (or `web-portfolio`)
   - *Directory?* ➔ `./`
3. Deploy to production:
   ```bash
   npx vercel --prod
   ```

---

## 🏷️ Step 3: Configure Domain (`aldennabil.vercel.app`)

1. Open your project in the [Vercel Dashboard](https://vercel.com/dashboard).
2. Go to **Settings** ➔ **Domains**.
3. Under *Domains*, enter **`aldennabil.vercel.app`** (or add your custom domain if you own one).
4. Vercel will automatically assign SSL certificates and route edge traffic worldwide!

---

## 🔄 Automatic Continuous Deployment (CI/CD)

Whenever you edit any file (e.g. updating certificates in `src/data/certifications.ts` or adding a new project), simply push to GitHub:

```bash
git add .
git commit -m "Update portfolio credentials"
git push origin main
```

Vercel will detect the push and redeploy your live site automatically in ~20 seconds!
