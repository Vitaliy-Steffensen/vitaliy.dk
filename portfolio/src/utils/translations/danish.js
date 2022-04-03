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
    case "Front-end developer":
      return "Front-end udvikler";
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

    case "As a developer":
      return "Som en udvikler";
    case "As a dedicated developer, I've built anything from video " +
      "games to computer software. Now my passion lies in website " +
      "development. I have been programming longer than I can remember " +
      "and have always admired the startup and scale-up industry.":
      return (
        "Som en dedikeret udvikler har jeg bygget alt fra video " +
        "spil til computersoftware. Nu ligger min passion i web " +
        "udvikling. Jeg har programmeret længere, end jeg kan huske" +
        "og har altid beundret startup- og scale-up-industrien."
      );

    case "Programming teacher":
      return "Underviser i programmering";
    case "Today":
      return "Idag";
    case "Taught programming to over 20 different students. My current team contains eight motivated students learning C#.":
      return "Undervist i programmering til over 20 forskellige studerende. Mit nuværende hold indeholder otte motiverede elever, der lærer C#.";
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
