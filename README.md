# MAMAKQUANT Website

Premium public landing website for MAMAKQUANT, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run lint
npm run build
```

## Contact Email

The contact form posts to the Next.js App Router route at `src/app/api/contact/route.ts` and sends enquiries with Resend.

Required local and Vercel environment variables:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=cray@mamakquant.com
CONTACT_FROM_EMAIL=website@mamakquant.com
```

`CONTACT_FROM_EMAIL` must use a sender domain verified in Resend before production emails can be delivered.

## Deployment

The project is static-first and ready for deployment under `mamakquant.com`.

## Brand Assets

The official logo is stored at `public/mamakquant-logo.png`. Browser and social icons are generated from the same logo:

- `public/favicon.ico`
- `public/icon.png`
- `public/apple-icon.png`
- `public/og-image.png`
