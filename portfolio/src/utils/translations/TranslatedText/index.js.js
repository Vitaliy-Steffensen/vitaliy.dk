import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import translateToDanish from "../danish";

export default function T({ children }) {
  const [translatedText, setTranslatedText] = useState(children);
  const language = useSelector((state) => state.language);

  useEffect(() => {
    switch (language) {
      case "english":
        return setTranslatedText(children);
      case "danish":
        return setTranslatedText(translateToDanish(children));
      default:
        return;
    }
  }, [language]);

  return <>{translatedText}</>;
}
