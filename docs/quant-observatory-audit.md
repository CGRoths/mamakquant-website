# MAMAKQUANT Quant Observatory — Redesign Audit

## Approved baseline

- Branch inspected: `main`
- Baseline commit: `08f014e`
- Baseline routes: `/`, `/api/contact`, `/robots.txt`, `/sitemap.xml`
- Baseline presentation: one long corporate homepage with fixed desktop navigation and no mobile navigation drawer
- Baseline metadata: global title, description, canonical URL, Open Graph image, X card, icons, Organization JSON-LD and verified social profiles
- Baseline contact flow: client validation, server validation, Resend internal notification, Resend visitor confirmation, honeypot field and in-memory IP rate limit
- Required email environment variables: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`
- Baseline public assets: official 692 × 692 MAMAKQUANT logo, favicon, application icons and a 1200 × 630 social image

The production contact route and environment-variable contract are preserved.

## Evidence-asset inventory

The implementation brief named five product-evidence files:

- `mamakquant-logo-source.png`
- `mqnode-nvt-output.png`
- `nvt-external-benchmark-reference.png`
- `mqengine-parameter-universe.png`
- `mqengine-strategy-inspection.png`

Only the existing official `public/mamakquant-logo.png` asset was present in the
repository or supplied attachment. The redesign therefore uses the verified
logo and creates clearly labelled production evidence slots for the four missing
screenshots. It does not fabricate product evidence or imply that a generated
interface is an actual MAMAKQUANT product screen.

## Architecture plan

1. Keep Server Components as the default for text, routes, metadata and structured data.
2. Isolate the mobile navigation, interactive architecture map and 3D scene in small Client Components.
3. Use one lazy-loaded React Three Fiber canvas for the explanatory hero core.
4. Preserve a complete HTML/CSS fallback for mobile, reduced-motion and WebGL-disabled environments.
5. Centralise system ownership, status, capabilities, routes and operating sequences in `src/content/site.ts`.
6. Preserve the contact API and improve only its presentation and enquiry taxonomy.
7. Add unique metadata, canonicals, breadcrumbs and BreadcrumbList JSON-LD to every supporting page.

## Implementation checkpoints

- Checkpoint 1 — repository audit and baseline captures: complete
- Checkpoint 2 — design tokens, typography, navigation and foundational layout: complete
- Checkpoint 3 — 3D quant infrastructure core and fallback: complete
- Checkpoint 4 — system sections and evidence presentation: complete
- Checkpoint 5 — supporting routes, SEO, structured data and accessibility: complete
- Checkpoint 6 — build, browser, responsive, performance and preview validation: complete

## Validation evidence

- TypeScript: passed
- ESLint: passed
- Next.js 16.2.12 production build: passed
- Route verification: 10 public routes, sitemap and robots all returned HTTP 200
- Internal-link scan: 13 unique internal links, 0 broken
- Contact regression: client required-field state and server HTTP 400 validation path passed; no email was sent
- Browser console: 0 warnings and 0 errors in a fresh production session
- Responsive visual QA: 1920 × 1080, 1440 × 900, 1280 × 800,
  1024 × 1366, 768 × 1024, 430 × 932, 390 × 844 and 360 × 800;
  no horizontal overflow at any size
- Desktop Lighthouse: Performance 99, Accessibility 100,
  Best Practices 100, SEO 100; LCP 0.6 s, CLS 0, TBT 90 ms
- Mobile Lighthouse: Performance 98, Accessibility 100,
  Best Practices 100, SEO 100; LCP 2.4 s, CLS 0, TBT 20 ms

Lighthouse wrote complete reports, then its Windows launcher returned an EPERM
while deleting its temporary Chrome profile. The reports and scores were
successfully parsed after that cleanup-only failure.

## Dependency notes

- Added `three`, `@react-three/fiber` and `@react-three/drei` for the single
  explanatory WebGL scene.
- Pinned Three.js to 0.180.0 to avoid a deprecation warning emitted by the
  current renderer against Three.js 0.185.
- Updated Next.js and `eslint-config-next` from 16.2.6 to 16.2.12, the current
  stable 16.2 security patch.
- `npm audit --omit=dev` still reports upstream high-severity advisories in the
  current stable Next.js dependency chain through its bundled PostCSS and Sharp
  versions. There is no non-breaking stable remediation offered by npm; do not
  use the suggested downgrade to Next.js 9.

## Deliberate constraints

- No production-domain deployment
- No merge to `main`
- No fake authentication for MQDASH
- No fake live telemetry, financial performance or infrastructure statistics
- No invented product screenshots
- No production environment-variable changes

## Review deployment

- Branch: `design/quant-observatory-v1`
- Vercel target: preview
- Deployment status: Ready
- Preview URL: `https://mamakquant-website-9fdfaq46i-cray-ngs-projects.vercel.app`
- Access: protected by the project's existing Vercel Authentication setting
- Live smoke test: homepage, Technology, MQNODE, MQENGINE, Contact, robots and
  sitemap returned the expected rendered content through Vercel's authenticated
  preview request path

## Studio-quality benchmark iteration

The current Wintermute corporate homepage was reviewed as a production-quality
benchmark only. No Wintermute assets, wording, layouts, typography, colour
identity, geometry, code or motion sequences were copied into the MAMAKQUANT
implementation.

The comparison identified four material gaps in the first observatory version:

1. The hero used recognisable stock 3D primitives and a bordered visual panel.
2. Section pacing was consistently dense and read too much like an engineering
   presentation.
3. Motion effects were local to individual components rather than coordinated
   by a page-level progression.
4. The mobile hero removed too much of the primary visual identity.

The studio iteration addresses those gaps with:

- a bespoke Infrastructure Monolith assembled from chamfered structural arms,
  layered housings, internal yellow channels, data planes, directional input
  and output paths, a feedback circuit and an outer MQAI governance frame;
- a page-level narrative director that tracks the six-stage progression from
  raw reality to a governed system without scroll hijacking;
- alternating expressive, calm and evidence states;
- full-bleed hero and evidence compositions rather than repeated framed cards;
- a mobile composition that retains the monolith as a controlled background
  layer while keeping text and calls to action immediately readable; and
- reduced-motion and WebGL-disabled substitutions that preserve the same
  information hierarchy and MAMAKQUANT silhouette.

Internal review captures are stored outside the production site in the
`mamakquant-studio-review` visual-validation folder. These include the live
reference, the previous MAMAKQUANT hero, the final WebGL and fallback heroes,
the mobile hero, resolution sequence, calm editorial state and evidence state.

### Remaining benchmark gaps

- The supplied MQNODE NVT and MQENGINE interface captures are still absent, so
  the evidence states cannot yet deliver the visual authority of real product
  output. Labelled placeholders remain intentionally explicit.
- The monolith is procedurally assembled in-browser. A future production pass
  could add an art-directed, optimised GLTF asset with authored materials and
  baked detail while retaining the current semantic fallback.
- Route changes remain immediate. Bespoke route transitions were not added
  because they would not materially improve understanding and could delay
  navigation.
- Performance should be re-baselined after real evidence imagery is supplied,
  because those assets will change image weight and largest-contentful-paint
  behaviour.

### Studio-iteration validation

- Responsive review: 1920 × 1080, 1440 × 900, 1280 × 800, 1024 × 1366,
  768 × 1024, 430 × 932, 390 × 844 and 360 × 800; no horizontal overflow
- Production browser console: no warnings or errors in a fresh session
- Mobile navigation: pointer-open and Escape-close states passed
- Desktop Lighthouse: Performance 100, Accessibility 100,
  Best Practices 100, SEO 100; LCP 0.6 s, CLS 0, TBT 0 ms
- Mobile Lighthouse: Performance 97, Accessibility 100,
  Best Practices 100, SEO 100; LCP 2.6 s, CLS 0, TBT 20 ms

Both Lighthouse JSON reports were written successfully. As in the earlier
validation run, the Windows launcher then returned an EPERM while deleting its
temporary Chrome profile; this occurred after result generation and does not
invalidate the parsed reports.
