import type { Case } from "@/data/cases";

export type Lang = "en" | "nl";

export const LINKEDIN = "https://www.linkedin.com/in/maria-molenaar/";

export const t = {
  en: {
    nav: { work: "Work", experience: "Experience", about: "About", contact: "Contact" },
    heroLabel: "UX/UI Designer",
    heroHeading: "Connecting technology with people.",
    heroText: "Creating intuitive products that make innovative technology accessible for everyone.",
    seeWork: "See the work",
    contactMe: "Contact me",
    readCase: "Read the case",
    selectedWork: "Selected work",
    dsTitle: "Design system",
    dsStatus: "in progress",
    dsText: "One shared set of components, tokens and light and dark themes for the Sphereon products.",
    experience: "Experience",
    education: "Education",
    about: "About",
    aboutText:
      "UX/UI designer with 5+ years of experience. I translate complex technology, like digital identity, into products people understand and trust. Background in communication and multimedia design.",
    downloadCv: "Download CV",
    quotes: "Kind words",
    contactHeading: "Let's talk.",
    contactText: "Send a message and I'll get back to you.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send message",
    thanks: "Thanks, message received",
    category: "Category",
    role: "Role",
    keyFigures: "Key figures",
    nextCase: "Next case",
    backHome: "All work",
    themeToggle: "Toggle theme",
    now: "now",
    metaTitle: "Maria Molenaar · UX/UI Designer",
    metaDesc: "I'm Maria Molenaar, a UX/UI designer connecting technology with people.",
  },
  nl: {
    nav: { work: "Werk", experience: "Ervaring", about: "Over", contact: "Contact" },
    heroLabel: "UX/UI Designer",
    heroHeading: "Technologie en mensen verbinden.",
    heroText: "Ik ontwerp producten die nieuwe technologie toegankelijk maken voor iedereen.",
    seeWork: "Bekijk mijn werk",
    contactMe: "Neem contact op",
    readCase: "Lees de case",
    selectedWork: "Geselecteerd werk",
    dsTitle: "Design system",
    dsStatus: "in ontwikkeling",
    dsText: "Eén gedeelde set componenten, tokens en licht- en donkerthema's voor de Sphereon-producten.",
    experience: "Ervaring",
    education: "Opleiding",
    about: "Over mij",
    aboutText:
      "UX/UI-designer met 5+ jaar ervaring. Ik vertaal complexe technologie, zoals digitale identiteit, naar producten die mensen begrijpen en vertrouwen. Achtergrond in communicatie en multimedia design.",
    downloadCv: "Download cv",
    quotes: "Wat anderen zeggen",
    contactHeading: "Laten we praten.",
    contactText: "Stuur een bericht, dan reageer ik snel.",
    name: "Naam",
    email: "E-mail",
    message: "Bericht",
    send: "Verstuur",
    thanks: "Bedankt, bericht ontvangen",
    category: "Categorie",
    role: "Rol",
    keyFigures: "Kerncijfers",
    nextCase: "Volgende case",
    backHome: "Al het werk",
    themeToggle: "Thema wisselen",
    now: "nu",
    metaTitle: "Maria Molenaar · UX/UI Designer",
    metaDesc: "Ik ben Maria Molenaar, UX/UI-designer die technologie en mensen verbindt.",
  },
} as const;

export const caseText = (c: Case, lang: Lang) => ({
  label: lang === "en" ? c.labelEn : c.labelNl,
  title: lang === "en" ? c.titleEn : c.titleNl,
  summary: lang === "en" ? c.summaryEn : c.summaryNl,
  keyFigures: lang === "en" ? c.keyFiguresEn : c.keyFiguresNl,
  body: c.body[lang],
});

export const experience = [
  { role: "UX/UI Designer", org: "Sphereon (a 4sure Technology Solutions company)", from: "Jan 2025", to: null },
  { role: "UX/UI Specialist", org: "Sphereon", from: "Jun 2021", to: "Dec 2024" },
  { role: "Digital Identity UX/UI Intern", org: "Sphereon", from: "Jan 2021", to: "Jun 2021" },
  { role: "UX/UI Design Intern", org: "Fleks Works", from: "Jan 2020", to: "Jun 2020" },
  { role: "UX Design Intern", org: "Craftworkz", from: "Feb 2018", to: "Jul 2018" },
];

export const education = [
  { role: "Communication and Multimedia Design", org: "Hogeschool van Amsterdam", from: "2016", to: "2020" },
];
