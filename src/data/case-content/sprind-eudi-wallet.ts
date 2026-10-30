import type { CaseBody } from "./types";

// Source: Maria's Notion case "Redesigning Onboarding for the SPRIND EUDI Wallet Program".
// English: Maria's text with small language fixes. Dutch: translation, to be checked by Maria.
export const sprindEudiWallet: CaseBody = {
  en: [
    { t: "h2", text: "The project" },
    {
      t: "p",
      text: "Redesigning the onboarding of the Sphereon Wallet as part of the SPRIND EUDI Wallet Prototypes program, integrating the German Ausweis identity verification flow into an existing digital identity wallet.",
    },
    { t: "h2", text: "The challenge" },
    {
      t: "p",
      text: "Designing an onboarding experience that turns the German Ausweis, a physical government-issued identity card, into a seamless digital identity verification flow. The experience had to meet strict security requirements while staying intuitive, trustworthy and accessible for everyday users.",
    },
    {
      t: "callout",
      text: "The European Digital Identity Wallet (EUDI Wallet) is an EU initiative that lets citizens securely identify themselves and manage and share verified digital credentials across Europe.",
    },
    {
      t: "p",
      text: "As part of Germany's EUDI Wallet development, SPRIND selected Sphereon as one of six funded teams in its competitive prototype program. Over multiple three-month phases, teams developed and demonstrated their solutions, and only selected teams moved on to the next round. Sphereon progressed through multiple rounds and presented the wallet at events in Leipzig and Berlin.",
    },
    {
      t: "link",
      text: "Read more about the SPRIND EUDI Wallet project",
      href: "https://www.sprind.org/en/actions/strategic-projects/eudi-wallet",
    },
    {
      t: "p",
      text: "As UX/UI designer, I worked with two other designers to redesign the wallet onboarding. Our focus was integrating the German Ausweis identity verification into a flow that stayed clear, secure and accessible for first-time users.",
    },
    {
      t: "p",
      text: "The result was a validated onboarding concept and interactive prototype that turned the complex German identity verification process into a clear, step by step experience. The redesigned flow became the foundation for Sphereon's onboarding in the next phase of the SPRIND program.",
    },

    { t: "h2", text: "Bringing a basic wallet to the next phase" },
    {
      t: "p",
      text: "The EUDI Wallet onboarding was built on the existing Sphereon Wallet, which already had a solid technical foundation. The original onboarding was intentionally lightweight, because the first focus had been on the wallet's core credential flows.",
    },
    {
      t: "p",
      text: "Users were introduced to the wallet, accepted the Terms of Service, set a PIN and optional biometrics, and entered some basic personal information that stayed on the device, following the principles of Self-Sovereign Identity (SSI). It worked, but it offered little guidance or context. That created an opportunity to rethink the onboarding from the ground up.",
    },
    { t: "image", alt: "The original Sphereon Wallet onboarding" },
    {
      t: "p",
      text: "Before redesigning anything, we first needed to understand where users struggled. We explored how people see digital identity, what information they need during onboarding, and which moments matter most for building trust and confidence.",
    },

    { t: "h2", text: "Building on research and requirements" },
    {
      t: "p",
      text: "Before exploring design concepts, we translated SPRIND's technical requirements into user experience challenges. The project introduced new capabilities such as the Person Identification Data (PID) credential. My focus was on presenting these requirements in a way that felt simple, trustworthy and easy to complete for first-time users.",
    },
    {
      t: "p",
      text: "The onboarding had to introduce an unfamiliar identity verification process without overwhelming people. It also had to respect privacy principles, support multiple credential standards and stay flexible enough for the evolving EUDI Wallet ecosystem.",
    },
    { t: "h3", text: "Core requirements" },
    {
      t: "list",
      items: [
        "Introduce digital identity verification in a way that feels familiar and trustworthy.",
        "Explain why identity verification is needed without overwhelming users.",
        "Design around privacy by design, keeping users in control of their personal data.",
        "Support multiple credential standards without making the interface more complex.",
        "Create an onboarding flow that can evolve with the EUDI Wallet specifications.",
      ],
    },

    { t: "h2", text: "Exploring the ideal onboarding journey" },
    {
      t: "p",
      text: "With the requirements defined, we explored how the onboarding could be structured. Instead of designing screens right away, we first mapped different user journeys to see where identity verification should fit in the overall experience.",
    },
    {
      t: "p",
      text: "The starting point was the existing onboarding, which mainly focused on setting up the wallet itself. The new EUDI onboarding added a whole new challenge: integrating the German PID verification without making the experience feel technical or disruptive.",
    },
    { t: "image", alt: "Starting point: the original onboarding journey" },
    {
      t: "p",
      text: "We also did desk research into products with similarly complex onboarding: digital identity, banking and financial apps. We looked at progress indicators, the order of steps, and the balance between giving information and keeping momentum. These insights gave us design principles before we started on our own concepts.",
    },

    { t: "h2", text: "Two different approaches" },
    {
      t: "p",
      text: "The onboarding had grown well beyond creating a wallet. Users now had to set up their wallet, choose their country, configure security, obtain their first PID credential and verify their information. The question was not only which steps were needed, but how to structure them so people stay engaged and confident. To test this, we created two end-to-end proposals.",
    },
    {
      t: "points",
      items: [
        {
          title: "Proposal 1: task focused",
          text: "A compact flow where PID verification was one continuous step within the onboarding. It put efficiency first and tested whether users could finish the verification with as few interruptions as possible.",
        },
        {
          title: "Proposal 2: guided experience",
          text: "A more structured flow, split into clear phases with explanations and visible progress. It focused on reducing uncertainty by showing users where they were and what would happen next.",
        },
      ],
    },

    { t: "h2", text: "Validating the first concepts" },
    {
      t: "p",
      text: "We turned both concepts into mid-fidelity wireframes. At this stage the goal was not visual design, but checking whether users understood the flow and could complete the onboarding.",
    },
    {
      t: "p",
      text: "The most critical part was the PID verification. Users had to scan their physical ID card and enter two different PIN codes: the eID PIN to verify their identity with the Ausweis card, and the Wallet PIN to store the PID credential securely in the wallet. We explored two interaction concepts to make the difference between the two PINs clear and to guide users through the NFC scan with as little doubt as possible.",
    },
    { t: "image", alt: "Low-fidelity wireframes of the two PIN concepts" },
    {
      t: "p",
      text: "We built interactive prototypes and ran several moderated usability sessions with a structured interview guide. Participants completed both onboarding flows while thinking aloud, so we could compare the concepts and find recurring problems before moving to high fidelity.",
    },
    { t: "image", alt: "Usability test session" },
    { t: "h3", text: "Key insights" },
    {
      t: "list",
      items: [
        "Around 80% of participants preferred seeing the full onboarding journey before starting. An overview up front plus a progress indicator made the process feel more predictable.",
        "Participants kept asking for more context about privacy and personal data. Explaining why information was requested and how it was handled clearly increased trust.",
        "7 out of 8 participants first confused the Wallet PIN with the German eID PIN. We needed clearer wording, visual hierarchy and guidance.",
        "The NFC scan caused the most hesitation. Several participants expected to scan their card with the camera instead of holding it against the back of the phone, so we redesigned the guidance before that step.",
        "More than half liked being able to skip the PID flow, as long as it was clear they could add the credential later without losing any wallet features.",
      ],
    },
    {
      t: "p",
      text: "These findings shaped the next iteration. We combined the strongest parts of both concepts into one mid-fidelity flow that solved the main pain points and gave users more clarity and confidence.",
    },
    { t: "image", alt: "The combined mid-fidelity flow" },

    { t: "h2", text: "Making progress feel achievable" },
    {
      t: "p",
      text: "The onboarding had three phases: Create Wallet, Secure Wallet and Import Personal Data (PID). Each phase had several tasks, which made it much longer than a typical mobile onboarding. The challenge was to show users where they were without making the flow feel overwhelming.",
    },
    {
      t: "p",
      text: "Instead of one progress indicator, I explored different approaches inspired by other onboarding and multi-step verification flows, and refined them through usability tests and several iterations.",
    },
    { t: "image", alt: "Explorations of the progress indicator" },
    { t: "p", text: "The final solution combined two levels of progress:" },
    {
      t: "points",
      items: [
        {
          title: "High-level progress",
          text: "Shows the three phases (Create Wallet, Secure Wallet, Import Personal Data), so users have a clear picture of the whole journey.",
        },
        {
          title: "Step progress",
          text: "Shows how far users are within the current phase.",
        },
      ],
    },
    {
      t: "p",
      text: "This layered approach uses visibility of system status, progressive disclosure and the goal gradient effect. Instead of one long progress bar, the onboarding is split into meaningful milestones, which makes a complex verification process feel achievable.",
    },
    { t: "image", alt: "Final two-level progress indicator" },

    { t: "h2", text: "Turning identity verification into a guided experience" },
    {
      t: "p",
      text: "Unlike creating a wallet or setting a PIN, the PID verification was an unfamiliar process for most users. Research showed that many German citizens rarely use the digital features of their Ausweis card, and digital credentials were still largely unknown. The experience therefore focused on clear guidance, familiar language and visual cues, without exposing concepts like NFC communication or digital credentials.",
    },
    {
      t: "callout",
      text: "How do you turn a technically complex identity check into something people feel confident completing?",
    },
    { t: "h3", text: "Preparing users before verification" },
    {
      t: "p",
      text: "Before starting, users get a clear overview of what they need: their Ausweis card and PIN, plus what information will be retrieved and why. In testing, many participants didn't have their card nearby or no longer remembered their PIN. So users could skip the PID setup during onboarding and complete it later in the app. This lowered the barrier to finishing onboarding while still letting people explore the wallet first.",
    },
    { t: "image", alt: "Preparation screen before verification" },
    { t: "h3", text: "Guiding users through the NFC scan" },
    {
      t: "p",
      text: "Users first enter their Ausweis PIN and then hold the card against the phone's NFC reader. We designed custom illustrations showing exactly where to place the card. After testing, we made separate illustrations for iPhone and Android, because the NFC readers sit in different places and that caused confusion.",
    },
    { t: "image", alt: "NFC scan illustrations for iPhone and Android" },
    { t: "h3", text: "Making two PIN codes unmistakable" },
    {
      t: "p",
      text: "Because participants often mixed up the Ausweis PIN and the Wallet PIN, we made the two screens clearly different through layout, visual hierarchy and supporting text. Testing also showed how much people relied on titles, descriptions and pop-up text during this unfamiliar process.",
    },
    { t: "image", alt: "The Ausweis PIN and Wallet PIN screens" },
    { t: "h3", text: "Confirming personal information" },
    {
      t: "p",
      text: "Before the PID credential is imported, users see a final overview of the personal information read from their Ausweis card. This gives them one last chance to review and approve it before it is stored in the wallet.",
    },
    { t: "image", alt: "Review of personal information before import" },
    { t: "h3", text: "Why this worked" },
    {
      t: "list",
      items: [
        "Complex identity verification became a simple, guided experience without exposing the technology.",
        "Letting users skip the PID setup reduced drop-off while keeping the feature available later.",
        "Platform-specific illustrations made the NFC scan easier to understand.",
        "A clear visual difference between the Ausweis PIN and Wallet PIN, with short supporting text, reduced errors.",
        "Reviewing personal information before import increased transparency and trust.",
      ],
    },

    { t: "h2", text: "Designing trust through content" },
    {
      t: "p",
      text: "We learned that the content was just as important as the interface. In testing, participants leaned heavily on titles, supporting text and pop-ups to understand unfamiliar concepts and decide whether they felt confident to continue. So copy was not a final step but part of the design. Every title, description and pop-up was refined to explain why information was needed, what would happen next and how personal data would be handled.",
    },

    { t: "h2", text: "The complete onboarding" },
    {
      t: "p",
      text: "The prototype below brings these decisions together: the full journey from creating a wallet to receiving a PID credential.",
    },
    { t: "image", alt: "Prototype of the complete onboarding" },

    { t: "h2", text: "Presenting the results in Berlin" },
    {
      t: "p",
      text: "At the end of each three-month sprint, all selected teams met in Berlin to present their progress to government representatives, industry experts and the other participants. Next to a short presentation, we showed the onboarding in live demos at our booth. Visitors could walk through the full flow, ask questions and try it themselves, which gave us feedback from both technical and non-technical people.",
    },
    {
      t: "p",
      text: "The project covered both the wallet app and the backend behind it, so the demos showed the full experience: creating a wallet, verifying your identity and receiving a PID credential. What we learned there went straight into the next design iteration.",
    },
    { t: "image", alt: "Sphereon booth at the SPRIND event in Berlin" },
    { t: "h3", text: "What we took into the next phase" },
    {
      t: "list",
      items: [
        "Make the difference between the Ausweis PIN and Wallet PIN even clearer.",
        "Reconsider the order of the PID flow, for example scanning the card before entering the PIN.",
        "Give more context on why personal information, like name and email, is asked during onboarding.",
        "Further improve illustrations, loading states and guidance for the NFC scan.",
        "Keep improving consistency and accessibility across the onboarding.",
      ],
    },
    {
      t: "p",
      text: "Not every insight led to an immediate change. Some needed more technical research, others went on the backlog. Together they gave a clear direction for the next phase.",
    },

    { t: "h2", text: "Selected for phase 2" },
    {
      t: "p",
      text: "After phase 1, Sphereon was selected for the second stage of the SPRIND program. The onboarding kept evolving, but the focus moved to new opportunities in the wallet, including more experimental ideas such as a conversational interface, and better accessibility.",
    },
    {
      t: "points",
      items: [
        {
          title: "Conversational UI",
          text: "Exploring how natural language could simplify complex credential and identity flows in the wallet.",
        },
        {
          title: "Accessibility",
          text: "Improving the wallet with accessible interaction patterns, refined components and usability improvements, to make digital identity more inclusive.",
        },
      ],
    },

    { t: "h2", text: "What I learned" },
    {
      t: "p",
      text: "Designing for digital identity goes far beyond intuitive screens. Building trust, explaining unfamiliar technology and validating decisions with users and stakeholders turned out to be just as important as the visual design. Working in an international innovation program also made me better at working across disciplines and iterating quickly.",
    },
    {
      t: "p",
      text: "It confirmed my belief that the best user experiences come from continuous collaboration, validation and iteration, not from a single design sprint.",
    },
  ],

  nl: [
    { t: "h2", text: "Het project" },
    {
      t: "p",
      text: "Een nieuwe onboarding voor de Sphereon Wallet, als onderdeel van het SPRIND EUDI Wallet Prototypes-programma. Daarbij moest de Duitse identiteitscontrole met de Ausweis een plek krijgen in een bestaande digitale identiteitswallet.",
    },
    { t: "h2", text: "De uitdaging" },
    {
      t: "p",
      text: "Een onboarding ontwerpen die de Duitse Ausweis, een fysieke identiteitskaart van de overheid, omzet in een soepele digitale identiteitscontrole. De ervaring moest aan strenge veiligheidseisen voldoen en toch begrijpelijk, betrouwbaar en toegankelijk blijven voor gewone gebruikers.",
    },
    {
      t: "callout",
      text: "De European Digital Identity Wallet (EUDI Wallet) is een initiatief van de EU waarmee burgers zich veilig kunnen identificeren en geverifieerde digitale bewijzen kunnen beheren en delen in heel Europa.",
    },
    {
      t: "p",
      text: "Voor de ontwikkeling van de Duitse EUDI Wallet koos SPRIND Sphereon als een van zes gefinancierde teams in een prototypeprogramma met competitie. In meerdere fases van drie maanden ontwikkelden en lieten de teams hun oplossing zien. Alleen geselecteerde teams gingen door naar de volgende ronde. Sphereon ging door meerdere rondes en presenteerde de wallet op evenementen in Leipzig en Berlijn.",
    },
    {
      t: "link",
      text: "Meer over het SPRIND EUDI Wallet-project",
      href: "https://www.sprind.org/en/actions/strategic-projects/eudi-wallet",
    },
    {
      t: "p",
      text: "Als UX/UI-designer werkte ik samen met twee andere designers aan de nieuwe onboarding. We richtten ons op het inpassen van de Duitse Ausweis-controle in een flow die duidelijk, veilig en toegankelijk bleef voor nieuwe gebruikers.",
    },
    {
      t: "p",
      text: "Het resultaat was een getest onboardingconcept en een interactief prototype dat de ingewikkelde Duitse identiteitscontrole omzette in duidelijke stappen. De nieuwe flow werd de basis voor de onboarding van Sphereon in de volgende fase van het SPRIND-programma.",
    },

    { t: "h2", text: "Een eenvoudige wallet naar de volgende fase" },
    {
      t: "p",
      text: "De EUDI-onboarding bouwde voort op de bestaande Sphereon Wallet, die technisch al een stevige basis had. De oorspronkelijke onboarding was bewust licht gehouden, omdat de focus eerst lag op de belangrijkste flows rond digitale bewijzen.",
    },
    {
      t: "p",
      text: "Gebruikers kregen een introductie, gingen akkoord met de voorwaarden, stelden een pincode en eventueel biometrie in, en vulden wat persoonlijke gegevens in die op het toestel bleven, volgens de principes van Self-Sovereign Identity (SSI). Dat werkte, maar gaf weinig uitleg of houvast. Een goede reden om de onboarding helemaal opnieuw te bekijken.",
    },
    { t: "image", alt: "De oorspronkelijke onboarding van de Sphereon Wallet" },
    {
      t: "p",
      text: "Voordat we iets herontwierpen, wilden we eerst weten waar gebruikers vastliepen. We onderzochten hoe mensen naar digitale identiteit kijken, welke informatie ze nodig hebben tijdens de onboarding en welke momenten het belangrijkst zijn voor vertrouwen.",
    },

    { t: "h2", text: "Voortbouwen op onderzoek en eisen" },
    {
      t: "p",
      text: "Eerst vertaalden we de technische eisen van SPRIND naar vraagstukken voor de gebruikerservaring. Het project bracht nieuwe onderdelen mee, zoals het Person Identification Data (PID)-bewijs. Mijn focus lag op hoe je die eisen zo laat zien dat ze eenvoudig, betrouwbaar en makkelijk af te ronden zijn voor nieuwe gebruikers.",
    },
    {
      t: "p",
      text: "De onboarding moest een onbekende identiteitscontrole introduceren zonder mensen te overladen. Tegelijk moest hij privacy respecteren, meerdere standaarden voor digitale bewijzen ondersteunen en flexibel genoeg blijven voor de EUDI Wallet, die nog in ontwikkeling is.",
    },
    { t: "h3", text: "Belangrijkste eisen" },
    {
      t: "list",
      items: [
        "Digitale identiteitscontrole introduceren op een manier die vertrouwd en betrouwbaar voelt.",
        "Uitleggen waarom de controle nodig is, zonder gebruikers te overladen.",
        "Ontwerpen vanuit privacy by design, zodat gebruikers zelf over hun gegevens gaan.",
        "Meerdere standaarden ondersteunen zonder dat de interface ingewikkelder wordt.",
        "Een onboarding maken die mee kan groeien met de specificaties van de EUDI Wallet.",
      ],
    },

    { t: "h2", text: "Op zoek naar de beste onboardingroute" },
    {
      t: "p",
      text: "Met de eisen op een rij keken we hoe de onboarding opgebouwd kon worden. In plaats van meteen schermen te ontwerpen, brachten we eerst verschillende routes in kaart om te zien waar de identiteitscontrole het beste paste.",
    },
    {
      t: "p",
      text: "Het startpunt was de bestaande onboarding, die vooral draaide om het instellen van de wallet. De nieuwe EUDI-onboarding bracht een heel nieuwe uitdaging: de Duitse PID-controle inbouwen zonder dat het technisch of storend aanvoelt.",
    },
    { t: "image", alt: "Startpunt: de oorspronkelijke onboardingroute" },
    {
      t: "p",
      text: "We deden ook deskresearch naar producten met een vergelijkbaar ingewikkelde onboarding: apps voor digitale identiteit, bankieren en financiën. We keken naar voortgangsindicatoren, de volgorde van stappen en de balans tussen informatie geven en vaart houden. Dat leverde ontwerpprincipes op voordat we aan onze eigen concepten begonnen.",
    },

    { t: "h2", text: "Twee verschillende aanpakken" },
    {
      t: "p",
      text: "De onboarding was veel meer geworden dan een wallet aanmaken. Gebruikers moesten hun wallet instellen, hun land kiezen, beveiliging regelen, hun eerste PID-bewijs ophalen en hun gegevens controleren. De vraag was niet alleen welke stappen nodig waren, maar hoe je ze zo ordent dat mensen gemotiveerd en zeker blijven. Daarom maakten we twee volledige voorstellen.",
    },
    {
      t: "points",
      items: [
        {
          title: "Voorstel 1: gericht op de taak",
          text: "Een compacte flow waarin de PID-controle één doorlopende stap was. Efficiëntie stond voorop: kunnen gebruikers de controle afronden met zo min mogelijk onderbrekingen?",
        },
        {
          title: "Voorstel 2: begeleide ervaring",
          text: "Een meer gestructureerde flow, verdeeld in duidelijke fases met uitleg en zichtbare voortgang. Gericht op minder onzekerheid door te laten zien waar gebruikers zijn en wat er komt.",
        },
      ],
    },

    { t: "h2", text: "De eerste concepten testen" },
    {
      t: "p",
      text: "We werkten beide concepten uit tot wireframes. In deze fase ging het niet om het visuele ontwerp, maar om de vraag of gebruikers de flow begrepen en de onboarding konden afronden.",
    },
    {
      t: "p",
      text: "Het lastigste deel was de PID-controle. Gebruikers moesten hun fysieke ID-kaart scannen en twee verschillende pincodes invoeren: de eID-pincode om hun identiteit te bevestigen met de Ausweis, en de wallet-pincode om het PID-bewijs veilig in de wallet op te slaan. We probeerden twee interactieconcepten uit om het verschil tussen de twee pincodes duidelijk te maken en gebruikers zonder twijfel door de NFC-scan te leiden.",
    },
    { t: "image", alt: "Eenvoudige wireframes van de twee pincode-concepten" },
    {
      t: "p",
      text: "We bouwden interactieve prototypes en hielden meerdere begeleide gebruikerstests met een vaste interviewopzet. Deelnemers doorliepen beide flows en dachten hardop na. Zo konden we de concepten vergelijken en terugkerende problemen vinden voordat we het visuele ontwerp ingingen.",
    },
    { t: "image", alt: "Een gebruikerstest" },
    { t: "h3", text: "Belangrijkste inzichten" },
    {
      t: "list",
      items: [
        "Ongeveer 80% van de deelnemers zag liever eerst de hele onboarding voordat ze begonnen. Een overzicht vooraf en een voortgangsindicator maakten het voorspelbaarder.",
        "Deelnemers vroegen steeds om meer uitleg over privacy en persoonlijke gegevens. Uitleggen waarom iets gevraagd werd en wat ermee gebeurde, gaf duidelijk meer vertrouwen.",
        "7 van de 8 deelnemers haalden eerst de wallet-pincode en de Duitse eID-pincode door elkaar. Duidelijkere woorden, opbouw en begeleiding waren nodig.",
        "De NFC-scan zorgde voor de meeste aarzeling. Meerdere deelnemers dachten dat ze hun kaart met de camera moesten scannen in plaats van tegen de achterkant van de telefoon te houden. Daarom pasten we de uitleg vóór die stap aan.",
        "Meer dan de helft vond het fijn dat ze de PID-stap konden overslaan, zolang duidelijk was dat ze het bewijs later konden toevoegen zonder iets te missen in de wallet.",
      ],
    },
    {
      t: "p",
      text: "Deze bevindingen bepaalden de volgende versie. We combineerden de sterkste onderdelen van beide concepten tot één flow die de grootste knelpunten oploste en gebruikers meer duidelijkheid en zekerheid gaf.",
    },
    { t: "image", alt: "De gecombineerde flow" },

    { t: "h2", text: "Voortgang die haalbaar voelt" },
    {
      t: "p",
      text: "De onboarding had drie fases: wallet aanmaken, wallet beveiligen en persoonlijke gegevens (PID) importeren. Elke fase had meerdere taken, waardoor hij veel langer was dan een gewone mobiele onboarding. De uitdaging was om te laten zien waar gebruikers waren, zonder dat het overweldigend werd.",
    },
    {
      t: "p",
      text: "In plaats van één voortgangsindicator probeerde ik verschillende aanpakken uit, geïnspireerd op andere onboardings en controles in meerdere stappen. Die heb ik verbeterd via gebruikerstests en meerdere rondes.",
    },
    { t: "image", alt: "Verkenningen van de voortgangsindicator" },
    { t: "p", text: "De uiteindelijke oplossing combineerde twee niveaus van voortgang:" },
    {
      t: "points",
      items: [
        {
          title: "Voortgang op hoofdlijnen",
          text: "Toont de drie fases (wallet aanmaken, wallet beveiligen, persoonlijke gegevens importeren), zodat gebruikers de hele route overzien.",
        },
        {
          title: "Voortgang per stap",
          text: "Toont hoe ver gebruikers zijn binnen de huidige fase.",
        },
      ],
    },
    {
      t: "p",
      text: "Deze gelaagde aanpak maakt gebruik van zichtbare systeemstatus, informatie stap voor stap tonen en het doelgradiënt-effect. In plaats van één lange balk is de onboarding verdeeld in herkenbare mijlpalen. Zo voelt een ingewikkelde controle haalbaar.",
    },
    { t: "image", alt: "De uiteindelijke voortgangsindicator met twee niveaus" },

    { t: "h2", text: "Identiteitscontrole als begeleide ervaring" },
    {
      t: "p",
      text: "Anders dan een wallet aanmaken of een pincode instellen, was de PID-controle voor de meeste gebruikers onbekend. Uit onderzoek bleek dat veel Duitsers de digitale functies van hun Ausweis zelden gebruiken, en digitale bewijzen waren nog grotendeels onbekend. Daarom draaide de ervaring om duidelijke begeleiding, gewone taal en visuele aanwijzingen, zonder begrippen als NFC of digitale bewijzen naar voren te halen.",
    },
    {
      t: "callout",
      text: "Hoe maak je van een technisch ingewikkelde identiteitscontrole iets wat mensen met vertrouwen afronden?",
    },
    { t: "h3", text: "Gebruikers voorbereiden" },
    {
      t: "p",
      text: "Voordat ze beginnen, zien gebruikers wat ze nodig hebben: hun Ausweis en pincode, en welke gegevens worden opgehaald en waarom. Tijdens de tests hadden veel deelnemers hun kaart niet bij de hand of wisten ze hun pincode niet meer. Daarom konden gebruikers de PID-stap overslaan en later in de app afronden. Zo werd de drempel om de onboarding af te maken lager, en konden mensen de wallet eerst verkennen.",
    },
    { t: "image", alt: "Voorbereidingsscherm voor de controle" },
    { t: "h3", text: "Begeleiding bij de NFC-scan" },
    {
      t: "p",
      text: "Gebruikers voeren eerst hun Ausweis-pincode in en houden daarna de kaart tegen de NFC-lezer van hun telefoon. We maakten eigen illustraties die precies laten zien waar de kaart moet. Na de tests kwamen er aparte illustraties voor iPhone en Android, omdat de NFC-lezer op een andere plek zit en dat verwarring gaf.",
    },
    { t: "image", alt: "NFC-illustraties voor iPhone en Android" },
    { t: "h3", text: "Twee pincodes die je niet kunt verwarren" },
    {
      t: "p",
      text: "Omdat deelnemers de Ausweis-pincode en de wallet-pincode vaak door elkaar haalden, maakten we de twee schermen duidelijk anders qua opbouw, nadruk en tekst. De tests lieten ook zien hoe sterk mensen leunden op titels, uitleg en pop-ups tijdens dit onbekende proces.",
    },
    { t: "image", alt: "De schermen voor de Ausweis-pincode en de wallet-pincode" },
    { t: "h3", text: "Persoonlijke gegevens bevestigen" },
    {
      t: "p",
      text: "Voordat het PID-bewijs wordt geïmporteerd, zien gebruikers een laatste overzicht van de gegevens die van hun Ausweis zijn gelezen. Zo kunnen ze alles nog één keer controleren en goedkeuren voordat het in de wallet wordt opgeslagen.",
    },
    { t: "image", alt: "Overzicht van persoonlijke gegevens voor het importeren" },
    { t: "h3", text: "Waarom dit werkte" },
    {
      t: "list",
      items: [
        "Een ingewikkelde identiteitscontrole werd een eenvoudige, begeleide ervaring, zonder de techniek te tonen.",
        "De PID-stap kunnen overslaan zorgde voor minder uitval, terwijl de functie later beschikbaar bleef.",
        "Illustraties per platform maakten de NFC-scan makkelijker te begrijpen.",
        "Een duidelijk verschil tussen de Ausweis-pincode en de wallet-pincode, met korte uitleg, gaf minder fouten.",
        "Gegevens controleren voor het importeren gaf meer openheid en vertrouwen.",
      ],
    },

    { t: "h2", text: "Vertrouwen ontwerpen met tekst" },
    {
      t: "p",
      text: "We leerden dat de teksten net zo belangrijk waren als de interface. Tijdens de tests leunden deelnemers sterk op titels, uitleg en pop-ups om onbekende begrippen te snappen en te bepalen of ze verder durfden. Tekst was dus geen laatste stap, maar onderdeel van het ontwerp. Elke titel, uitleg en pop-up hebben we aangescherpt om te vertellen waarom iets nodig was, wat er daarna gebeurde en wat er met persoonlijke gegevens gebeurde.",
    },

    { t: "h2", text: "De complete onboarding" },
    {
      t: "p",
      text: "Het prototype hieronder brengt al deze keuzes samen: de hele route van een wallet aanmaken tot het ontvangen van een PID-bewijs.",
    },
    { t: "image", alt: "Prototype van de complete onboarding" },

    { t: "h2", text: "De resultaten presenteren in Berlijn" },
    {
      t: "p",
      text: "Aan het eind van elke sprint van drie maanden kwamen alle geselecteerde teams in Berlijn bij elkaar om hun voortgang te laten zien aan overheid, experts uit de sector en de andere deelnemers. Naast een korte presentatie lieten we de onboarding live zien op onze stand. Bezoekers konden de hele flow doorlopen, vragen stellen en het zelf proberen. Dat gaf feedback van zowel technische als niet-technische mensen.",
    },
    {
      t: "p",
      text: "Het project omvatte de wallet-app en de backend erachter, dus de demo's lieten de complete ervaring zien: een wallet aanmaken, je identiteit bevestigen en een PID-bewijs ontvangen. Wat we daar leerden, ging direct mee in de volgende ontwerpronde.",
    },
    { t: "image", alt: "De stand van Sphereon op het SPRIND-evenement in Berlijn" },
    { t: "h3", text: "Wat we meenamen naar de volgende fase" },
    {
      t: "list",
      items: [
        "Het verschil tussen de Ausweis-pincode en de wallet-pincode nog duidelijker maken.",
        "De volgorde van de PID-stap opnieuw bekijken, bijvoorbeeld eerst de kaart scannen en dan de pincode invoeren.",
        "Meer uitleggen waarom persoonlijke gegevens, zoals naam en e-mail, tijdens de onboarding worden gevraagd.",
        "Illustraties, laadschermen en begeleiding bij de NFC-scan verder verbeteren.",
        "De consistentie en toegankelijkheid van de onboarding blijven verbeteren.",
      ],
    },
    {
      t: "p",
      text: "Niet elk inzicht leidde meteen tot een aanpassing. Sommige vroegen eerst technisch onderzoek, andere kwamen op de lijst voor later. Samen gaven ze een duidelijke richting voor de volgende fase.",
    },

    { t: "h2", text: "Door naar fase 2" },
    {
      t: "p",
      text: "Na fase 1 werd Sphereon gekozen voor de tweede fase van het SPRIND-programma. De onboarding ontwikkelde zich verder, maar de focus verschoof naar nieuwe kansen in de wallet, zoals meer experimentele ideeën als een conversational interface, en betere toegankelijkheid.",
    },
    {
      t: "points",
      items: [
        {
          title: "Conversational UI",
          text: "Onderzoeken hoe gewone taal ingewikkelde flows rond identiteit en digitale bewijzen in de wallet eenvoudiger kan maken.",
        },
        {
          title: "Toegankelijkheid",
          text: "De wallet verbeteren met toegankelijke interactiepatronen, verfijnde componenten en betere bruikbaarheid, zodat digitale identiteit voor meer mensen werkt.",
        },
      ],
    },

    { t: "h2", text: "Wat ik leerde" },
    {
      t: "p",
      text: "Ontwerpen voor digitale identiteit gaat veel verder dan begrijpelijke schermen. Vertrouwen opbouwen, onbekende technologie uitleggen en keuzes steeds toetsen bij gebruikers en betrokkenen bleek net zo belangrijk als het visuele ontwerp. Werken in een internationaal innovatieprogramma maakte me ook beter in samenwerken over vakgebieden heen en snel verbeteren.",
    },
    {
      t: "p",
      text: "Het bevestigde mijn overtuiging dat de beste gebruikerservaringen ontstaan door blijven samenwerken, testen en verbeteren, niet in één designsprint.",
    },
  ],
};
