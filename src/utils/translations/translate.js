import translateToDanish from "./danish";

const tranlate = (language, text) => {
  switch (language) {
    case "english":
      return text;
    case "danish":
      return translateToDanish(text);
    default:
      return;
  }
};

export default tranlate;
