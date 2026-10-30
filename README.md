# Portfolio Maria

Build the skeleton of a personal portfolio website for Maria Molenaar, a UX/UI designer.
This is phase 1: structure, layout, theming, languages and animation. Real images
come later, so use clearly labelled placeholders.

IMPORTANT TECH CONSTRAINTS
- The site will be self-hosted later, outside Lovable. Keep it a plain static
  React + Vite + Tailwind front end. Do NOT enable Lovable Cloud, Supabase,
  auth or any backend.
- Put all case content in one data file (src/data/cases.ts) with these fields per
  case: slug, order, status ("published" | "draft"), titleEn, titleNl, category,
  role, summaryEn, summaryNl, keyFigures (list), cover (image path).
  Only show cases with status "published". This file will later be replaced by
  data from a Notion database, so keep it as the single source.
- All UI text in two languages via simple routes /en and /nl, with a language
  switch in the menu. Default /en.
- Do not show any phone number or email address anywhere on the site. Contact
  only through the form and LinkedIn.

THEME
- Light and dark mode. Follow the visitor's system setting by default. A sun/moon
  button in the menu overrides it and is remembered.
- Dark: background #0E0F12, text #F2F2F0, muted #A3A6AE, surface #17191E,
  borders #262830, accent #A9BCFF.
- Light: background #F6F5F1, text #121212, muted #55565C, surface #FFFFFF,
  borders #E2E0D8, accent #2F4FD8.
- Font: Inter Tight (Google Fonts). Large, tight headings. Rounded corners
  (20 to 28px on cards, pill buttons). Lots of space. No gradients, no emoji.

MOTION
- Hero: a phone frame on the right that automatically cycles through the three
  cases every 3.5 seconds, with story-style progress bars under it that can be
  clicked.
- Sections and case blocks fade up gently when scrolled into view.
- Smooth page transition between home and case pages.
- Respect prefers-reduced-motion.

PAGES
1. Home, in this order:
   - Menu: Maria Molenaar | Work, Experience, About, Contact | EN/NL | theme button
   - Hero: label "UX/UI Designer", heading "Connecting technology with people.",
     text "Creating intuitive products that make innovative technology accessible
     for everyone.", buttons "See the work" and "Contact me". Phone on the right.
   - Work: the three cases as large alternating blocks (image left/right), each
     with label, title, summary and "Read the case" link.
   - Small design system block (no page yet).
   - Experience: a vertical timeline (see data below).
   - About: photo placeholder, short text, LinkedIn and "Download CV" buttons.
   - Quotes: three placeholder cards "[Quote]" / "[Name, role]".
   - Contact: heading "Let's talk.", form with Name, Email, Message and a
     "Send message" button. The form does not send anything yet; show a short
     "Thanks, message received" state on submit.
   - Footer: © 2026 Maria Molenaar · Amsterdam
2. Case page template (/en/work/[slug] and /nl/werk/[slug]):
   header with title, category and role, large cover placeholder, a bar with key
   figures, then a placeholder body area for long text with images, and a
   "Next case" link at the bottom.

WRITE IN FIRST PERSON ("I designed..."). Use this copy exactly.

[EN | NL]
Menu: Work, Experience, About, Contact | Werk, Ervaring, Over, Contact
Hero label: UX/UI Designer | UX/UI Designer
Hero heading: Connecting technology with people. | Technologie en mensen verbinden.
Hero text: Creating intuitive products that make innovative technology accessible
for everyone. | Ik ontwerp producten die nieuwe technologie toegankelijk maken
voor iedereen.
Buttons: See the work, Contact me | Bekijk mijn werk, Neem contact op

Case 1 (order 1, slug sprind-eudi-wallet)
Label: Germany · EUDI Wallet | Duitsland · EUDI Wallet
Title: Redesigning onboarding for the SPRIND EUDI Wallet program |
Een nieuwe onboarding voor het SPRIND EUDI Wallet-programma
Category: Mobile Design. Role: UX Design, UI Design
Summary: Turning Germany's ID card check into a clear, step by step wallet
onboarding. One of six funded teams, selected for phase 2. | Hoe de Duitse
ID-check een duidelijke onboarding in stappen werd. Een van zes gefinancierde
teams, door naar fase 2.
Key figures: 1 of 6 funded teams · 7 of 8 testers mixed up the two PIN codes ·
~80% wanted to see the full journey first · Selected for phase 2

Case 2 (order 2, slug sphereon-wallet)
Label: Mobile app | Mobiele app
Title: Sphereon wallet
Category: Mobile Design. Role: UX Design, UI Design
Summary: A privacy first wallet for receiving, storing and sharing digital
credentials. I designed the full experience, from first screen to activity
feed. | Een wallet waarin privacy voorop staat, om digitale bewijzen te
ontvangen, bewaren en delen. Ik ontwierp de hele ervaring, van eerste scherm
tot activiteitenoverzicht.
Key figures: Onboarding live in the app · Built on my graduation research (2021)

Case 3 (order 3, slug cloud-wallet)
Label: Web platform · SaaS | Webplatform · SaaS
Title: Cloud wallet
Category: Responsive web application, SaaS platform.
Role: UX Design, UI Design & Design System
Summary: From a road salt proof of concept to a platform where organisations
issue and manage credentials. | Van een proof of concept voor strooizout naar
een platform waarop organisaties digitale bewijzen uitgeven en beheren.
Key figures: MVP · Four roles: holder, issuer, relying party, administrator

Design system block: Design system (in progress): one shared set of components,
tokens and light and dark themes for the Sphereon products. | Design system (in
ontwikkeling): één gedeelde set componenten, tokens en licht- en donkerthema's
voor de Sphereon-producten.

Experience (newest first):
- UX/UI Designer, Sphereon (a 4sure Technology Solutions company), Jan 2025 – now
- UX/UI Specialist, Sphereon, Jun 2021 – Dec 2024
- Digital Identity UX/UI Intern, Sphereon, Jan 2021 – Jun 2021
- UX/UI Design Intern, Fleks Works, Jan 2020 – Jun 2020
- UX Design Intern, Craftworkz, Feb 2018 – Jul 2018
Education:
- Communication and Multimedia Design, Hogeschool van Amsterdam, 2016 – 2020

About: UX/UI designer with 5+ years of experience. I translate complex
technology, like digital identity, into products people understand and trust.
Background in communication and multimedia design. | UX/UI-designer met 5+
jaar ervaring. Ik vertaal complexe technologie, zoals digitale identiteit,
naar producten die mensen begrijpen en vertrouwen. Achtergrond in communicatie
en multimedia design.

Contact: Let's talk. / Send a message and I'll get back to you. |
Laten we praten. / Stuur een bericht, dan reageer ik snel.
Form: Name, Email, Message, Send message | Naam, E-mail, Bericht, Verstuur
LinkedIn: https://www.linkedin.com/in/maria-molenaar/

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a223bbb2-d74c-4859-b9de-90d9d9c2ca74).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
