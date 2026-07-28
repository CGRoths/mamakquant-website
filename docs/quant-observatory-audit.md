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
