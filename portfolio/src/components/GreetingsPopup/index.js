import React, { useState, useEffect } from "react";
import T from "../../utils/translations/TranslatedText/index.js";
import "./GreetingsPopup.css";

function GreetingsPopup() {
  const [disapearanimation, setDisapearanimation] = useState(false);
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    setDisapearanimation(true);
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`greetingsPopup ${
            disapearanimation && "greetingsPopup--disapear"
          }`}
        >
          <span className="greetingsPopup__title">
            <T>HELLO</T>
          </span>
        </div>
      )}
    </>
  );
}

export default GreetingsPopup;
