import React, { useEffect } from "react";
import "./GreetingsPopup.css";
import { motion } from "framer-motion";

function GreetingsPopup({ setVisible }) {
  const onComplete = () => setVisible(false);

  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={{ x: 0, y: "-100vh" }}
      exit={{ x: 0, y: "-100vh" }}
      transition={{
        duration: 1,
        delay: 1,
      }}
      onAnimationComplete={onComplete}
    >
      <div className="greetingsPopup">
        <span className="greetingsPopup__title">HELLO</span>
      </div>
    </motion.div>
  );
}

export default GreetingsPopup;
