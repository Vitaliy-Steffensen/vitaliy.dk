import { DownloadOutlined } from "@ant-design/icons";
import React from "react";
import InternalButton from "../InternalButton";
import { saveAs } from "file-saver";
import resume from "../../../assets/other/Vitaliy_Steffensen-resume.pdf";
import T from "../../../utils/translations/TranslatedText/index.js";

export default function index({ style }) {
  const downloadResume = (e) => {
    e.preventDefault();
    saveAs(resume, "Vitaliy_Steffensen-resume.pdf");
  };

  return (
    <InternalButton
      style={
        style
          ? style
          : {
              color: "#242424",
              background: "transparent",
              padding: "2px 20px",
            }
      }
      onClick={downloadResume}
    >
      <T>Resume</T>&nbsp;
      <DownloadOutlined />
    </InternalButton>
  );
}
