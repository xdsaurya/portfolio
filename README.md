# Saurabh Bhatt — Portfolio

Personal developer portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, and Framer Motion. Content is sourced from a single data layer so the resume stays consistent across the site.

## Tech stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **UI primitives:** shadcn/ui (Base UI under the hood)
- **Animation:** Framer Motion
- **Icons:** Lucide React (+ custom inline SVGs for GitHub/LinkedIn)
- **Theme:** next-themes (dark/light, system-aware)

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts, ThemeProvider, SEO metadata
│   ├── page.tsx          # Assembles all sections
│   ├── globals.css       # Theme tokens, gradients, animation keyframes
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots rules
├── components/
│   ├── layout/           # Navbar (scroll-spy), Footer
│   ├── sections/         # Hero, About, Skills, Experience, Projects, Education, Contact
│   ├── ui/                # shadcn/ui primitives + Reveal, AnimatedBackground, SectionHeading
│   ├── icons.tsx          # Brand icons lucide-react no longer ships
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── data/
│   ├── resume.ts          # All resume content — single source of truth
│   ├── site-config.ts     # Name, tagline, contact links, resume file path
│   └── nav.ts             # Nav link definitions
└── lib/
    └── utils.ts           # cn() class-merge helper
public/
└── Saurabh-Bhatt-Resume.pdf   # Downloadable resume
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Editing content

- **Resume content** (experience, projects, skills, education, summary): `src/data/resume.ts`
- **Contact links & site name/tagline**: `src/data/site-config.ts` — update `email`, `linkedin`, `github`, and `siteUrl` here
- **Nav links**: `src/data/nav.ts`
- **Resume PDF**: replace `public/Saurabh-Bhatt-Resume.pdf` and update `resumeUrl` in `site-config.ts` if the filename changes

## Deployment (Netlify)

The repo includes a `netlify.toml` with the `@netlify/plugin-nextjs` plugin pre-configured.

1. Push the repo to GitHub/GitLab.
2. In Netlify: **Add new site → Import an existing project**, select the repo.
3. Netlify picks up `netlify.toml` automatically — no manual build settings required.
4. Deploy. After the first deploy, update `siteConfig.siteUrl` in `src/data/site-config.ts` to the live domain and redeploy so metadata/sitemap URLs are correct.
