# Portfolio Website - Job Application Site

## Complete Application Overview

A single-page portfolio website for job applications, featuring personal branding, project showcase, work history, and automated chat with LINE integration. **Fully bilingual (English/Japanese)**.

**Hosting**: Vercel (Free tier)
**Domain**: yourname.app (custom .app domain)
**Framework**: Next.js 16+ (App Router)

---

## Table of Contents

1. [Project Summary](#1-project-summary)
2. [Tech Stack](#2-tech-stack)
3. [Architecture Overview](#3-architecture-overview)
4. [Application Structure](#4-application-structure)
5. [Features & Sections](#5-features--sections)
6. [Internationalization (i18n)](#6-internationalization-i18n)
7. [Data Structure](#7-data-structure)
8. [Components Breakdown](#8-components-breakdown)
9. [Chat System & LINE Integration](#9-chat-system--line-integration)
10. [Deployment](#10-deployment)
11. [Development Phases](#11-development-phases)

---

## 1. Project Summary

### Purpose
A professional portfolio website for job applications that:
- Showcases your skills and expertise
- Displays completed projects with case studies
- Shows work history as an interactive timeline
- Provides a way to contact you via chat → LINE handoff
- **Supports both English and Japanese languages**

### Key Differences from Freelance Site

| Aspect | Freelance (Callsign Digital) | Portfolio |
|--------|------------------------------|-----------|
| Purpose | Attract clients | Get hired |
| Complexity | Full platform with CMS, portal | Single page |
| Backend | Django + PostgreSQL | None (static/edge) |
| Hosting | Self-hosted | Vercel (free) |
| Content | Dynamic (CMS) | Static (code/MDX) |
| Auth | Customer + Admin | None |
| Languages | Single language | Bilingual (EN/JP) |

### Target Audience
- Hiring managers
- Recruiters
- Technical leads reviewing candidates
- Both English and Japanese speaking companies in Japan

---

## 2. Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 (App Router) | React framework with SSG |
| React | 19.2.3 | UI library with new features |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling (CSS-based config) |
| Framer Motion | Latest | Animations |
| Lucide React | Latest | Icons |
| next-intl | Latest | Internationalization (i18n) |

### Development Tools
| Technology | Purpose |
|------------|---------|
| ESLint | Linting (v9 flat config) |
| Prettier | Code formatting |
| Husky | Pre-commit hooks |

### Infrastructure
| Technology | Purpose |
|------------|---------|
| Vercel | Hosting (free tier) |
| Vercel Analytics | Basic analytics (free) |
| GitHub | Repository |

### External Services
| Service | Purpose |
|---------|---------|
| LINE Messaging API | Chat handoff |

---

## 3. Architecture Overview

### Simple Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         INTERNET                                │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      VERCEL (Free Tier)                         │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Edge Network (Global CDN)                               │   │
│  │  Automatic HTTPS                                         │   │
│  │  Automatic Deployments (GitHub integration)              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Next.js 16 Application (Static/Edge)                    │   │
│  │                                                          │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │   │
│  │  │   Static    │  │    Edge     │  │   Assets    │      │   │
│  │  │   Pages     │  │  Functions  │  │   (CDN)     │      │   │
│  │  │             │  │  (chat API) │  │             │      │   │
│  │  │  /en (home) │  │             │  │  - Images   │      │   │
│  │  │  /ja (home) │  │  /api/chat  │  │  - Resume   │      │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘      │   │
│  │                                                          │   │
│  │  ┌─────────────────────────────────────────────────┐    │   │
│  │  │  i18n Middleware (next-intl)                     │    │   │
│  │  │  - Locale detection                              │    │   │
│  │  │  - Route rewriting (/en, /ja)                    │    │   │
│  │  └─────────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                                │
                                │ LINE Webhook
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    LINE Messaging API                           │
│  - Receive chat handoff notifications                           │
│  - Continue conversation on LINE                                │
└─────────────────────────────────────────────────────────────────┘
```

### Page Structure

```
Single Page Application (Smooth Scroll) - Localized Routes
┌─────────────────────────────────────────────────────────────────┐
│  HEADER (Fixed)                                                 │
│  Logo    Hero | About | Skills | Projects | History | Contact   │
│  [EN/JP Toggle]                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  HERO SECTION (#hero)                                    │   │
│  │  - Name, Title, Tagline (localized)                      │   │
│  │  - Profile photo                                         │   │
│  │  - CTA buttons (View Work, Download Resume)              │   │
│  │  - Social links                                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  ABOUT SECTION (#about)                                  │   │
│  │  - Brief introduction (localized)                        │   │
│  │  - What I do                                             │   │
│  │  - What I'm looking for                                  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  EXPERTISE SECTION (#expertise)                          │   │
│  │  - Skills by category                                    │   │
│  │  - Tech stack visualization                              │   │
│  │  - Proficiency levels                                    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  PROJECTS SECTION (#projects)                            │   │
│  │  - Featured projects grid                                │   │
│  │  - Project cards with hover effects                      │   │
│  │  - Links to live/GitHub                                  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  WORK HISTORY SECTION (#history)                         │   │
│  │  - Timeline visualization                                │   │
│  │  - Job cards with company, role, duration                │   │
│  │  - Key achievements (localized)                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  CONTACT SECTION (#contact)                              │   │
│  │  - CTA message (localized)                               │   │
│  │  - Chat button                                           │   │
│  │  - LINE button                                           │   │
│  │  - Email link                                            │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                         │
│  Copyright | Social Links                                       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────┐
│  CHAT WIDGET    │  (Fixed, bottom-right)
│  (React state)  │  (Bilingual responses)
└─────────────────┘
```

---

## 4. Application Structure

### Directory Structure (Next.js 16 + i18n)

```
portfolio/
├── src/
│   ├── app/
│   │   ├── [locale]/                   # Dynamic locale segment
│   │   │   ├── layout.tsx              # Locale-aware layout
│   │   │   ├── page.tsx                # Single page (home)
│   │   │   └── not-found.tsx           # 404 page
│   │   │
│   │   ├── api/
│   │   │   ├── chat/
│   │   │   │   └── route.ts            # Chat API endpoint
│   │   │   └── line/
│   │   │       └── webhook/
│   │   │           └── route.ts        # LINE webhook
│   │   │
│   │   ├── globals.css                 # Global styles + Tailwind v4
│   │   └── layout.tsx                  # Root layout (minimal)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── LocaleSwitcher.tsx      # Language toggle
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Expertise.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── WorkHistory.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   ├── chat/
│   │   │   ├── ChatWidget.tsx
│   │   │   ├── ChatBubble.tsx
│   │   │   ├── ChatMessage.tsx
│   │   │   └── QuickReplies.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── Timeline.tsx
│   │       ├── SkillBar.tsx
│   │       └── ThemeToggle.tsx
│   │
│   ├── i18n/
│   │   ├── request.ts                  # next-intl request config
│   │   └── routing.ts                  # Locale routing config
│   │
│   ├── messages/
│   │   ├── en.json                     # English translations
│   │   └── ja.json                     # Japanese translations
│   │
│   ├── data/
│   │   ├── profile.ts                  # Personal info (localized)
│   │   ├── skills.ts                   # Skills data
│   │   ├── projects.ts                 # Projects data (localized)
│   │   ├── experience.ts               # Work history (localized)
│   │   └── chat-responses.ts           # Bot responses (localized)
│   │
│   ├── lib/
│   │   ├── line.ts                     # LINE client
│   │   └── utils.ts                    # Utilities (cn helper, etc.)
│   │
│   ├── hooks/
│   │   ├── useChat.ts
│   │   └── useScrollSpy.ts             # Active section detection
│   │
│   └── types/
│       └── index.ts
│
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── projects/
│   │   └── companies/
│   ├── resume-en.pdf                   # English resume
│   ├── resume-ja.pdf                   # Japanese resume
│   └── favicon.ico
│
├── .env.local
├── .env.example
├── eslint.config.mjs                   # ESLint v9 flat config
├── .prettierrc
├── middleware.ts                       # next-intl middleware
├── next.config.ts                      # Next.js 16 config (TypeScript)
├── postcss.config.mjs                  # PostCSS for Tailwind v4
├── tsconfig.json
├── package.json
└── README.md
```

---

## 5. Features & Sections

### 5.1 Header (Fixed Navigation)

| Feature | Description |
|---------|-------------|
| Logo/Name | Your name or personal logo |
| Navigation | Smooth scroll to sections |
| Active indicator | Highlight current section |
| Theme toggle | Dark/Light mode |
| **Language toggle** | EN/JP switcher |
| Mobile menu | Hamburger menu for mobile |

### 5.2 Hero Section

| Feature | Description |
|---------|-------------|
| Name | Your full name (localized) |
| Title | "Full-Stack Developer" (localized) |
| Tagline | Brief impactful statement (localized) |
| Profile photo | Professional photo |
| CTA buttons | "View My Work", "Download Resume" |
| Social links | GitHub, LinkedIn, etc. |
| Scroll indicator | Arrow pointing down |

### 5.3 About Section

| Feature | Description |
|---------|-------------|
| Introduction | 2-3 paragraphs about yourself (localized) |
| What I do | Brief overview of expertise |
| What I'm looking for | Type of role/company |
| Location | Japan (open to remote) |

### 5.4 Expertise/Skills Section

| Feature | Description |
|---------|-------------|
| Skill categories | Frontend, Backend, DevOps, etc. |
| Tech icons | Visual representation |
| Proficiency levels | Bars or percentages |
| Years of experience | Per technology (optional) |

### 5.5 Projects Section

| Feature | Description |
|---------|-------------|
| Project cards | Image, title, description (localized) |
| Tech stack badges | Technologies used |
| Links | Live demo, GitHub |
| Hover effects | Reveal more details |
| Featured flag | Highlight best projects |

### 5.6 Work History Section

| Feature | Description |
|---------|-------------|
| Timeline | Visual timeline layout |
| Job cards | Company, role, duration |
| Company logo | Visual recognition |
| Key achievements | Bullet points (localized) |
| Tech used | Technologies at each role |

### 5.7 Contact Section

| Feature | Description |
|---------|-------------|
| CTA message | Encouraging message (localized) |
| Chat button | Open chat widget |
| LINE button | Direct LINE connection |
| Email link | mailto: link |
| Resume download | PDF download (locale-specific) |

### 5.8 Chat Widget

| Feature | Description |
|---------|-------------|
| Rule-based bot | Automated responses |
| Quick replies | Pre-defined options (localized) |
| LINE handoff | Connect to LINE |
| Visitor info collection | Name, intent |
| **Bilingual support** | Responds in user's selected language |

---

## 6. Internationalization (i18n)

### Overview

The website supports **English** (default) and **Japanese** using `next-intl`.

### URL Structure

```
/           → Redirects to /en (default locale)
/en         → English version
/ja         → Japanese version
/en#about   → English about section
/ja#about   → Japanese about section
```

### Font-family usage

To change fonts later, edit these two files:
  1. app/[locale]/layout.tsx — Lines 16-28: Change the font imports and configuration
  2. app/globals.css — Line 29: Update the --font-sans CSS variable to reference your new font variables

### Configuration

#### routing.ts
```typescript
// src/i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ja'],
  defaultLocale: 'en',
});
```

#### Middleware
```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(en|ja)/:path*'],
};
```

### Translation Files

#### English (en.json)
```json
{
  "navigation": {
    "hero": "Home",
    "about": "About",
    "expertise": "Skills",
    "projects": "Projects",
    "history": "Experience",
    "contact": "Contact"
  },
  "hero": {
    "greeting": "Hi, I'm",
    "title": "Full-Stack Developer",
    "tagline": "Building web applications that solve real problems",
    "viewWork": "View My Work",
    "downloadResume": "Download Resume",
    "available": "Open to new opportunities"
  },
  "about": {
    "title": "About Me",
    "introduction": "I'm a full-stack developer with a passion...",
    "whatIDo": "What I Do",
    "lookingFor": "What I'm Looking For"
  }
}
```

#### Japanese (ja.json)
```json
{
  "navigation": {
    "hero": "ホーム",
    "about": "自己紹介",
    "expertise": "スキル",
    "projects": "プロジェクト",
    "history": "職歴",
    "contact": "お問い合わせ"
  },
  "hero": {
    "greeting": "こんにちは、",
    "title": "フルスタック開発者",
    "tagline": "実際の問題を解決するWebアプリケーションを構築",
    "viewWork": "作品を見る",
    "downloadResume": "履歴書をダウンロード",
    "available": "新しい機会を探しています"
  },
  "about": {
    "title": "自己紹介",
    "introduction": "私は情熱を持ったフルスタック開発者です...",
    "whatIDo": "できること",
    "lookingFor": "希望する仕事"
  }
}
```

### Using Translations in Components

```tsx
// src/components/sections/Hero.tsx
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="hero">
      <h1>{t('greeting')} {profile.name}</h1>
      <h2>{t('title')}</h2>
      <p>{t('tagline')}</p>
    </section>
  );
}
```

### Language Switcher Component

```tsx
// src/components/layout/LocaleSwitcher.tsx
'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'en' | 'ja') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLocale('en')}
        className={locale === 'en' ? 'font-bold' : ''}
      >
        EN
      </button>
      <span>/</span>
      <button
        onClick={() => switchLocale('ja')}
        className={locale === 'ja' ? 'font-bold' : ''}
      >
        日本語
      </button>
    </div>
  );
}
```

---

## 7. Data Structure

### Profile Data (with localization keys)

```typescript
// src/data/profile.ts

export const profile = {
  name: "Your Name",
  nameJa: "お名前", // Japanese name if different
  email: "your@email.com",
  photo: "/images/profile.jpg",
  location: "Tokyo, Japan",

  resume: {
    en: "/resume-en.pdf",
    ja: "/resume-ja.pdf",
  },

  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    line: "https://line.me/ti/p/~yourlineid",
  },

  availability: {
    status: "open", // "open" | "limited" | "unavailable"
  },
};
```

### Skills Data

```typescript
// src/data/skills.ts

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-100
  years?: number;
}

export interface SkillCategory {
  id: string;
  nameKey: string; // Translation key
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    nameKey: "skills.categories.frontend",
    skills: [
      { name: "React", icon: "react", level: 90, years: 4 },
      { name: "TypeScript", icon: "typescript", level: 85, years: 3 },
      { name: "Next.js", icon: "nextjs", level: 80, years: 2 },
      { name: "Tailwind CSS", icon: "tailwind", level: 90, years: 3 },
    ],
  },
  {
    id: "backend",
    nameKey: "skills.categories.backend",
    skills: [
      { name: "Laravel", icon: "laravel", level: 90, years: 5 },
      { name: "PHP", icon: "php", level: 90, years: 5 },
      { name: "Python", icon: "python", level: 70, years: 2 },
      { name: "Django", icon: "django", level: 60, years: 1 },
    ],
  },
  {
    id: "database",
    nameKey: "skills.categories.database",
    skills: [
      { name: "MySQL/MariaDB", icon: "mysql", level: 85, years: 5 },
      { name: "PostgreSQL", icon: "postgresql", level: 75, years: 2 },
    ],
  },
  {
    id: "devops",
    nameKey: "skills.categories.devops",
    skills: [
      { name: "Docker", icon: "docker", level: 80, years: 3 },
      { name: "Git", icon: "git", level: 90, years: 6 },
      { name: "Linux", icon: "linux", level: 75, years: 4 },
    ],
  },
];
```

### Projects Data

```typescript
// src/data/projects.ts

export interface Project {
  id: string;
  titleKey: string;        // Translation key
  descriptionKey: string;  // Translation key
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "project-1",
    titleKey: "projects.ecommerce.title",
    descriptionKey: "projects.ecommerce.description",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["Laravel", "React", "MySQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    featured: true,
    year: 2024,
  },
  // Add more projects...
];
```

### Work Experience Data

```typescript
// src/data/experience.ts

export interface Experience {
  id: string;
  company: string;
  companyLogo?: string;
  positionKey: string;     // Translation key
  location: string;
  startDate: string;
  endDate: string | "present";
  descriptionKey: string;  // Translation key
  achievementKeys: string[]; // Translation keys
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Tech Company Inc.",
    companyLogo: "/images/companies/techco.png",
    positionKey: "experience.exp1.position",
    location: "Tokyo, Japan",
    startDate: "2022-04",
    endDate: "present",
    descriptionKey: "experience.exp1.description",
    achievementKeys: [
      "experience.exp1.achievement1",
      "experience.exp1.achievement2",
      "experience.exp1.achievement3",
    ],
    technologies: ["Laravel", "React", "AWS", "Docker"],
  },
  // Add more experiences...
];
```

---

## 8. Components Breakdown

### Hero Component (Next.js 16 + i18n)

```tsx
// src/components/sections/Hero.tsx

'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { profile } from '@/data/profile';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale() as 'en' | 'ja';

  return (
    <section id="hero" className="min-h-screen flex items-center relative">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-green-500" />
              </span>
              {t('available')}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t('greeting')} {profile.name}
            </h1>
            <h2 className="text-2xl text-muted-foreground mb-4">
              {t('title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('tagline')}
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-8">
              <Link
                href="#projects"
                className="px-6 py-3 bg-primary text-white rounded-full"
              >
                {t('viewWork')}
              </Link>
              <a
                href={profile.resume[locale]}
                download
                className="px-6 py-3 border rounded-full flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t('downloadResume')}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href={profile.social.github} aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href={profile.social.linkedin} aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image
              src={profile.photo}
              alt={profile.name}
              width={320}
              height={320}
              className="rounded-full mx-auto"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
```

### Work History Timeline

```tsx
// src/components/sections/WorkHistory.tsx

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { experiences } from '@/data/experience';

export function WorkHistory() {
  const t = useTranslations();

  return (
    <section id="history" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">
          {t('navigation.history')}
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`relative flex mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary" />

              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-1/2 p-6 bg-card rounded-2xl">
                <div className="flex items-start gap-4 mb-4">
                  {exp.companyLogo && (
                    <Image
                      src={exp.companyLogo}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="rounded-lg"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold">{t(exp.positionKey)}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.startDate} - {exp.endDate === 'present' ? t('common.present') : exp.endDate}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.achievementKeys.map((key, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {t(key)}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 9. Chat System & LINE Integration

Same implementation as freelance site with simplified flow for portfolio context, now with bilingual support.

### Bot Flow for Portfolio (Bilingual)

```typescript
// src/data/chat-responses.ts

export const chatResponses = {
  en: {
    greeting: {
      message: "Hi! Thanks for visiting. What brings you here?",
      quickReplies: [
        { label: "Job opportunity", value: "job" },
        { label: "Collaboration", value: "collaboration" },
        { label: "Just browsing", value: "browsing" },
      ],
    },
    job: {
      message: "Great! I'm open to new opportunities. Want to connect on LINE?",
      quickReplies: [
        { label: "Connect on LINE", value: "line_handoff" },
        { label: "Tell me about the role", value: "more_info" },
      ],
    },
    collaboration: {
      message: "Sounds interesting! What kind of collaboration?",
      quickReplies: [
        { label: "Freelance project", value: "freelance" },
        { label: "Open source", value: "opensource" },
      ],
    },
    browsing: {
      message: "No problem! Feel free to explore. Let me know if you have questions.",
    },
  },
  ja: {
    greeting: {
      message: "こんにちは！ご訪問ありがとうございます。どのようなご用件でしょうか？",
      quickReplies: [
        { label: "採用について", value: "job" },
        { label: "協業について", value: "collaboration" },
        { label: "閲覧のみ", value: "browsing" },
      ],
    },
    job: {
      message: "ありがとうございます！新しい機会を探しています。LINEで連絡しますか？",
      quickReplies: [
        { label: "LINEで連絡", value: "line_handoff" },
        { label: "求人について教えて", value: "more_info" },
      ],
    },
    collaboration: {
      message: "面白そうですね！どのような協業をお考えですか？",
      quickReplies: [
        { label: "フリーランス案件", value: "freelance" },
        { label: "オープンソース", value: "opensource" },
      ],
    },
    browsing: {
      message: "わかりました！ご自由にご覧ください。質問があればお気軽にどうぞ。",
    },
  },
};
```

---

## 10. Deployment

### Vercel Setup

1. **Push to GitHub**
2. **Import to Vercel** (vercel.com → New Project)
3. **Add Environment Variables**:
   ```
   LINE_CHANNEL_ACCESS_TOKEN=xxx
   LINE_CHANNEL_SECRET=xxx
   ADMIN_LINE_USER_ID=xxx
   ```
4. **Configure Custom Domain** (.app domain)
5. **Deploy** (automatic on push)

### Free Tier Limits

| Resource | Limit |
|----------|-------|
| Bandwidth | 100GB/month |
| Builds | 6000 min/month |

More than enough for a portfolio site.

---

## 11. Development Phases

### Phase 1: Foundation
- [ ] Review and update Next.js 16 project structure
- [ ] Configure Tailwind CSS v4
- [ ] Setup ESLint v9 flat config + Prettier
- [ ] Configure next-intl for i18n
- [ ] Create translation files (en.json, ja.json)
- [ ] Setup middleware for locale routing
- [ ] Create base layout with locale support
- [ ] Implement theme toggle (dark/light)
- [ ] Create data files with dummy content

### Phase 2: Sections
- [ ] Hero section with i18n
- [ ] About section with i18n
- [ ] Expertise/Skills section
- [ ] Projects section with i18n
- [ ] Work History timeline with i18n
- [ ] Contact section with i18n

### Phase 3: Interactivity
- [ ] Smooth scroll navigation
- [ ] Scroll spy (active section detection)
- [ ] Framer Motion animations
- [ ] Responsive design (mobile-first)
- [ ] Mobile hamburger menu
- [ ] Language switcher component

### Phase 4: Chat & Polish
- [ ] Chat widget with bilingual support
- [ ] LINE integration setup
- [ ] SEO optimization (meta tags, OG images)
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Security headers

### Phase 5: Deployment
- [ ] Vercel deployment
- [ ] Custom domain setup (.app)
- [ ] Analytics setup
- [ ] Final testing

---

## Quick Reference

### Commands

```bash
npm run dev      # Development
npm run build    # Build
npm run lint     # Lint
git push         # Auto-deploy to Vercel
```

### Environment Variables

```bash
LINE_CHANNEL_ACCESS_TOKEN=xxx
LINE_CHANNEL_SECRET=xxx
ADMIN_LINE_USER_ID=xxx
NEXT_PUBLIC_SITE_URL=https://yourname.app
```

---

## Design Consistency

Use same design as freelance site:
- Same color palette (sky blue accent)
- Same glassmorphism effects
- Same dark/light theme
- Same chat widget design
- Additional Notes : I want this website like a Next JS offical website type. Should be modern and clean. With few animations if possible.

---

## Key Changes from Next.js 14 to 16

| Aspect | Next.js 14 | Next.js 16 |
|--------|------------|------------|
| Config file | next.config.js | next.config.ts (TypeScript) |
| React version | 18.x | 19.x |
| Tailwind CSS | v3 (JS config) | v4 (CSS-based config) |
| ESLint | v8 (.eslintrc) | v9 (flat config) |
| Turbopack | Experimental | Stable (default for dev) |

---

## Packages to Install

```bash
# Core dependencies (already installed)
# next, react, react-dom, tailwindcss

# Additional packages needed
npm install framer-motion lucide-react next-intl clsx tailwind-merge next-themes

# Development dependencies
npm install -D prettier eslint-plugin-prettier husky lint-staged
```

---

Good luck with your portfolio!
