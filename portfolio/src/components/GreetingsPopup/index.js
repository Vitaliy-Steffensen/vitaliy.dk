import React, { useState, useEffect } from "react";
import "./GreetingsPopup.css";

function GreetingsPopup() {
  const [disapearanimation, setDisapearanimation] = useState(false);
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisapearanimation(true);
    }, 1000);
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
          <span className="greetingsPopup__title">HELLO</span>
        </div>
      )}
    </>
  );
}

export default GreetingsPopup;
