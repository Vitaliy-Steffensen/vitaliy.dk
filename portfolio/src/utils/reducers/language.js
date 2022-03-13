const languageReducer = (state = "english", action) => {
  switch (action.type) {
    case "ENGLISH":
      return "english";
    case "DANISH":
      return "danish";
    default:
      return "english";
  }
};

export default languageReducer;
