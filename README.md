# CodeWithPurpose India

CodeWithPurpose India community


## ✨ Overview

CodeWithPurpose India is a community-focused initiative, and this repository contains the website source for the project. The app is currently built using:

- Next.js 16.3.4
- React 19.2.8
- TypeScript 5
- Tailwind CSS 4
- ESLint 9


## 🧰 Prerequisites

Make sure you have the following installed locally:

- Node.js 24 LTS
- npm
- Git

## 📦 Getting Started


```bash
npm install
npm run dev
npm run check
```
Dev server starts on: PORT 3000

```text
http://localhost:3000
```

## 🔑 Environment Variables

The contact form submits to [Web3Forms](https://web3forms.com). Create a `.env.local` file with:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key
```

Get a free key at web3forms.com by entering the inbox that should receive messages. Submissions are viewable in the Web3Forms dashboard.

Site content (workshops, FAQs, key page text) is managed with [Sanity](https://www.sanity.io):

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-01
```

Create a free project at sanity.io/manage to get a project ID. The editing studio is embedded at `/studio` — edit **Site Content**, **Workshops**, and **FAQs** there. Without these variables the site builds and runs with its built-in default content, so they are optional for local UI work.

## 🛠️ Available Scripts

```bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run start     # Run the production build locally
npm run lint      # Run ESLint checks
npm run typecheck # Run TypeScript type checks
npm run check     # Run lint, typecheck, and build before pushing
```


## ⭐ Maintainers

This project is maintained by the CodeWithPurpose India community. If you are working on a feature or bug fix, keep the codebase consistent, readable, and well-documented.



