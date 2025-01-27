import SchibstedLogo from "../../assets/Images/experience/schibstedLogo.png";
import schibstedAdvertisingService from "../../assets/Images/experience/schibstedAdvertisingService.png";
import ZolyLogo from "../../assets/Images/experience/ZolyLogo.png";
import ZolyWebsite from "../../assets/Images/experience/zolyWebsite.png";
import ZolyInventory from "../../assets/Images/experience/zolyInventorySystem.png";
import ZolyApp from "../../assets/Images/experience/zolyApp.png";
import WasteHeroLogo from "../../assets/Images/experience/WasteHeroLogo.png";
import WasteHeroWebsite from "../../assets/Images/experience/WasteHeroWebsite.png";
import WasteHeroPlatform from "../../assets/Images/experience/WasteHeroPlatform.png";
import CodingPiratesLogo from "../../assets/Images/experience/CodingPiratesLogo.png";
import CodingPiratesComputer from "../../assets/Images/experience/CodingPiratesComputer.png";

export const experiences = [
  {
    img: SchibstedLogo,
    title: "Tech Lead / Frontend developer",
    fromDate: "May 2022",
    toDate: "Today",
    tasks: [
      {
        img: schibstedAdvertisingService,
        title: "Formerly Ebay",
        description:
            `With the freedom to shape projects beyond frontend development i effectively
managed stakeholders and leveraged data insights to guide key product decisions,
helping drive millions in revenue growth. 
I led major initiatives in different teams including anything from making automation
tools saving others time on a daily basis to taking charge of platform migration and
architectural discussions. I have also spent time optimizing development processes and supporting developer
interviews & integration. With a large cross country area i congruently optimize processes, enhance scalability,
and supported developer interviews and integration.`,
      },
    ],
  },
  {
    img: CodingPiratesLogo,
    title: "Programming Instructor",
    fromDate: "August 2019",
    toDate: "June 2022",
    tasks: [
      {
        img: CodingPiratesComputer,
        title: "C#",
        description:
          `Provided remote, one-on-one software development lessons through Superprof
(2022), guiding students on diverse programming topics.
Delivered hands-on C# and game development training at Coding Pirates  for teens
(2019-2022).`,
      },
    ],
  },
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
          "I created a custom integration that managed the whole transactions system and provide an " +
          "interface for the buyers and sellers. To achieve the desired design and user " +
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
        title: "App",
        description:
          "I built the app in React native with expo, using injected javascript to fetch data from the website." +
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
          "technologies, including React js, GraphQL, Redux, TypeScript, Storybook, and Ant Design." +
          " I alone developed an internal CMS sytem and converted the design language to ant Design",
      },
      {
        img: WasteHeroWebsite,
        title: "Website",
        description:
          "Worked with the marketing team and the design team to refactor the website using a" +
          " custom integration I developed, to help gain their largest client",
      },
    ],
  },
];
