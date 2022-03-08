//Images
import ZolyLogo from "../../assets/Images/experience/ZolyLogo.png";
import ZolyWebsite from "../../assets/Images/experience/zolyWebsite.png";
import ZolyInventory from "../../assets/Images/experience/zolyInventorySystem.png";
import ZolyApp from "../../assets/Images/experience/zolyApp.png";
import WasteHeroLogo from "../../assets/Images/experience/WasteHeroLogo.png";
import WasteHeroWebsite from "../../assets/Images/experience/WasteHeroWebsite.png";
import WasteHeroPlatform from "../../assets/Images/experience/WasteHeroPlatform.png";
import CodingPiratesLogo from "../../assets/Images/experience/CodingPiratesLogo.png";
import CodingPiratesComputer from "../../assets/Images/experience/CodingPiratesComputer.png";
//Videos
import zolyApp from "../../assets/Videos/experience/zoly-app.mp4";

export const experiences = [
  {
    img: ZolyLogo,
    title: "CEO & Lead Developer",
    fromDate: "Septemper 2020",
    toDate: "March 2021",
    tasks: [
      {
        img: ZolyWebsite,
        title: "Website",
        description:
          "I build the entire secondhand platform using a WordPress base. Here I worked " +
          "with PHP and SQL for the back-end and JS, HTML, and CSS for the front-end. " +
          "I created a plugin that could manage all the transactions and provide an " +
          "interface for the buyers and sellers. To archive the desired design and user " +
          "journey, I made a ton of theme and plugin customizations.",
      },
      {
        img: ZolyInventory,
        title: "Inventory system",
        description:
          "My favorite invention is the intelligent inventory system I build using C#. This was " +
          "in charge of handling new products, managing products, handling transactions, and invoices. " +
          "This system was the thing that made it possible to efficiently manage a large number of single " +
          "stock items fast and cheaply.",
      },
      {
        img: ZolyApp,
        video: zolyApp,
        title: "App",
        description:
          "I build the app in React native with expo, using injected javascript to fetch the website." +
          " And using typescript for type-checking.",
      },
    ],
  },
  {
    img: WasteHeroLogo,
    title: "Juniour Front-end Developer",
    fromDate: "June 2021",
    toDate: "October 2021",
    tasks: [
      {
        img: WasteHeroPlatform,
        title: "Platform",
        description:
          "As a front-end developer, I worked on the platform. The platform is developed using modern " +
          "technologies, including React js, GraphQL, Redux, TypeScript, Storybook, and Ant Design.",
      },
      {
        img: WasteHeroWebsite,
        title: "Website",
        description:
          "In WasteHero i also had the lead on the custom wordpress plugin i build." +
          " This plugin provided custom functionalities for the designers to use.",
      },
    ],
  },
  {
    img: CodingPiratesLogo,
    title: "Programming teacher",
    fromDate: "August 2019",
    toDate: "Today",
    tasks: [
      {
        img: CodingPiratesComputer,
        title: "C#",
        description:
          "I have been teaching programming for over two and a half years, completely voluntary." +
          " In Coding Pirates i mainly teach C# and NuGet packages.",
      },
    ],
  },
];
