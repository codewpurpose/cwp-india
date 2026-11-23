# CodeWithPurpose India

CodeWithPurpose India is the India chapter of [CodeWithPurpose](https://www.codewithpurpose.org). The production site is configured for `india.codewithpurpose.org`. Visitors can browse chapters accepting members on `/#chapters`, contact the India team to join or start one, and find events on `/workshops`.

Deploy this repository as a separate Next.js project and attach `india.codewithpurpose.org` through the hosting provider. Use the DNS record supplied by the host. Deploy and verify India before enabling its links on the global site.


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

The contact page always offers a direct email link. When configured, the optional contact form submits to [Web3Forms](https://web3forms.com). Create a `.env.local` file with:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key
```

Get a free key at web3forms.com by entering `team@codewithpurpose.org` as the receiving inbox. Submissions are viewable in the Web3Forms dashboard.

Site content (workshops, FAQs, key page text) is managed with [Sanity](https://www.sanity.io):

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-01
```

Create a free project at sanity.io/manage to get a project ID. The editing studio is embedded at `/studio`. Add the production origin to the Sanity project's permitted origins for Studio access. Without these variables the built-in pages and inquiry links still work, and the calendar shows its unavailable state.

## Launch and maintain the chapter site

- In **Chapters**, publish the chapter name and city/state. Switch on **List this chapter as accepting members** after confirming that the organisers can take introductions. The directory shares no personal contact details. Turn the switch off when a chapter pauses intake.
- In **Workshops**, publish real events with date and time, online or in-person venue information, and public registration links when available. Keep private meeting links in registration confirmations. Upcoming events appear closest first and roll into the archive when their start time passes. Visitors can ask how to attend when an event lacks a link.
- In **Site Content** and **FAQs**, review any legacy copy about how to get involved. Verify any published impact figures, chapter locations and endorsements against records before promoting the site.
- Set the Web3Forms key for `team@codewithpurpose.org` if launching the hosted contact form. Verify the join, start and host inquiry paths with test submissions after configuration. Each inquiry has a distinct subject for inbox routing. The direct email option works without the form key.
- Assign an inbox owner to acknowledge inquiries, connect students to active chapters, and follow up with organisers through their first workshop. Track inquiries, introductions, chapter launches and attendance in the team's existing private system.

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



