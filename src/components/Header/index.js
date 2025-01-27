import React, { useEffect } from "react";
import Dropdown from "../elements/Dropdown";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { danish, english } from "../../utils/actions";
import useCookie from "react-use-cookie";
import ResumeButton from "../elements/ResumeButton";

export default function Header(e) {
  const [languageToken, setLanguageToken] = useCookie("language", "english");

  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();

  useEffect(() => {
    language !== languageToken &&
      dispatch(languageToken === "english" ? english() : danish());
  }, []);

  const setLanguage = (val) => {
    dispatch(val === "english" ? english() : danish());
    setLanguageToken(val);
  };

  return (
    <div className="header">
      <Dropdown
        placeholder={"Deliver to"}
        selected={language}
        setSelected={setLanguage}
        options={["english", "danish"]}
      />
      <ResumeButton />
    </div>
  );
}
