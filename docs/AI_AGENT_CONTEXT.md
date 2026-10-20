# Portfolio technical context

Current implementation: React 18, TypeScript, Vite, vanilla CSS. Primary positioning is Applied Data Science. Alden is a final-year Statistics & Data Science undergraduate at IPB University, GPA 3.83/4.00. Do not imply a completed degree or finance specialization.

## Page and components

`App.tsx` owns location-derived rendering, metadata, the lazy case-study boundary and the site shell. `PortfolioHome` remains mounted while hidden during case studies so archive input survives in-app navigation.

Homepage order:
1. `Hero` and `CompetencyMatrix`
2. `ProjectsSection`, four `ProjectSpotlight` entries and `ProjectArchive`
3. `ExperienceSection` and `CredentialsSection`
4. `ContactSection`

`CaseStudyView` is a full-page lazy-loaded view. No project or skill modals are rendered. Image evidence opens through ordinary links. Legacy component files remain for compatibility with pre-existing work but are outside the live import tree.

## Location and state

`usePortfolioLocation` handles URL query parameters (`project`, `lang`), history and document language. `lib/url-state.ts` provides parsing and parameter-preserving updates. EN/ID UI dictionaries live in `i18n/messages.ts`. Language preference uses optional localStorage; URL language takes precedence. Untranslated sections retain English content and language markup.

Archive query/category are component state. Project records are derived from ID. Clipboard success is reported only after the write succeeds. Clipboard timers are cleaned up. Project images have readable error fallbacks. No global state library, backend, CMS, widgets or translation API is required.

## Content and build

`Projects/*/README.md` is the canonical project metadata source. `scripts/sync-projects.ts` validates metadata/assets, preserves IDs, emits `src/data/projects.ts` and copies permitted artifacts. `lib/project-source.ts` holds exact heading extraction, public editorial projection, generated-ID parsing and local-path redaction. Only top-level source READMEs are included in Git; raw project directories are excluded.

All 21 existing IDs remain, including legacy `superconductor`. That ID now uses the neutral title Elastic Net Regularization & Optimization because its source folder contains both LGD and materials notebooks. Do not rename the ID without a URL migration.

The previous 99% Box-Cox MAE claim, Gammafest 2.69-to-1.98 comparison and measured DEKA savings are withheld. Gammafest optimization/model selection is team work; Alden contributed cleaning, partial features and leadership. FinSight ownership is limited to the user's stated cleaning, ETL, clustering and dashboard contributions.

## Styles

`global.css` imports semantic tokens plus `layout.css`, `projects.css`, `credentials.css`. Old `components.css` is no longer imported. Typography: Newsreader, DM Sans, system monospace. Graphite surfaces, high-contrast text and one cyan interactive accent. No ambient glows, gradient badges, hover lifts or decorative skill icons. Optimized launch images live under `public/images/`.

## Checks

- `npm.cmd run test`: data integrity, filtering, URL state, language fallback, parser isolation, generated-ID preservation, public editorial privacy and asset existence/notebook JSON validity.
- `npm.cmd run projects:validate` and `projects:sync`: content pipeline.
- `npm.cmd run build`: strict TypeScript and production bundle.
- `node scripts/browser-check.mjs`: isolated localhost browser smoke tests and responsive screenshots. Default preview port 4317.

No deployment or public repository push is part of the current implementation. Unique server-rendered social previews, complete Indonesian long-form translation and recruiter conversion remain future validation work. Do not claim Lighthouse scores or field performance without measurement.


## Current interface refinement, 2026-10-20

This section supersedes the previous homepage presentation notes. Navbar: Alden Nabil Wibowo Effendy, with Applied Data Scientist / ML Analyst / BI Analyst / Student; monogram removed. Hero: Hi! I'm, Alden Effendy, a <=30-word overview and one intersection card.

`SkillToolkit` shows ten user-supplied self-assessments and locally hosted Python, R, PostgreSQL, Power BI and Tableau marks. `CompetencyMatrix` now renders three intersection cards with subskills and evidence links: Data Science & ML, Statistics & Risk, BI & Data Systems. Legacy five-row competency data remains only for compatibility.

`ProjectArchive` uses five category cards and a horizontal image-card rail, with no search input or select. `HorizontalRail` is shared by skills, archive, experience and credentials. The selected-work grid uses equal cards. Explicit user requirements override prior asymmetry and three-card avoidance for these specific sections.

DEKA and FinSight appear under projects only. Experience retains teaching and organizational roles outside coursework project scope. Both experience and credentials scroll horizontally. Active-state category counts and valid project IDs are covered by regression tests.

Latest Why Me revision supersedes the single hero intersection and ten-card toolkit described above: Hero now shows three plain intersection labels. WhyMe groups SkillToolkit (35 compact entries, two technical/nontechnical rows), CompetencyMatrix (15 clickable subskills with explicit project-ID mappings), and CredentialsSection. Only the ten user-supplied ratings are scored. Other skills remain unrated. SubskillProjectsDialog uses native modal semantics plus keyboard cycling, scroll locking, focus restoration and popstate dismissal. Its onClose callback must remain stable during location updates. ProfileSocials displays LinkedIn, Instagram, GitHub, email and Greater Jakarta, Indonesia. Credentials no longer render within Experience.
