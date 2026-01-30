# Portfolio Website - To-Do List

## Phase 1: Foundation

- [x] **Task #1** - Install required npm packages
  - Install: framer-motion, lucide-react, next-intl, clsx, tailwind-merge, next-themes
  - Dev: prettier, husky, lint-staged

- [x] **Task #7** - Create utility functions and types
  - lib/utils.ts (cn helper for classnames)
  - types/index.ts (TypeScript interfaces)

- [x] **Task #4** - Configure Tailwind CSS v4 and theme
  - Update globals.css with @import "tailwindcss"
  - Define CSS variables for colors (sky blue accent)
  - Setup dark/light theme variables

- [x] **Task #5** - Setup ESLint v9 + Prettier
  - Update eslint.config.mjs for flat config
  - Create .prettierrc with settings

- [x] **Task #2** - Setup next-intl internationalization
  - Create i18n/routing.ts
  - Create i18n/request.ts
  - Create middleware.ts for locale routing
  - Setup [locale] dynamic route segment

- [x] **Task #3** - Create translation files (en.json, ja.json)
  - Navigation labels
  - Hero, About, Skills, Projects, Experience, Contact sections
  - Chat widget responses
  - Common terms

- [x] **Task #6** - Create data files with dummy content
  - data/profile.ts
  - data/skills.ts
  - data/projects.ts
  - data/experience.ts
  - data/chat-responses.ts

- [x] **Task #8** - Create base layout with locale support
  - Update app/layout.tsx (root layout)
  - Create app/[locale]/layout.tsx
  - Create app/[locale]/page.tsx
  - Setup HTML lang attribute and metadata

---

## Phase 2: Components

- [x] **Task #9** - Create UI components
  - Button.tsx
  - Card.tsx
  - Badge.tsx
  - SkillBar.tsx
  - ThemeToggle.tsx

- [x] **Task #10** - Create layout components
  - Header.tsx (fixed navigation)
  - Footer.tsx
  - Navigation.tsx (smooth scroll links)
  - LocaleSwitcher.tsx (EN/JP toggle)
  - Mobile menu (integrated in Header)

---

## Phase 3: Sections

- [x] **Task #11** - Create Hero section
  - Name, title, tagline (i18n)
  - Availability badge
  - Profile photo placeholder
  - CTA buttons (View Work, Download Resume)
  - Social links, scroll indicator

- [x] **Task #12** - Create About section
  - Introduction paragraph (i18n)
  - What I do subsection
  - What I'm looking for subsection
  - Location info

- [x] **Task #13** - Create Expertise/Skills section
  - Skill categories (Frontend, Backend, Database, DevOps)
  - Skill bars with proficiency levels
  - Years of experience display

- [x] **Task #14** - Create Projects section
  - Project cards grid
  - Project images (placeholders)
  - Title and description (i18n)
  - Technology badges
  - Live demo / GitHub links
  - Hover effects

- [x] **Task #15** - Create Work History timeline
  - Timeline visualization
  - Job cards with company, role, duration
  - Key achievements (i18n)
  - Technology badges

- [x] **Task #16** - Create Contact section
  - CTA message (i18n)
  - Chat button (opens widget)
  - LINE button
  - Email link
  - Resume download (locale-specific)

---

## Phase 4: Interactivity

- [x] **Task #17** - Create useScrollSpy hook
  - Detect current section in viewport
  - Update active navigation item

- [x] **Task #18** - Implement smooth scroll navigation
  - Scroll to section on nav click
  - Offset for fixed header

- [x] **Task #22** - Add Framer Motion animations
  - Fade in on scroll (whileInView)
  - Hero entrance animations
  - Hover effects on cards

- [x] **Task #23** - Implement responsive design
  - Mobile hamburger menu
  - Responsive grid layouts
  - Touch-friendly buttons
  - Proper spacing on all breakpoints

---

## Phase 5: Chat System

- [x] **Task #19** - Create Chat widget components
  - ChatWidget.tsx (main container)
  - ChatMessage.tsx (message display)
  - QuickReplies.tsx (response buttons)
  - useChat.ts hook

- [ ] **Task #20** - Create chat API endpoint *(Optional - for server-side chat)*
  - app/api/chat/route.ts
  - Handle chat messages
  - Return bot responses
  - Support bilingual responses

- [ ] **Task #21** - Create LINE webhook endpoint *(Optional - for LINE integration)*
  - app/api/line/webhook/route.ts
  - Verify LINE signature
  - Handle incoming messages
  - lib/line.ts client

---

## Phase 6: Polish & Security

- [ ] **Task #24** - Add SEO optimization *(Optional enhancements)*
  - Open Graph images
  - Sitemap
  - robots.txt

- [x] **Task #25** - Add security headers
  - X-Frame-Options
  - X-Content-Type-Options
  - Referrer-Policy
  - Permissions-Policy

- [x] **Task #26** - Create placeholder images and assets
  - Profile photo placeholder (SVG)
  - Project image placeholders (SVG)
  - Company logo placeholders (SVG)

- [x] **Task #27** - Create .env.example file
  - LINE_CHANNEL_ACCESS_TOKEN
  - LINE_CHANNEL_SECRET
  - ADMIN_LINE_USER_ID
  - NEXT_PUBLIC_SITE_URL

---

## Phase 7: Final

- [x] **Task #28** - Test and verify build
  - npm run build (no errors)
  - npm run lint (pass)
  - Both locales work (/en and /ja)

---

## Quick Start Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # Run linter
npm run start    # Start production server
```

## Notes

- Working on `develop` branch
- Deployment target: Vercel (free tier)
- Domain: .app custom domain
- Languages: English (default), Japanese
- Framework: Next.js 16.1.6 with App Router
- Styling: Tailwind CSS v4

## Remaining Optional Tasks

1. **Chat API Endpoint** - Currently chat works client-side only. Add server endpoint if needed for logging/analytics.
2. **LINE Webhook** - Required only if you want to receive LINE messages and forward to your LINE account.
3. **SEO Enhancements** - Add sitemap.xml, robots.txt, OG images for social sharing.
4. **Real images** - Replace SVG placeholders with actual profile photo and project screenshots.
5. **Resume PDFs** - Add actual resume files in both English and Japanese.
