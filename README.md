# DENTORA — Premium Dental Studio

A responsive Next.js demonstration site for a premium dental studio. Clinic identity and contact information are editable in `src/data/clinic.ts`. Dentist profiles, clinic imagery, legal copy and sample content are deliberately marked as placeholders or illustrative material; replace them with verified clinic content before launch.

## Requirements

- Node.js 22+
- npm

## Local development

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site can be explored without email credentials. To deliver contact and appointment enquiries, configure these values in `.env.local`:

```env
RESEND_API_KEY=re_your_key
APPOINTMENTS_TO_EMAIL=hello@your-clinic.example
APPOINTMENTS_FROM_EMAIL=Dentora Website <appointments@your-domain.example>
```

The sender domain must be verified with Resend. Without these values, API submissions return an explicit configuration error rather than appearing to succeed. Form submissions are enquiries only; appointments are not confirmed automatically.

## Validation and production

```powershell
npm run typecheck
npm run lint
npm run build
npm run start
```

## Docker

Copy `.env.example` to `.env`, add the email settings if forms should send mail, then:

```powershell
docker compose up --build
```

No cloud credentials are required for local development. The included GitHub Actions workflow runs type checking, lint and the production build on pushes to `main` and pull requests.

## Before launch

1. Replace the demonstration address, email, phone and WhatsApp number in `src/data/clinic.ts`.
2. Replace dentist names, qualifications and experience with verified profiles.
3. Use clinic-owned, licensed photography in place of illustrative image URLs.
4. Update the map location, site URL, metadata, structured data and sitemap domain.
5. Have the privacy policy, terms, consent and form retention practices reviewed for the clinic’s jurisdiction.
6. Configure Resend and verify its sender domain. Consider using a shared rate-limit store when deploying multiple application instances.

The hero tooth is generated procedurally with Three.js and React Three Fiber. The canvas is dynamically loaded with a fallback image; interactions observe the pointer, and motion respects the reduced-motion preference.
