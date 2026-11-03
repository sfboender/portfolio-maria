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
    aboutText: [
      "For me, good UX starts with curiosity. Why does someone do something a certain way? Where is the friction? And how can we make it just a little bit better? That's where my work begins.",
      "As a designer, I connect what users need, what an organisation wants to achieve and what technology makes possible. In recent years I've worked on digital products in places where innovation plays a big role. What I enjoy most is exploring new technology and turning complex material into something that feels clear to people.",
      "I like working together, asking questions and thinking along from first idea to final product. Whether a project starts with a blank page or with clear boundaries, I look for room to make something better, clearer or more pleasant.",
    ],
    downloadCv: "Download CV (Dutch)",
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
    aboutText: [
      "Goede UX begint voor mij bij nieuwsgierigheid. Waarom doet iemand iets op een bepaalde manier? Waar zit de frictie? En hoe kunnen we het nét wat beter maken? Daar begint mijn werk.",
      "Als designer sla ik de brug tussen de behoeften van gebruikers, de doelen van een organisatie en de mogelijkheden van technologie. De afgelopen jaren heb ik gewerkt aan digitale producten in omgevingen waar innovatie een grote rol speelt. Juist het ontdekken van nieuwe technologie en het vertalen van complexe materie naar iets wat voor mensen begrijpelijk voelt, vind ik interessant.",
      "Ik werk graag samen, stel vragen en denk mee van eerste idee tot eindproduct. Of een project nu begint met een leeg vel of met duidelijke kaders: ik zoek de ruimte om iets beter, duidelijker of prettiger te maken.",
    ],
    downloadCv: "Download cv",
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
  { role: "UX Designer", org: "Saxum", from: "Oct 2026", to: null },
  { role: "UX/UI Designer", org: "Sphereon (a 4sure Technology Solutions company)", from: "Jan 2025", to: "Sep 2026" },
  { role: "UX/UI Specialist", org: "Sphereon", from: "Jun 2021", to: "Dec 2024" },
  { role: "Digital Identity UX/UI Intern", org: "Sphereon", from: "Jan 2021", to: "Jun 2021" },
  { role: "UX/UI Design Intern", org: "Fleks Works", from: "Jan 2020", to: "Jun 2020" },
  { role: "UX Design Intern", org: "Craftworkz", from: "Feb 2018", to: "Jul 2018" },
];

export const education = [
  { role: "Communication and Multimedia Design (cum laude)", org: "Hogeschool van Amsterdam", from: "2016", to: "2020" },
];
