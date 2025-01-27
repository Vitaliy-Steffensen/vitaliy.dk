const translate = (text) => {
  switch (text) {
    case "HELLO":
      return "HEY";
    case "english":
      return "engelsk";
    case "danish":
      return "dansk";
    case "Resume":
      return "CV";
    case "I am":
      return "Jeg er";
    case "Technical Lead":
      return "Teknisk leder";
    case "with design & back-end experience":
      return "med design & back-end erfaring";

    case "About me":
      return "Om mig";
    case "Experience":
      return "Erfaring";
    case "Recent project":
      return "Seneste projekt";
    case "Teck stack & skills":
      return "Teck stack & færdigheder";
    case "Get in touch":
      return "Kom i kontakt";

    case "With expertise":
      return "Med ekspertise";
    case `
      With proven expertise in managing complex, cross-functional
projects and streamlining processes, I have consistently
delivered measurable results. In the most recents months I
both drove initiatives that increased revenue by millions, and
implemented process improvements saving other companies
up to 50 hours per month. I am deeply passionate about
fostering collaboration and empowering others to make an
impact, and working towards sustainable success.
      `:
      return (
        "Med dokumenteret ekspertise i at håndtere komplekse, tværfaglige projekter og optimere processer, har jeg konsekvent leveret målbare resultater. I de seneste måneder har jeg både drevet initiativer, der har øget omsætningen med millioner, og implementeret procesforbedringer, der har sparet andre virksomheder op til 50 timer om måneden. Jeg brænder dybt for at fremme samarbejde og give andre mulighed for at gøre en forskel, samtidig med at jeg arbejder hen imod bæredygtig succes."
      );
    case "Tech Lead / Frontend developer": return "Tech Lead / Frontend developer"
    case `With the freedom to shape projects beyond frontend development i effectively
managed stakeholders and leveraged data insights to guide key product decisions,
helping drive millions in revenue growth. 
I led major initiatives in different teams including anything from making automation
tools saving others time on a daily basis to taking charge of platform migration and
architectural discussions. I have also spent time optimizing development processes and supporting developer
interviews & integration. With a large cross country area i congruently optimize processes, enhance scalability,
and supported developer interviews and integration.`:
      return `Med friheden til at forme projekter ud over frontend-udvikling, har jeg effektivt håndteret interessenter og udnyttet dataindsigter til at styre vigtige produktbeslutninger, hvilket har bidraget til millioner i omsætningsvækst.
Jeg har ledet større initiativer på tværs af forskellige teams, herunder alt fra at skabe automatiseringsværktøjer, der sparer andre tid dagligt, til at tage ansvar for platformmigration og arkitekturdrøftelser.
Jeg har også brugt tid på at optimere udviklingsprocesser og støtte udviklerinterviews & integration.
Med et stort tværgående geografisk område optimerer jeg konsekvent processer, forbedrer skalerbarhed og understøtter udviklerinterviews og integration.`
    
    case "Programming Instructor":
      return "Underviser i programmering";
    case "Today":
      return "Idag";
    case `Provided remote, one-on-one software development lessons through Superprof
(2022), guiding students on diverse programming topics.
Delivered hands-on C# and game development training at Coding Pirates  for teens
(2019-2022).`:
      return `Gav fjernundervisning i softwareudvikling én-til-én gennem Superprof (2022), hvor jeg vejledte studerende i forskellige programmeringsemner.
Leverede praktisk C# og spiludviklingstræning hos Coding Pirates for teenagere (2019-2022).`
    case "March 2021":
      return "Marts 2021";

    case "Website":
      return "Hjemmeside";
    case "I built the entire secondhand platform using a WordPress base. Here I worked " +
      "with PHP and SQL for the back-end and JS, HTML, and CSS for the front-end. " +
      "I created a custom integration that managed the whole transactions system and provide an " +
      "interface for the buyers and sellers. To archive the desired design and user " +
      "journey, I made a ton of theme and plugin customizations.":
      return (
        "Jeg byggede hele platformen ved hjælp af en WordPress base. Her arbejdede jeg " +
        "med PHP og SQL til back-end'en og JS, HTML og CSS som front-end." +
        "Jeg udarbejdede en integration, der styrede hele transaktionssystemet og giver et " +
        "interface for køberne og sælgerne. jeg lavede et væld af tema- og plugin-tilpasninger" +
        ", for at opnå det ønskede design og user journy."
      );
    case "Inventory system":
      return "Lagessystem";
    case "My favorite invention is the intelligent inventory system I t using C#. This was " +
      "in charge of handling new products, managing products, handling transactions, and invoices. " +
      "This system was the thing that made it possible to efficiently manage a large number of single " +
      "stock items fast and cheaply.":
      return (
        "Min favoritopfindelse er det intelligente lagersystem, jeg byggede i C#. Dette var " +
        "ansvarlig for håndtering af nye produkter, behandling af eksisterende produkter, håndtering af transaktioner og fakturaer." +
        "Dette system var det, der gjorde det muligt effektivt at administrere et stort antal af enkelt " +
        "varer hurtigt og billigt."
      );
    case "I built the app in React native with expo, using injected javascript to fetch data from the website." +
      " And using typescript for type-checking.":
      return (
        "Jeg udviklede appen i React native med expo, ved at bruge injiceret javascript til at hente data fra hjemmesiden." +
        " Og bruge typescript til typekontrol."
      );
    case "Juniour Front-end Developer":
      return "Juniour Front-end Udvikler";
    case "As a front-end developer, I worked on the platform. The platform is developed using modern " +
      "technologies, including React js, GraphQL, Redux, TypeScript, Storybook, and Ant Design." +
      " I alone developed an internal CMS sytem and converted the design language to ant Design":
      return (
        "Som front-end udvikler arbejdede jeg på platformen. Platformen er udviklet ved hjælp af moderne " +
        "teknologier, herunder React js, GraphQL, Redux, TypeScript, Storybook. " +
        "Jeg udviklede alene et internt CMS-system og konverterede designsproget til ant Design"
      );
    case "Worked with the marketing team and the design team to refactor the website using a" +
      " custom integration I developed, to help gain their largest client":
      return (
        "Arbejdede med marketingteamet og designteamet for at omstrukturere hjemmesiden ved hjælp af en" +
        "tilpasset integration, jeg udviklede, for at hjælpe med at få deres største kunde"
      );

    case "Download the":
      return "Download mit";
    case "to see the full list.":
      return ",for at se hele listen.";
    case "Most recent projects":
      return "Seneste projekter";
    case "Design languages (antD & MUI)":
      return "Design sprog (antD & MUI)";
    case "Other skills":
      return "Andre færdigheder";
    case "Agile project management":
      return "Agil projektledelse";

    case "YOUR INFO":
      return "DIN INFO";
    case "MESSAGE":
      return "BESKED";
    case "CONFIRMATION":
      return "BEKRÆFTELSE";
    case "Previous":
      return "Forrige";
    case "Next":
      return "Næste";
    case "Submit":
      return "Indsend";
    case "name":
      return "navn";
    case "subject":
      return "emne";
    case "message":
      return "besked";

    case "Sending...":
      return "Sender...";
    case "Your email has been sent.":
      return "Din email er blevet sendt.";
    case "Source":
      return "Kilde";

    default:
      return text;
  }
};

export default translate;
