# Portfolio content maintenance

The canonical project source is `Projects/<folder>/README.md`. Raw project files remain ignored by Git; only those top-level READMEs are included. The published dataset is generated at `src/data/projects.ts`.

## Editing projects

- Preserve the project `id`: it is used by case-study URLs and competencies.
- Edit the `portfolio` frontmatter for public-facing copy. It contains localized `summary`, `status`, `contribution`, `teamContribution`, `problem`, `methodology`, `results`, `limitations`, `caption`, plus `competencyIds` and optional `spotlightOrder`.
- Localized text requires `en`; `id` is optional. Missing Indonesian sections render in English with a notice and correct language markup.
- Exactly four projects currently have spotlight order: Gammafest, DEKA, FinSight and Coffee Shop. Every project remains in the searchable archive.
- Keep individual contribution separate from team methods. Put estimates and limitations in the text. Do not promote unverified claims into summaries.
- Source evidence paths are internal metadata. The public editorial projection only retains known display fields and verified/estimated claim statements.

## Sources and artifacts

`artifacts` paths are relative to the source project folder. All declared files must exist. Notebook and dataset arrays retain every entry. `extra` accepts a label and a file path for certificates or other evidence. Public URLs must use HTTPS.

`projects:sync` copies artifacts into `public/artifacts/<id>/`, retaining nested paths. Text reports and notebooks have workstation file paths redacted in the published copy. Notebook JSON remains valid; source files are not modified. Only attach material that may be public. Never add client datasets merely to fill an empty source section.

Run:

```powershell
npm.cmd run projects:validate
npm.cmd run projects:sync
npm.cmd run test
npm.cmd run build
```

A missing artifact, duplicate ID or missing existing project fails synchronization before any generated data is overwritten. Run sync twice to check deterministic output. On Windows, the TypeScript runner may require an unrestricted local shell because it reads Windows user information.

## Skills, experience and credentials

`src/data/skills.ts` contains capability rows referencing stable project IDs. No proficiency percentages. Add tools only when a project demonstrates individual usage. Profile, experience and certificate records remain manually maintained in their existing data files.

Experiences use inline disclosures; credentials link directly to proof. Relevant collaborative work is presented as project work, not invented employment.

## Local preview and checks

```powershell
npm.cmd run dev
npm.cmd run build
npm.cmd run preview -- --host 127.0.0.1 --port 4317 --strictPort
node scripts/browser-check.mjs
```

The browser script uses an installed Chromium browser with a temporary isolated profile, tests only the localhost preview, and saves screenshots under `.superpowers/portfolio-rebuild/`. It never uses a signed-in browser session or uploads project files. Set `PORTFOLIO_TEST_URL` to change the localhost test origin.

Long-form translation and case-study evidence questions remain in Section 11 of `docs/superpowers/plans/2026-10-20-portfolio-rebuild.md`.


## Current skill cards and browsing (2026-10-20 refinement)

`src/data/skills.ts` contains three `SKILL_CATEGORIES` and 35 `RATED_SKILLS`, split into 28 technical and seven nontechnical entries. Ten ratings were supplied directly by Alden: Python 4, R 4, EDA 4, data cleaning 5, forecasting 4, ETL 4, SQL 3, PostgreSQL 3, dashboards 3, leadership 4. Other entries use `score: null` and display Unrated. Do not infer additional scores, including separate Power BI or Tableau ratings.

Tool SVGs are stored locally under `public/images/tools/`; source attribution and the bundled license are included there. The hero overview must remain at most 30 words in both languages.

The archive uses All projects, Data Science & ML, Statistics & Risk, BI & Data Systems, and Others. Primary project assignments are in `src/lib/project-filters.ts`. All projects remain accessible as horizontal cards. `HorizontalRail` provides shared button, keyboard, scroll and reduced-motion behavior.

Experience excludes DEKA/FinSight and academic project collaborations. Teaching appointments and organizational roles remain. Experience and credential proof are separate horizontal rails. Selected project cards use equal sizes at the user's request.

The Why Me section contains My toolkit, Where my skills connect, and My credentials. Toolkit entries use two compact horizontal rows. Each subskill has an explicit `projectIds` evidence list, used by the accessible related-project dialog. Keep these mappings specific to the method, rather than returning every project in its category. The dialog supports Tab cycling, Escape, backdrop dismissal, focus restoration and browser-history dismissal. Keep its close callback stable across renders.

Hero intersections are three plain labels. Profile social cards use `PROFILE_DATA`, including the supplied Instagram URL `https://instagram.com/aldennabilwe`; location is Greater Jakarta, Indonesia. Tool marks remain local assets with attribution.
