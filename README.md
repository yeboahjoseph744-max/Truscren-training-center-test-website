# TRUSCREN TECH HUB — Next.js

Migrated from the original single-file `index.html` to **Next.js 14 + TypeScript + Tailwind**.
Your original CSS is preserved verbatim in `src/app/globals.css`. All sections are now
React components, and the interactive parts (Supabase auth, dashboard, enrolment form,
course modals, search, accordion) are wired with React hooks.

The hero now includes the animated **orange floating-paths** background.

## 1. Install

```bash
npm install
```

## 2. Add your environment variables

Copy the example file and fill in your real values:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL` — your Supabase project URL (already pre-filled)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — **your real Supabase anon key** (get it from
  Supabase → Settings → API). Do NOT commit this file; it's already gitignored.
- `NEXT_PUBLIC_ENROL_ENDPOINT` — your Google Apps Script enrolment URL (pre-filled).

## 3. Add your brand assets

Copy your real images from the old project into `public/Brand_assets/`
(see `public/Brand_assets/README.txt` for the expected filenames). The most
important one is `public/Brand_assets/extracted/truscren_badge.png`.

## 4. Run locally

```bash
npm run dev
```

Open http://localhost:3000

## 5. Deploy to Vercel

```bash
# commit and push to GitHub, then import the repo in Vercel
git init && git add . && git commit -m "Next.js migration"
```

In Vercel → Project → Settings → Environment Variables, add the same three
`NEXT_PUBLIC_*` variables. Vercel auto-detects Next.js — no extra config needed.

## Project structure

```
src/
  app/
    layout.tsx        # root layout + metadata + AppProvider
    page.tsx          # assembles all sections + modals
    globals.css       # YOUR ORIGINAL CSS (verbatim) + floating-paths styles
  components/
    Navbar.tsx        # auth state, mobile menu, search, scroll shadow
    Hero.tsx          # hero + FloatingPaths + search
    FloatingPaths.tsx # animated orange SVG background (no framer-motion)
    sections/         # all page sections (Courses, Stats, Enrol, Locations, etc.)
    modals/           # CourseModal, AuthModal, DashboardModal
  lib/
    supabase.ts       # Supabase client (reads env vars)
    app-context.tsx   # shared auth + modal state
    courses.ts        # course data + search index
    useReveal.tsx     # scroll-reveal hook (.r -> .on)
```

## Notes

- **Supabase `profiles` table**: the signup flow inserts `{ id, full_name, phone,
  course, level, progress }`. Make sure your table + RLS policies match (same as
  your original setup).
- The enrolment form uses `mode: "no-cors"` to POST to Google Apps Script, exactly
  like the original — so it won't read a response body, it just fires the request.
- `convert.py` (the migration script) is left in the project root for reference;
  you can delete it.
