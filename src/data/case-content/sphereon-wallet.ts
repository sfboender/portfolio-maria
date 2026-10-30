import type { CaseBody } from "./types";

// Source: Maria's Notion case "Sphereon wallet".
// English: Maria's text with small language fixes. Dutch: translation, to be checked by Maria.
export const sphereonWallet: CaseBody = {
  en: [
    { t: "image", alt: "Sphereon Wallet overview" },
    { t: "h2", text: "The company" },
    {
      t: "p",
      text: "Sphereon builds solutions for digital identity and verifiable credentials. Using open standards, it helps organisations enable secure, privacy friendly and interoperable digital interactions.",
    },
    { t: "h2", text: "The challenge" },
    {
      t: "p",
      text: "Translating complex identity technology into an intuitive mobile experience that lets all kinds of users easily receive, manage and securely share their digital credentials, while keeping insight and control over who they share their data with.",
    },
    {
      t: "p",
      text: "Sphereon Wallet is a privacy-focused mobile wallet for securely storing, managing and sharing verifiable credentials (digital proof documents). Users keep full control over their data because information is stored locally on the device. The wallet supports open standards such as W3C Verifiable Credentials and Decentralized Identifiers (DIDs), so digital identities and credentials work across different ecosystems.",
    },
    {
      t: "p",
      text: "The Sphereon Wallet has been the base for many identity projects. Organisations and governments use it to explore digital identity, including a German government program for digital verification with the Ausweis. With European rules and the EUDI Wallet still developing, the focus was on experimenting, validating use cases and shaping future digital identity solutions.",
    },
    {
      t: "p",
      text: "I was responsible for designing the complete user experience and interface of the Sphereon Wallet, building on my graduation project at Sphereon. The company's main focus was on core technology, but there was a growing need for concrete user flows, such as receiving and securely storing credentials in a personal wallet.",
    },
    { t: "h3", text: "Where it started: my graduation research" },
    {
      t: "p",
      text: "In my Design Rationale (2021), I examined the role of digital passports and verifiable credentials in COVID passports. These insights were the starting point for my work on the Sphereon Wallet.",
    },
    {
      t: "link",
      text: "Read the full Design Rationale (in Dutch)",
      href: "https://mariamolenaarproductbio.notion.site/De-Digitale-paspoort-53bfd14b16ac470eb78b9a0ff559c5fd",
    },

    { t: "h2", text: "Creating the core wallet experience" },
    {
      t: "p",
      text: "A large part of my role was turning complex identity technology into experiences that felt simple and intuitive. I designed the core user journeys that form the foundation of the wallet, balancing technical requirements with usability, transparency and trust.",
    },
    { t: "h3", text: "Design challenges we had to solve" },
    {
      t: "points",
      items: [
        {
          title: "Introducing an unfamiliar concept",
          text: "Most users had never used verifiable credentials or a digital identity wallet, so their value and purpose had to be clear.",
        },
        {
          title: "Translating complex technology",
          text: "Identity ecosystems, issuing and verifying credentials, and trust frameworks had to be simplified without losing their meaning.",
        },
        {
          title: "Balancing innovation with usability",
          text: "With few existing patterns to follow, many interactions were borrowed and adapted from other product types, while staying accessible to non-technical users.",
        },
        {
          title: "Designing for adoption",
          text: "Digital identity only works if many people use it, so the experience had to feel familiar and easy from the very first interaction.",
        },
        {
          title: "Building trust and transparency",
          text: "Users must feel confident about the credentials they receive, the organisations they deal with and the data they choose to share.",
        },
      ],
    },

    { t: "h2", text: "Building trust before storage" },
    {
      t: "p",
      text: "Receiving a credential was one of the first and most important flows in the wallet. Because verifiable credentials are new to most people, the challenge was not only the technical process, but making clear what is happening, why it matters and whether it can be trusted. Without that, people may hesitate to store sensitive information, or miss the value of the wallet altogether.",
    },
    {
      t: "p",
      text: "Together with the CTO, product owner and project manager, I mapped out the issuing process in a series of workshops. Based on these sessions, I made the first wireframes. Users could get a credential by scanning a QR code and then review its contents before adding it to their wallet.",
    },
    { t: "h3", text: "Design decisions" },
    {
      t: "points",
      items: [
        {
          title: "Hide technical complexity",
          text: "The flow focuses on clear actions and plain language, without exposing users to the technology underneath.",
        },
        {
          title: "Transparency before storage",
          text: "Users can see what is in a credential before it is added to their wallet.",
        },
        {
          title: "Make trust visible",
          text: "Users need to know which organisation issued a credential and whether it can be trusted. The technical check against a trusted list became clear information and visual signals in the interface.",
        },
        {
          title: "Focus on the core experience",
          text: "The first version only supported getting credentials by scanning a QR code. Starting with one simple method let us check whether users understood the process before adding more options.",
        },
        {
          title: "Use familiar interaction patterns",
          text: "Common mobile patterns kept the experience intuitive despite the complex technology.",
        },
      ],
    },
    { t: "image", alt: "Receiving and reviewing a credential" },

    { t: "h2", text: "Giving users control over their data" },
    {
      t: "p",
      text: "Once a credential is stored, the next step is using it. Sharing brings a new challenge: users need to understand and stay in control of what they share and with whom.",
    },
    {
      t: "p",
      text: "With the product and development team, I explored how to turn these data-heavy requests into a compact, understandable experience. We made the requesting party and the requested information the two main elements of the flow, with context on why the information is needed. Before giving consent, users see exactly who is asking and which details will be shared.",
    },
    { t: "image", alt: "Sharing data with a relying party" },
    { t: "h3", text: "Exploring more user control" },
    {
      t: "p",
      text: "The current version shows requested information in a fairly static way. A next iteration explores showing information step by step: first the details that will actually be shared, with more context only when needed. That means less to take in at once.",
    },
    {
      t: "p",
      text: "The wallet can also see which credentials can answer a request. Instead of choosing one automatically, users could pick the credential they want to use and, where supported, select or deselect individual details. Combined with sharing only what is needed, this gives users more control over what they share, from which credential and with whom.",
    },
    { t: "image", alt: "Concept for choosing credentials and details to share" },

    { t: "h2", text: "Turning setup into a guided experience" },
    {
      t: "p",
      text: "The first onboarding of the Sphereon Wallet was intentionally light. The project's main focus was on the core credential flows (receiving, storing and sharing), so onboarding mainly introduced the wallet and helped users set up their device.",
    },
    {
      t: "p",
      text: "Users got a short introduction, accepted the Terms of Service, entered basic personal information, set a PIN (and optional biometrics) and checked their settings before entering the wallet. Following the principles of Self-Sovereign Identity (SSI), this information stayed on the device and was never stored on a server.",
    },
    {
      t: "p",
      text: "It worked as a starting point, but it also showed room for a more guided and trustworthy onboarding. That became the focus of the SPRIND EUDI Wallet program, where the onboarding was completely rethought together with other key wallet experiences.",
    },
    { t: "image", alt: "The first onboarding of the Sphereon Wallet" },
    {
      t: "callout",
      text: "Project highlight: for the SPRIND EUDI Wallet program, I led the redesign of the onboarding, working with an external design agency. Over several three-month phases we integrated the German Ausweis identity check into the wallet. The new onboarding is now live in the app.",
    },
    { t: "link", text: "Read the SPRIND case", href: "/work/sprind-eudi-wallet" },

    { t: "h2", text: "From activity log to activity feed" },
    {
      t: "p",
      text: "The activity feed shows everything that happens in the wallet. Receiving credentials, sharing information, failed requests and contact with organisations: every important action is saved, so users always have a clear history of their digital interactions.",
    },
    {
      t: "p",
      text: "The first version was a simple overview. Each activity showed what happened, its status and the date and time, and it was only available on a separate activity page.",
    },
    { t: "image", alt: "The first activity overview" },
    { t: "h3", text: "How the feature evolved" },
    {
      t: "points",
      items: [
        {
          title: "Redesigned activity cards",
          text: "Credential thumbnails made way for icons per type of action, so different activities are easier to tell apart. The cards also became more compact, so more fit on one screen.",
        },
        {
          title: "Richer details",
          text: "Activities now show who data was shared with, which credential was used, which details were shared and when it happened.",
        },
        {
          title: "More ways in",
          text: "Activity history can now also be opened from a single credential or contact, not only from the activity page.",
        },
        {
          title: "Detailed activity view",
          text: "Every activity can be opened for more information. For failed actions, this includes a clear explanation of what went wrong and what to do.",
        },
      ],
    },
    { t: "image", alt: "The redesigned activity feed" },

    { t: "h2", text: "Where the project stands" },
    {
      t: "p",
      text: "The main flows are built, including secure onboarding and receiving, storing and sharing credentials. Because the wallet is mostly used for demos and proofs of concept, the focus was on validating these core experiences and delivering a working app.",
    },
    { t: "h3", text: "Current focus" },
    {
      t: "points",
      items: [
        {
          title: "Notifications",
          text: "Keeping users informed about new credentials, requests for information, updates and credentials that are about to expire.",
        },
        {
          title: "Credential lifecycle",
          text: "Helping users understand and manage credentials that expire, are renewed, updated or revoked.",
        },
        {
          title: "Activity and history",
          text: "A clear overview of past interactions, such as receiving and sharing credentials.",
        },
        {
          title: "Security and sign-in",
          text: "Managing security options such as PIN codes and biometrics.",
        },
        {
          title: "Wallet recovery",
          text: "How users can safely get back into their wallet or credentials after changing or losing a device.",
        },
        {
          title: "Onboarding and existing flows",
          text: "An interactive walkthrough for new users, and improving flows based on feedback and new use cases.",
        },
      ],
    },
    { t: "image", alt: "Notifications concept" },
    {
      t: "p",
      text: "I'm also researching how to build accessibility further into the product. The wallet is used in many sectors and by very different people, so it has to work for everyone. The first steps are taken, and there is more to do.",
    },

    { t: "h2", text: "What I learned" },
    {
      t: "p",
      text: "Working on the Sphereon Wallet taught me to turn complex, constantly changing technology into an understandable and friendly experience. There were hardly any comparable products at the start, so many choices were made in close collaboration with the project manager, CTO and developers, often inspired by interaction patterns from completely different apps.",
    },
    {
      t: "p",
      text: "As the SSI ecosystem grew, the focus shifted from defining basic flows to creating a trusted, recognisable experience that helps adoption. Because digital identity is about working together across systems, fitting into the ecosystem matters as much as standing out. A widely accepted experience is worth more than a unique product.",
    },
    {
      t: "p",
      text: "With the limited resources of a growing company, I also learned to make pragmatic choices: first a working, validated flow, then refining the interface. That taught me a better balance between perfection and impact.",
    },
  ],

  nl: [
    { t: "image", alt: "Overzicht van de Sphereon Wallet" },
    { t: "h2", text: "Het bedrijf" },
    {
      t: "p",
      text: "Sphereon bouwt oplossingen voor digitale identiteit en verifieerbare digitale bewijzen. Met open standaarden helpt het organisaties om digitaal veilig, privacyvriendelijk en uitwisselbaar samen te werken.",
    },
    { t: "h2", text: "De uitdaging" },
    {
      t: "p",
      text: "Ingewikkelde identiteitstechnologie vertalen naar een begrijpelijke mobiele ervaring, waarmee allerlei gebruikers hun digitale bewijzen makkelijk kunnen ontvangen, beheren en veilig delen. En waarbij ze zicht en controle houden op met wie ze hun gegevens delen.",
    },
    {
      t: "p",
      text: "De Sphereon Wallet is een mobiele wallet waarin privacy voorop staat, om verifieerbare digitale bewijzen veilig op te slaan, te beheren en te delen. Gebruikers houden zelf de controle, omdat gegevens op hun eigen toestel staan. De wallet ondersteunt open standaarden zoals W3C Verifiable Credentials en Decentralized Identifiers (DID's), zodat digitale identiteiten en bewijzen werken in verschillende systemen.",
    },
    {
      t: "p",
      text: "De Sphereon Wallet is de basis geweest voor veel identiteitsprojecten. Organisaties en overheden gebruiken hem om digitale identiteit te verkennen, onder meer in een programma van de Duitse overheid voor digitale controle met de Ausweis. Omdat de Europese regels en de EUDI Wallet nog in ontwikkeling zijn, lag de focus op experimenteren, toepassingen toetsen en meedenken over de digitale identiteit van de toekomst.",
    },
    {
      t: "p",
      text: "Ik was verantwoordelijk voor het ontwerp van de complete gebruikerservaring en interface van de Sphereon Wallet, voortbouwend op mijn afstudeerproject bij Sphereon. Het bedrijf richtte zich vooral op de kerntechnologie, maar er was steeds meer behoefte aan concrete flows, zoals digitale bewijzen ontvangen en veilig opslaan in een persoonlijke wallet.",
    },
    { t: "h3", text: "Waar het begon: mijn afstudeeronderzoek" },
    {
      t: "p",
      text: "In mijn Design Rationale (2021) onderzocht ik de rol van digitale paspoorten en verifieerbare bewijzen bij coronapaspoorten. Die inzichten waren het startpunt voor mijn werk aan de Sphereon Wallet.",
    },
    {
      t: "link",
      text: "Lees de volledige Design Rationale",
      href: "https://mariamolenaarproductbio.notion.site/De-Digitale-paspoort-53bfd14b16ac470eb78b9a0ff559c5fd",
    },

    { t: "h2", text: "De basis van de wallet ontwerpen" },
    {
      t: "p",
      text: "Een groot deel van mijn werk was ingewikkelde identiteitstechnologie omzetten in iets wat eenvoudig en vanzelfsprekend voelt. Ik ontwierp de belangrijkste routes die de basis van de wallet vormen, met een balans tussen technische eisen, gebruiksgemak, openheid en vertrouwen.",
    },
    { t: "h3", text: "Ontwerpvraagstukken die we moesten oplossen" },
    {
      t: "points",
      items: [
        {
          title: "Een onbekend begrip introduceren",
          text: "De meeste gebruikers hadden nog nooit met digitale bewijzen of een identiteitswallet gewerkt. De waarde en het doel moesten dus duidelijk zijn.",
        },
        {
          title: "Ingewikkelde technologie vertalen",
          text: "Identiteitssystemen, het uitgeven en controleren van bewijzen en vertrouwenskaders moesten eenvoudiger worden zonder hun betekenis te verliezen.",
        },
        {
          title: "Vernieuwing en gebruiksgemak in balans",
          text: "Er waren weinig bestaande patronen. Veel interacties zijn overgenomen en aangepast uit andere soorten producten, en moesten toegankelijk blijven voor niet-technische gebruikers.",
        },
        {
          title: "Ontwerpen voor breed gebruik",
          text: "Digitale identiteit werkt pas als veel mensen het gebruiken. De ervaring moest dus vanaf het eerste moment vertrouwd en makkelijk voelen.",
        },
        {
          title: "Vertrouwen en openheid",
          text: "Gebruikers moeten zeker zijn van de bewijzen die ze ontvangen, de organisaties waarmee ze te maken hebben en de gegevens die ze delen.",
        },
      ],
    },

    { t: "h2", text: "Vertrouwen opbouwen vóór het opslaan" },
    {
      t: "p",
      text: "Een digitaal bewijs ontvangen was een van de eerste en belangrijkste flows in de wallet. Omdat dit voor de meeste mensen nieuw is, ging het niet alleen om het technische proces, maar om duidelijk maken wat er gebeurt, waarom het belangrijk is en of je het kunt vertrouwen. Zonder dat aarzelen mensen om gevoelige gegevens op te slaan, of zien ze de waarde van de wallet niet.",
    },
    {
      t: "p",
      text: "Samen met de CTO, de product owner en de projectmanager bracht ik het uitgifteproces in kaart in een reeks workshops. Op basis daarvan maakte ik de eerste wireframes. Gebruikers konden een bewijs ophalen door een QR-code te scannen en de inhoud bekijken voordat ze het aan hun wallet toevoegden.",
    },
    { t: "h3", text: "Ontwerpkeuzes" },
    {
      t: "points",
      items: [
        {
          title: "Techniek op de achtergrond",
          text: "De flow draait om duidelijke acties en gewone taal, zonder gebruikers lastig te vallen met de techniek eronder.",
        },
        {
          title: "Eerst inzicht, dan opslaan",
          text: "Gebruikers zien wat er in een bewijs staat voordat het aan hun wallet wordt toegevoegd.",
        },
        {
          title: "Vertrouwen zichtbaar maken",
          text: "Gebruikers moeten weten welke organisatie een bewijs heeft uitgegeven en of die te vertrouwen is. De technische controle tegen een lijst van vertrouwde partijen werd duidelijke informatie en visuele signalen in de interface.",
        },
        {
          title: "Focus op de kern",
          text: "De eerste versie ondersteunde alleen ophalen via een QR-code. Door met één eenvoudige manier te beginnen, konden we toetsen of gebruikers het snapten voordat we meer opties toevoegden.",
        },
        {
          title: "Bekende patronen gebruiken",
          text: "Gangbare mobiele patronen hielden de ervaring begrijpelijk, ondanks de ingewikkelde technologie.",
        },
      ],
    },
    { t: "image", alt: "Een bewijs ontvangen en bekijken" },

    { t: "h2", text: "Gebruikers controle geven over hun gegevens" },
    {
      t: "p",
      text: "Als een bewijs eenmaal is opgeslagen, wil je het ook gebruiken. Delen brengt een nieuwe uitdaging: gebruikers moeten begrijpen en zelf bepalen wat ze delen en met wie.",
    },
    {
      t: "p",
      text: "Met het product- en ontwikkelteam onderzocht ik hoe we die verzoeken vol gegevens konden omzetten in een compacte, begrijpelijke ervaring. De partij die iets vraagt en de gevraagde gegevens werden de twee hoofdonderdelen van de flow, met uitleg waarom de gegevens nodig zijn. Voordat ze toestemming geven, zien gebruikers precies wie iets vraagt en welke gegevens gedeeld worden.",
    },
    { t: "image", alt: "Gegevens delen met een organisatie" },
    { t: "h3", text: "Meer controle voor gebruikers" },
    {
      t: "p",
      text: "De huidige versie toont gevraagde gegevens nog vrij statisch. Een volgende versie toont informatie stap voor stap: eerst wat echt gedeeld wordt, en meer uitleg pas als dat nodig is. Zo hoeven gebruikers minder tegelijk te verwerken.",
    },
    {
      t: "p",
      text: "De wallet kan ook zien welke bewijzen een verzoek kunnen beantwoorden. In plaats van er automatisch één te kiezen, kunnen gebruikers zelf kiezen welk bewijs ze gebruiken en, waar dat kan, losse gegevens aan- of uitvinken. Samen met alleen delen wat nodig is, geeft dat gebruikers meer controle over wat ze delen, uit welk bewijs en met wie.",
    },
    { t: "image", alt: "Concept om bewijzen en gegevens te kiezen bij het delen" },

    { t: "h2", text: "Van instellen naar een begeleide ervaring" },
    {
      t: "p",
      text: "De eerste onboarding van de Sphereon Wallet was bewust licht. De focus lag op de kernflows (ontvangen, opslaan en delen), dus de onboarding stelde vooral de wallet voor en hielp gebruikers hun toestel in te stellen.",
    },
    {
      t: "p",
      text: "Gebruikers kregen een korte introductie, gingen akkoord met de voorwaarden, vulden wat persoonlijke gegevens in, stelden een pincode (en eventueel biometrie) in en controleerden hun instellingen. Volgens de principes van Self-Sovereign Identity (SSI) bleven die gegevens op het toestel en werden ze nooit op een server opgeslagen.",
    },
    {
      t: "p",
      text: "Als begin werkte dat, maar het liet ook zien dat de onboarding beter begeleid en betrouwbaarder kon. Dat werd de focus van het SPRIND EUDI Wallet-programma, waar de onboarding samen met andere belangrijke onderdelen helemaal opnieuw is bedacht.",
    },
    { t: "image", alt: "De eerste onboarding van de Sphereon Wallet" },
    {
      t: "callout",
      text: "Uitgelicht: voor het SPRIND EUDI Wallet-programma leidde ik de nieuwe onboarding, samen met een extern ontwerpbureau. In meerdere fases van drie maanden brachten we de Duitse Ausweis-controle in de wallet. De nieuwe onboarding staat nu live in de app.",
    },
    { t: "link", text: "Lees de SPRIND-case", href: "/werk/sprind-eudi-wallet" },

    { t: "h2", text: "Van activiteitenlog naar activiteitenoverzicht" },
    {
      t: "p",
      text: "Het activiteitenoverzicht laat alles zien wat er in de wallet gebeurt. Bewijzen ontvangen, gegevens delen, mislukte verzoeken en contact met organisaties: elke belangrijke actie wordt bewaard, zodat gebruikers altijd een duidelijk overzicht hebben.",
    },
    {
      t: "p",
      text: "De eerste versie was een eenvoudig overzicht. Elke activiteit toonde wat er gebeurde, de status en de datum en tijd, en was alleen te zien op een aparte activiteitenpagina.",
    },
    { t: "image", alt: "Het eerste activiteitenoverzicht" },
    { t: "h3", text: "Hoe het verder groeide" },
    {
      t: "points",
      items: [
        {
          title: "Nieuwe activiteitenkaarten",
          text: "Afbeeldingen van bewijzen maakten plaats voor iconen per soort actie, zodat activiteiten makkelijker uit elkaar te houden zijn. De kaarten werden ook compacter, zodat er meer op één scherm passen.",
        },
        {
          title: "Meer details",
          text: "Activiteiten laten nu zien met wie gegevens gedeeld zijn, welk bewijs is gebruikt, welke gegevens gedeeld zijn en wanneer.",
        },
        {
          title: "Meer ingangen",
          text: "De geschiedenis is nu ook te openen vanuit een bewijs of een contact, niet alleen vanaf de activiteitenpagina.",
        },
        {
          title: "Detailweergave",
          text: "Elke activiteit kun je openen voor meer informatie. Bij mislukte acties staat erbij wat er misging en wat je kunt doen.",
        },
      ],
    },
    { t: "image", alt: "Het vernieuwde activiteitenoverzicht" },

    { t: "h2", text: "Waar het project nu staat" },
    {
      t: "p",
      text: "De belangrijkste flows zijn gebouwd, waaronder een veilige onboarding en bewijzen ontvangen, opslaan en delen. Omdat de wallet vooral wordt gebruikt voor demo's en proofs of concept, lag de focus op het toetsen van deze kern en op een werkende app.",
    },
    { t: "h3", text: "Waar ik nu aan werk" },
    {
      t: "points",
      items: [
        {
          title: "Meldingen",
          text: "Gebruikers op de hoogte houden van nieuwe bewijzen, verzoeken om gegevens, updates en bewijzen die bijna verlopen.",
        },
        {
          title: "Levensloop van bewijzen",
          text: "Gebruikers helpen bewijzen te begrijpen en te beheren die verlopen, vernieuwd, bijgewerkt of ingetrokken worden.",
        },
        {
          title: "Activiteit en geschiedenis",
          text: "Een duidelijk overzicht van eerdere acties, zoals bewijzen ontvangen en delen.",
        },
        {
          title: "Beveiliging en inloggen",
          text: "Beveiligingsopties beheren, zoals pincodes en biometrie.",
        },
        {
          title: "Wallet herstellen",
          text: "Hoe gebruikers veilig weer bij hun wallet of bewijzen kunnen na een nieuw of verloren toestel.",
        },
        {
          title: "Onboarding en bestaande flows",
          text: "Een interactieve rondleiding voor nieuwe gebruikers, en bestaande flows verbeteren op basis van feedback en nieuwe toepassingen.",
        },
      ],
    },
    { t: "image", alt: "Concept voor meldingen" },
    {
      t: "p",
      text: "Ik onderzoek ook hoe toegankelijkheid beter in het product kan. De wallet wordt in veel sectoren en door heel verschillende mensen gebruikt, dus hij moet voor iedereen werken. De eerste stappen zijn gezet, en er is nog meer te doen.",
    },

    { t: "h2", text: "Wat ik leerde" },
    {
      t: "p",
      text: "Door de Sphereon Wallet leerde ik ingewikkelde, steeds veranderende technologie om te zetten in een begrijpelijke en prettige ervaring. Er waren bij de start nauwelijks vergelijkbare producten, dus veel keuzes ontstonden in nauwe samenwerking met de projectmanager, de CTO en de ontwikkelaars, vaak geïnspireerd door patronen uit heel andere apps.",
    },
    {
      t: "p",
      text: "Naarmate het SSI-ecosysteem groeide, verschoof de focus van basisflows naar een betrouwbare, herkenbare ervaring die breed gebruik helpt. Digitale identiteit draait om samenwerken tussen systemen, dus goed aansluiten is net zo belangrijk als opvallen. Een breed geaccepteerde ervaring is meer waard dan een uniek product.",
    },
    {
      t: "p",
      text: "Met de beperkte middelen van een groeiend bedrijf leerde ik ook pragmatisch te kiezen: eerst een werkende, geteste flow, daarna de interface verfijnen. Zo vond ik een betere balans tussen perfectie en impact.",
    },
  ],
};
