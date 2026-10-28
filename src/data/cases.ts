// Single source of case content. Will later be replaced by data from Notion.
export type CaseStatus = "published" | "draft";

export interface Case {
  slug: string;
  order: number;
  status: CaseStatus;
  labelEn: string;
  labelNl: string;
  titleEn: string;
  titleNl: string;
  category: string;
  role: string;
  summaryEn: string;
  summaryNl: string;
  keyFigures: string[];
  cover: string;
}

export const cases: Case[] = [
  {
    slug: "sprind-eudi-wallet",
    order: 1,
    status: "published",
    labelEn: "Germany · EUDI Wallet",
    labelNl: "Duitsland · EUDI Wallet",
    titleEn: "Redesigning onboarding for the SPRIND EUDI Wallet program",
    titleNl: "Een nieuwe onboarding voor het SPRIND EUDI Wallet-programma",
    category: "Mobile Design",
    role: "UX Design, UI Design",
    summaryEn:
      "Turning Germany's ID card check into a clear, step by step wallet onboarding. One of six funded teams, selected for phase 2.",
    summaryNl:
      "Hoe de Duitse ID-check een duidelijke onboarding in stappen werd. Een van zes gefinancierde teams, door naar fase 2.",
    keyFigures: [
      "1 of 6 funded teams",
      "7 of 8 testers mixed up the two PIN codes",
      "~80% wanted to see the full journey first",
      "Selected for phase 2",
    ],
    cover: "/images/cases/sprind-eudi-wallet.jpg",
  },
  {
    slug: "sphereon-wallet",
    order: 2,
    status: "published",
    labelEn: "Mobile app",
    labelNl: "Mobiele app",
    titleEn: "Sphereon wallet",
    titleNl: "Sphereon wallet",
    category: "Mobile Design",
    role: "UX Design, UI Design",
    summaryEn:
      "A privacy first wallet for receiving, storing and sharing digital credentials. I designed the full experience, from first screen to activity feed.",
    summaryNl:
      "Een wallet waarin privacy voorop staat, om digitale bewijzen te ontvangen, bewaren en delen. Ik ontwierp de hele ervaring, van eerste scherm tot activiteitenoverzicht.",
    keyFigures: ["Onboarding live in the app", "Built on my graduation research (2021)"],
    cover: "/images/cases/sphereon-wallet.jpg",
  },
  {
    slug: "cloud-wallet",
    order: 3,
    status: "published",
    labelEn: "Web platform · SaaS",
    labelNl: "Webplatform · SaaS",
    titleEn: "Cloud wallet",
    titleNl: "Cloud wallet",
    category: "Responsive web application, SaaS platform",
    role: "UX Design, UI Design & Design System",
    summaryEn:
      "From a road salt proof of concept to a platform where organisations issue and manage credentials.",
    summaryNl:
      "Van een proof of concept voor strooizout naar een platform waarop organisaties digitale bewijzen uitgeven en beheren.",
    keyFigures: ["MVP", "Four roles: holder, issuer, relying party, administrator"],
    cover: "/images/cases/cloud-wallet.jpg",
  },
];

export function publishedCases(): Case[] {
  return cases.filter((c) => c.status === "published").sort((a, b) => a.order - b.order);
}

export function getCase(slug: string): Case | undefined {
  return publishedCases().find((c) => c.slug === slug);
}

export function nextCase(slug: string): Case {
  const list = publishedCases();
  const i = list.findIndex((c) => c.slug === slug);
  return list[(i + 1) % list.length] ?? list[0]!;
}
