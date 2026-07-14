# Famora Landing Website

Famora is a marketing and onboarding website for a WhatsApp-first AI family assistant product.

The project is built with Next.js App Router, React, TypeScript, Tailwind CSS v4, shadcn/radix UI primitives, and Framer Motion.

## Project Goals

- Present the Famora product narrative and key value propositions
- Explain feature, pricing, and setup flows clearly
- Provide conversion-oriented paths to the checkout/get-started experience
- Keep the UI responsive and animation-rich across mobile and desktop

## Tech Stack

- Framework: Next.js 16 (App Router)
- Runtime UI: React 19
- Language: TypeScript
- Styling: Tailwind CSS v4 + custom CSS variables in `src/app/globals.css`
- UI primitives: shadcn UI and Radix-based components under `src/components/ui`
- Animation: Framer Motion (`MotionReveal`, `MotionStagger`)
- Icons: Lucide React and React Icons
- Linting: ESLint 9 + `eslint-config-next`

## Routes

- `/` Home
- `/features`
- `/pricing`
- `/faq`
- `/how-it-works`
- `/about`
- `/contact`
- `/get-started`

## Folder Structure

```text
src/
	app/
		layout.tsx              # Global layout with NavBar and Footer
		page.tsx                # Home page route
		<route>/page.tsx        # Feature pages (about, pricing, etc.)
		globals.css             # Theme tokens and global styles
	components/
		HomeComponents/
		FeaturesComponents/
		PricingComponents/
		FAQComponents/
		AboutComponents/
		ContactComponents/
		HowItWorksComponents/
		GetStartedComponents/
		CommonComponents/       # Shared sections and helpers
		ui/                     # shadcn/radix UI wrappers
	lib/
		utils.ts                # Shared utility helpers
```

## Development

Install dependencies:

```bash
npm install
```

Run the local dev server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Create production build:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

## Current Scope and Limitations

- The website is currently content-driven and mostly static.
- Checkout and purchase success flows are UI-only at this stage.
- Footer links such as blog and legal pages are present in navigation content but corresponding routes are not yet implemented.

## Documentation

- Architecture details: `ARCHITECTURE.md`
- Project snapshot and metadata: `METADATA.md`

## License

This repository is private and currently marked as UNLICENSED.
