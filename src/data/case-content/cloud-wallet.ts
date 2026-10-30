import type { CaseBody } from "./types";

// Source: Maria's Notion case "Cloud wallet".
// English: Maria's text with small language fixes. Dutch: translation, to be checked by Maria.
export const cloudWallet: CaseBody = {
  en: [
    { t: "h2", text: "The project" },
    {
      t: "p",
      text: "Designing the Sphereon Cloud Wallet, a SaaS platform that lets organisations create, manage, issue and monitor digital credentials. It supports multiple business domains, so organisations can manage issuers, credential catalogues, workflows and user permissions in one place.",
    },
    { t: "h2", text: "The challenge" },
    {
      t: "p",
      text: "Turning complex credential management into an intuitive platform for organisations with different roles, permissions and business processes. It had to stay flexible for advanced users while remaining easy to understand for people who use it every day.",
    },
    {
      t: "p",
      text: "The Cloud Wallet started as an early proof of concept with Zoutlogistiek, part of the Dutch water authorities. It explored how verifiable credentials could digitise and automate the road salt supply chain, from purchasing and transport to delivery and checks.",
    },
    {
      t: "p",
      text: "The proof of concept showed that the platform could support many more industries. That led to the Cloud Wallet: a reusable SaaS platform for multiple organisations and use cases, including education, government and logistics. Instead of a solution for one customer, the challenge became a flexible product that can be set up for different organisations while keeping one consistent experience.",
    },

    { t: "h2", text: "From manual work to a digital proof of concept" },
    {
      t: "p",
      text: "Buying and transporting road salt involved several organisations, including suppliers, inspection agencies and Rijkswaterstaat. Communication ran mostly through email, and the status of assets and required documents was tracked by hand in spreadsheets.",
    },
    {
      t: "p",
      text: "As the number of parties and documents grew, the process became hard to follow. There was little insight into the status of assets, document requests, approvals and open actions, which made the work fragmented and slow.",
    },
    {
      t: "p",
      text: "Instead of designing a solution right away, we first focused on understanding the current process. With the stakeholders, we mapped the full workflow through workshops, interviews and sparring sessions every two weeks. Throughout the project we kept testing ideas and prototypes, so the solution matched the needs of the people using it.",
    },
    { t: "h3", text: "Designing digital workflows" },
    {
      t: "p",
      text: "The proof of concept brought the manual document exchange together in one workflow. Users could request documents, upload files, review submissions, approve requests and follow the progress of assets through the purchasing process.",
    },
    {
      t: "p",
      text: "Along the way we found that many manual actions could be automated. Instead of people watching emails and spreadsheets, the workflow itself could start the next step whenever a document was uploaded, approved or rejected. Users respond to the system instead of managing it all themselves.",
    },
    {
      t: "p",
      text: "Each organisation had different responsibilities, but many interactions followed the same structure. Spotting these recurring patterns helped simplify complex workflows and made the experience more consistent for everyone involved.",
    },
    { t: "image", alt: "Workflow of the road salt proof of concept" },
    { t: "image", alt: "Document requests and approvals in the proof of concept" },
    {
      t: "callout",
      text: "The biggest opportunity was not digitising the existing process, but redesigning it. By automating repetitive tasks and letting the workflow trigger the next step, the platform cut manual work and gave users a clear view of the whole process.",
    },

    { t: "h2", text: "From proof of concept to platform" },
    {
      t: "p",
      text: "The proof of concept was built around Zoutlogistiek's needs, but Sphereon had a broader vision from the start: not only solving a logistics problem, but also testing interaction patterns, workflows and platform features that could grow into a reusable SaaS product.",
    },
    {
      t: "p",
      text: "Many of the challenges turned out not to be unique to logistics. Running workflows, managing documents, approvals, status tracking and access per role could all be used in other industries with small changes. These insights became the foundation of the Cloud Wallet, where the tested ideas from the proof of concept became reusable patterns for a scalable business platform.",
    },

    { t: "h2", text: "From assets to credentials" },
    {
      t: "p",
      text: "The proof of concept was about managing physical assets and their documents. As the project grew into the Cloud Wallet, the focus moved to digital credentials, turning a logistics solution for one customer into a platform for many industries.",
    },
    {
      t: "p",
      text: "That took more than swapping one thing for another. The platform was redesigned around the lifecycle of credentials, with a new information structure, navigation and management experience.",
    },
    {
      t: "callout",
      text: "How do you turn an asset-based workflow into a scalable credential platform that balances technical complexity, ease of use for businesses and future growth?",
    },
    {
      t: "p",
      text: "The Cloud Wallet fits closely with the direction Europe is taking with European Business Wallets: helping organisations identify themselves and securely manage and exchange trusted digital credentials across borders. Those principles were already central to the Cloud Wallet.",
    },

    { t: "h2", text: "Redesigning the credential overview" },
    {
      t: "p",
      text: "One of the first big redesigns was the Credential Overview, which replaced the old Asset Overview. It was inspired by the proof of concept, but redesigned for business users who manage large numbers of credentials. The new design had to:",
    },
    {
      t: "list",
      items: [
        "Fit with the Sphereon Wallet ecosystem.",
        "Stay neutral enough for future white-label versions.",
        "Put efficiency before visual richness for business users.",
      ],
    },
    {
      t: "p",
      text: "Through competitor analysis, design rounds and user feedback, we moved from a detail-heavy layout to a list view built for scanning, filtering and managing large collections. The Credential Overview became the heart of the platform and the starting point for the whole credential lifecycle.",
    },
    { t: "image", alt: "From asset overview to credential overview" },

    { t: "h2", text: "Designing the credential lifecycle" },
    {
      t: "p",
      text: "As the Cloud Wallet grew into a full credential management platform, credentials had to be supported through their whole life. From creating and issuing to receiving, managing, suspending, revoking or expiring, each stage brings its own actions, states and consequences. The challenge was to connect these flows into one consistent experience, so it's always clear where a credential is, what you can do and what the impact will be.",
    },
    {
      t: "points",
      items: [
        { title: "Create and issue", text: "Define the credential, configure its properties and issue it to a holder." },
        { title: "Manage and use", text: "Receive credentials, view and manage them, use and share them." },
        { title: "Status and validity", text: "Suspend, reactivate, revoke or let a credential expire." },
      ],
    },
    { t: "h3", text: "Creating and issuing a credential" },
    {
      t: "p",
      text: "Issuing a credential meant turning technical requirements into decisions that make sense to the user. With the product and development team, I mapped out which information was needed, which options depended on earlier choices and in which order decisions should be made. Over several rounds I worked out how to structure this without turning it into one big technical form. The result is a guided flow that introduces settings step by step, with advanced options available when needed.",
    },
    { t: "image", alt: "Guided flow for creating a credential" },
    {
      t: "p",
      text: "I focused on when information and decisions should appear. Related settings are grouped, advanced settings stay within reach, and the hierarchy is clearer without losing the flexibility different credential types need.",
    },
    { t: "image", alt: "From configuration to issuing" },
    {
      t: "p",
      text: "The same idea applies to issuing. Instead of one large flow, users first set up and review what they want to issue, and then choose how to deliver it to the holder. Keeping these moments apart also makes room for different issuing methods within the same structure.",
    },
    { t: "h3", text: "Designing credential sharing" },
    {
      t: "p",
      text: "Credential sharing is currently being designed. The challenge is helping users understand who is asking for their data, what is being asked and which credential provides it, especially when several credentials can answer the same request. The current concepts let users choose between matching credentials and see which details will be shared before they share. Next up is selective disclosure: more control over which requested details users share, while clearly showing what stays private.",
    },
    { t: "image", alt: "Work in progress: sharing concepts" },

    { t: "h2", text: "Navigation built around user roles" },
    {
      t: "p",
      text: "The first side menu was kept simple on purpose, so we could focus on designing and testing the core credential flows. As those flows grew and more role-specific features arrived, it was the right moment to redesign the navigation around the roles in the platform: holder, issuer, relying party and administrator. Each role needs different features; the Credential Designer, for example, is meant for issuers. I explored how the navigation could adapt to the active role, while users can switch roles within one consistent structure.",
    },
    { t: "image", alt: "Navigation per role" },

    { t: "h2", text: "From infrastructure to real use cases" },
    {
      t: "p",
      text: "The Cloud Wallet was also used to explore how credentials can support real workflows. In a scheduling use case for education, students could book machines based on certificates they had earned. The certificates are issued as digital credentials and stored in the Sphereon Wallet. When a student books a machine in the Cloud Wallet, the credentials are checked to see if they are qualified. I designed the booking experience around this check, combining a familiar booking flow with credential verification and showing how both wallets work together.",
    },
    { t: "image", alt: "Machine booking based on credentials" },
    { t: "image", alt: "Credential check while booking" },

    { t: "h2", text: "Project highlight: a design system that scales" },
    {
      t: "p",
      text: "As the Sphereon Wallet and the Cloud Wallet grew, keeping them consistent became more important. I worked on a shared design system that brings components, styles and design tokens together in one scalable foundation. It supports multiple products, themes and use cases, while still allowing product-specific variations. It includes reusable components, a token structure, states, light and dark themes and documentation for consistent building. The design system became the foundation for new screens across the Sphereon products.",
    },

    { t: "h2", text: "Beyond the core experience" },
    {
      t: "p",
      text: "Beyond the main credential flows, I designed supporting features and more specialised tools that helped the Cloud Wallet grow into a broader platform.",
    },
    {
      t: "points",
      items: [
        { title: "Credential Designer", text: "A tool for issuers to design and configure how credentials are structured and shown." },
        { title: "Key management", text: "Making the keys and security behind the platform manageable for businesses." },
        { title: "Presentation Definition", text: "An advanced editor for defining which credential details can be requested during a check." },
        { title: "Contacts and relationships", text: "Managing the organisations and parties users deal with in credential workflows." },
      ],
    },
    { t: "image", alt: "Credential Designer" },
    { t: "image", alt: "Presentation Definition editor" },
    { t: "image", alt: "Contacts and relationships" },

    { t: "h2", text: "Where the product stands" },
    {
      t: "p",
      text: "The Cloud Wallet is an MVP, built mainly to explore how the credential technology can be used in different situations. The core works, but the product is still growing and several parts need more work. Current improvements include the navigation and flow structure, and making patterns like the progress indicator less dominant and easier to reuse. In the future, the technology could become part of an organisation's existing systems, or the base for a complete credential management solution. This version is an important step in that direction, not the finished product.",
    },

    { t: "h2", text: "What I learned" },
    {
      t: "p",
      text: "The Cloud Wallet was an important project in my growth as a designer. Designing for the web brought new challenges around responsive behaviour and scale, and working across several Sphereon products made me think beyond single screens.",
    },
    {
      t: "p",
      text: "One of the hardest parts was giving the Cloud Wallet and the mobile wallet their own identity while still making them feel like one family. That grew into a new shared design system, and into exploring how tokens, components and patterns can scale across web and mobile. Building that foundation while the products were changing fast took a lot of exploring, but it changed how I think about design: not just as single experiences, but as parts of a larger system.",
    },
  ],

  nl: [
    { t: "h2", text: "Het project" },
    {
      t: "p",
      text: "Het ontwerp van de Sphereon Cloud Wallet, een SaaS-platform waarmee organisaties digitale bewijzen maken, beheren, uitgeven en volgen. Het ondersteunt meerdere bedrijfsdomeinen, zodat organisaties uitgevers, catalogi van bewijzen, workflows en rechten op één plek beheren.",
    },
    { t: "h2", text: "De uitdaging" },
    {
      t: "p",
      text: "Ingewikkeld beheer van digitale bewijzen omzetten in een begrijpelijk platform voor organisaties met verschillende rollen, rechten en processen. Het moest flexibel blijven voor gevorderde gebruikers en toch makkelijk te snappen zijn voor mensen die er dagelijks mee werken.",
    },
    {
      t: "p",
      text: "De Cloud Wallet begon als een vroege proof of concept met Zoutlogistiek, onderdeel van de Nederlandse waterschappen. Daarin onderzochten we hoe verifieerbare bewijzen de keten van strooizout konden digitaliseren en automatiseren, van inkoop en transport tot levering en controle.",
    },
    {
      t: "p",
      text: "De proof of concept liet zien dat het platform veel meer sectoren kon ondersteunen. Zo ontstond de Cloud Wallet: een herbruikbaar SaaS-platform voor meerdere organisaties en toepassingen, zoals onderwijs, overheid en logistiek. In plaats van een oplossing voor één klant werd de uitdaging een flexibel product dat je per organisatie kunt inrichten, met steeds dezelfde ervaring.",
    },

    { t: "h2", text: "Van handwerk naar een digitale proof of concept" },
    {
      t: "p",
      text: "Bij de inkoop en het vervoer van strooizout waren meerdere organisaties betrokken, zoals leveranciers, keuringsinstanties en Rijkswaterstaat. De communicatie liep vooral via e-mail, en de status van partijen en benodigde documenten werd met de hand bijgehouden in spreadsheets.",
    },
    {
      t: "p",
      text: "Met meer partijen en documenten werd het proces moeilijk te volgen. Er was weinig zicht op de status van partijen, documentverzoeken, goedkeuringen en openstaande acties. Het werk was versnipperd en kostte veel tijd.",
    },
    {
      t: "p",
      text: "In plaats van meteen een oplossing te ontwerpen, wilden we eerst het huidige proces begrijpen. Met de betrokkenen brachten we de hele workflow in kaart via workshops, interviews en sparsessies om de twee weken. Tijdens het hele project bleven we ideeën en prototypes toetsen, zodat de oplossing aansloot bij de mensen die ermee werken.",
    },
    { t: "h3", text: "Digitale workflows ontwerpen" },
    {
      t: "p",
      text: "De proof of concept bracht het handmatige documentverkeer samen in één workflow. Gebruikers konden documenten opvragen, bestanden uploaden, inzendingen beoordelen, verzoeken goedkeuren en de voortgang van partijen door het inkoopproces volgen.",
    },
    {
      t: "p",
      text: "Onderweg ontdekten we dat veel handmatige acties automatisch konden. In plaats van dat mensen mails en spreadsheets in de gaten houden, start de workflow zelf de volgende stap zodra een document is geüpload, goedgekeurd of afgewezen. Gebruikers reageren op het systeem in plaats van alles zelf te regelen.",
    },
    {
      t: "p",
      text: "Elke organisatie had andere verantwoordelijkheden, maar veel handelingen hadden dezelfde opbouw. Door die terugkerende patronen te herkennen, werden ingewikkelde workflows eenvoudiger en de ervaring voor iedereen consistenter.",
    },
    { t: "image", alt: "Workflow van de proof of concept voor strooizout" },
    { t: "image", alt: "Documentverzoeken en goedkeuringen in de proof of concept" },
    {
      t: "callout",
      text: "De grootste kans zat niet in het digitaliseren van het bestaande proces, maar in het opnieuw ontwerpen ervan. Door herhalend werk te automatiseren en de workflow de volgende stap te laten starten, verminderde het handwerk en kregen gebruikers overzicht over het hele proces.",
    },

    { t: "h2", text: "Van proof of concept naar platform" },
    {
      t: "p",
      text: "De proof of concept was gebouwd rond de behoeften van Zoutlogistiek, maar Sphereon keek vanaf het begin breder: niet alleen een logistiek probleem oplossen, maar ook patronen, workflows en functies toetsen die konden uitgroeien tot een herbruikbaar SaaS-product.",
    },
    {
      t: "p",
      text: "Veel uitdagingen bleken niet uniek voor logistiek. Workflows aansturen, documenten beheren, goedkeuringen, status volgen en toegang per rol konden met kleine aanpassingen ook in andere sectoren. Die inzichten werden de basis van de Cloud Wallet, waar de geteste ideeën uit de proof of concept herbruikbare patronen werden voor een schaalbaar zakelijk platform.",
    },

    { t: "h2", text: "Van partijen naar digitale bewijzen" },
    {
      t: "p",
      text: "De proof of concept ging over het beheren van fysieke partijen en hun documenten. Toen het project uitgroeide tot de Cloud Wallet, verschoof de focus naar digitale bewijzen. Zo werd een logistieke oplossing voor één klant een platform voor veel sectoren.",
    },
    {
      t: "p",
      text: "Dat was meer dan het ene begrip vervangen door het andere. Het platform is opnieuw ontworpen rond de levensloop van bewijzen, met een nieuwe informatiestructuur, navigatie en beheerervaring.",
    },
    {
      t: "callout",
      text: "Hoe maak je van een workflow rond partijen een schaalbaar platform voor digitale bewijzen, met balans tussen techniek, gebruiksgemak voor bedrijven en groei in de toekomst?",
    },
    {
      t: "p",
      text: "De Cloud Wallet sluit goed aan bij de richting die Europa kiest met de European Business Wallets: organisaties helpen zich te identificeren en betrouwbare digitale bewijzen veilig te beheren en uit te wisselen over de grens. Die principes stonden al centraal in de Cloud Wallet.",
    },

    { t: "h2", text: "Het overzicht van bewijzen opnieuw ontworpen" },
    {
      t: "p",
      text: "Een van de eerste grote vernieuwingen was het overzicht van bewijzen, als vervanger van het oude overzicht van partijen. Het was geïnspireerd op de proof of concept, maar opnieuw ontworpen voor zakelijke gebruikers die grote aantallen bewijzen beheren. Het nieuwe ontwerp moest:",
    },
    {
      t: "list",
      items: [
        "Aansluiten bij de Sphereon Wallet.",
        "Neutraal genoeg zijn voor toekomstige white-label versies.",
        "Efficiëntie boven visuele rijkdom zetten voor zakelijke gebruikers.",
      ],
    },
    {
      t: "p",
      text: "Via concurrentieonderzoek, ontwerprondes en feedback van gebruikers gingen we van een opbouw vol details naar een lijstweergave om snel te scannen, filteren en grote hoeveelheden te beheren. Het overzicht werd het hart van het platform en het startpunt voor de hele levensloop van een bewijs.",
    },
    { t: "image", alt: "Van overzicht van partijen naar overzicht van bewijzen" },

    { t: "h2", text: "De levensloop van een bewijs ontwerpen" },
    {
      t: "p",
      text: "Toen de Cloud Wallet uitgroeide tot een volledig platform, moesten bewijzen hun hele levensloop ondersteund worden. Van maken en uitgeven tot ontvangen, beheren, opschorten, intrekken of verlopen: elke fase heeft eigen acties, statussen en gevolgen. De uitdaging was om die flows te verbinden tot één ervaring, zodat altijd duidelijk is waar een bewijs staat, wat je kunt doen en wat het gevolg is.",
    },
    {
      t: "points",
      items: [
        { title: "Maken en uitgeven", text: "Het bewijs vastleggen, de eigenschappen instellen en uitgeven aan een houder." },
        { title: "Beheren en gebruiken", text: "Bewijzen ontvangen, bekijken en beheren, gebruiken en delen." },
        { title: "Status en geldigheid", text: "Opschorten, weer activeren, intrekken of laten verlopen." },
      ],
    },
    { t: "h3", text: "Een bewijs maken en uitgeven" },
    {
      t: "p",
      text: "Een bewijs uitgeven betekende technische eisen omzetten in keuzes die logisch zijn voor de gebruiker. Met het product- en ontwikkelteam bracht ik in kaart welke informatie nodig was, welke opties afhingen van eerdere keuzes en in welke volgorde beslissingen moesten komen. In meerdere rondes zocht ik hoe dit kon zonder één groot technisch formulier. Het resultaat is een begeleide flow die instellingen stap voor stap toont, met geavanceerde opties binnen handbereik.",
    },
    { t: "image", alt: "Begeleide flow om een bewijs te maken" },
    {
      t: "p",
      text: "Ik lette vooral op wanneer informatie en keuzes verschijnen. Verwante instellingen staan bij elkaar, geavanceerde instellingen blijven bereikbaar, en de opbouw is duidelijker zonder de flexibiliteit te verliezen die verschillende soorten bewijzen nodig hebben.",
    },
    { t: "image", alt: "Van instellen naar uitgeven" },
    {
      t: "p",
      text: "Hetzelfde geldt voor het uitgeven. In plaats van één grote flow stellen gebruikers eerst in wat ze willen uitgeven en controleren ze dat, en kiezen ze daarna hoe het bij de houder komt. Door die momenten te scheiden, passen verschillende manieren van uitgeven in dezelfde structuur.",
    },
    { t: "h3", text: "Bewijzen delen ontwerpen" },
    {
      t: "p",
      text: "Het delen van bewijzen is nu in ontwerp. De uitdaging is gebruikers te laten begrijpen wie om hun gegevens vraagt, wat er gevraagd wordt en welk bewijs het levert, vooral als meerdere bewijzen hetzelfde verzoek kunnen beantwoorden. De huidige concepten laten gebruikers kiezen tussen passende bewijzen en zien welke gegevens gedeeld worden voordat ze delen. Daarna volgt selectief delen: meer controle over welke gevraagde gegevens je deelt, met duidelijk wat privé blijft.",
    },
    { t: "image", alt: "Werk in uitvoering: concepten voor delen" },

    { t: "h2", text: "Navigatie rond gebruikersrollen" },
    {
      t: "p",
      text: "Het eerste zijmenu was bewust eenvoudig, zodat we ons konden richten op het ontwerpen en testen van de kernflows. Toen die groeiden en er functies per rol bijkwamen, was het tijd om de navigatie opnieuw te ontwerpen rond de rollen in het platform: houder, uitgever, controleur en beheerder. Elke rol heeft andere functies nodig; de Credential Designer is bijvoorbeeld voor uitgevers. Ik onderzocht hoe de navigatie zich aanpast aan de actieve rol, terwijl gebruikers binnen één vaste structuur van rol kunnen wisselen.",
    },
    { t: "image", alt: "Navigatie per rol" },

    { t: "h2", text: "Van infrastructuur naar echte toepassingen" },
    {
      t: "p",
      text: "De Cloud Wallet is ook gebruikt om te laten zien hoe digitale bewijzen echte processen kunnen ondersteunen. In een planningstoepassing voor het onderwijs konden studenten machines reserveren op basis van certificaten die ze hadden behaald. Die certificaten worden als digitale bewijzen uitgegeven en bewaard in de Sphereon Wallet. Bij het reserveren in de Cloud Wallet wordt gecontroleerd of de student bevoegd is. Ik ontwierp de reserveringservaring rond die controle, met een vertrouwde boekingsflow, en liet zien hoe beide wallets samenwerken.",
    },
    { t: "image", alt: "Machines reserveren op basis van bewijzen" },
    { t: "image", alt: "Controle van bewijzen tijdens het reserveren" },

    { t: "h2", text: "Uitgelicht: een design system dat meegroeit" },
    {
      t: "p",
      text: "Naarmate de Sphereon Wallet en de Cloud Wallet groeiden, werd consistentie belangrijker. Ik werkte aan een gedeeld design system dat componenten, stijlen en design tokens samenbrengt in één schaalbare basis. Het ondersteunt meerdere producten, thema's en toepassingen, met ruimte voor variaties per product. Het bevat herbruikbare componenten, een tokenstructuur, statussen, een licht en donker thema en documentatie om consistent te bouwen. Het design system werd de basis voor nieuwe schermen in alle Sphereon-producten.",
    },

    { t: "h2", text: "Meer dan de kern" },
    {
      t: "p",
      text: "Naast de belangrijkste flows ontwierp ik ondersteunende functies en meer gespecialiseerde tools, waardoor de Cloud Wallet uitgroeide tot een breder platform.",
    },
    {
      t: "points",
      items: [
        { title: "Credential Designer", text: "Een tool voor uitgevers om te ontwerpen hoe bewijzen zijn opgebouwd en eruitzien." },
        { title: "Sleutelbeheer", text: "De sleutels en beveiliging achter het platform beheersbaar maken voor bedrijven." },
        { title: "Presentation Definition", text: "Een geavanceerde editor om vast te leggen welke gegevens bij een controle opgevraagd mogen worden." },
        { title: "Contacten en relaties", text: "De organisaties en partijen beheren waarmee gebruikers werken." },
      ],
    },
    { t: "image", alt: "Credential Designer" },
    { t: "image", alt: "Editor voor Presentation Definition" },
    { t: "image", alt: "Contacten en relaties" },

    { t: "h2", text: "Waar het product nu staat" },
    {
      t: "p",
      text: "De Cloud Wallet is een MVP, vooral gebouwd om te ontdekken hoe de technologie in verschillende situaties werkt. De kern staat, maar het product groeit nog en meerdere onderdelen vragen meer werk. Nu wordt gewerkt aan de navigatie en de opbouw van flows, en aan patronen zoals de voortgangsindicator, die minder dominant en beter herbruikbaar moeten worden. In de toekomst kan de technologie onderdeel worden van bestaande systemen van een organisatie, of de basis voor een complete oplossing. Deze versie is een belangrijke stap in die richting, niet het eindproduct.",
    },

    { t: "h2", text: "Wat ik leerde" },
    {
      t: "p",
      text: "De Cloud Wallet was een belangrijk project in mijn groei als designer. Ontwerpen voor het web bracht nieuwe uitdagingen rond schermformaten en schaal, en werken aan meerdere Sphereon-producten liet me verder kijken dan losse schermen.",
    },
    {
      t: "p",
      text: "Een van de lastigste dingen was de Cloud Wallet en de mobiele wallet elk een eigen gezicht geven, terwijl ze toch als één familie voelen. Daaruit groeide een nieuw gedeeld design system, en het onderzoek naar hoe tokens, componenten en patronen meegroeien over web en mobiel. Die basis leggen terwijl de producten snel veranderden, vroeg veel uitzoeken. Maar het veranderde hoe ik naar ontwerpen kijk: niet alleen als losse ervaringen, maar als onderdelen van een groter geheel.",
    },
  ],
};
