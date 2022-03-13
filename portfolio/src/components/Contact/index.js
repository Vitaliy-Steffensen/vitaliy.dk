import React, { useEffect, useState } from "react";
import TimelinePage from "../Templates/TimelinePage";
import "./Contact.css";
import Form from "./components/Form";
import { fields } from "./contactFields";
import MultiStepFormProgressBar from "./components/Form/MultiStepFormProgressBar";
import { GithubOutlined } from "@ant-design/icons";
import ExternalButton from "../elements/ExternalButton";
import emailjs from "emailjs-com";
import { Spin } from "antd";
import { LoadingOutlined, CheckCircleOutlined } from "@ant-design/icons";
import T from "../../utils/translations/TranslatedText/index.js";

export default function Contact() {
  const [selectedStep, setSelectedStep] = useState(1);
  const [emailData, setEmailData] = useState({
    email: "",
    name: "",
    organisation: "",
    subject: "",
    message: "",
  });
  const [sendingEmail, setSendingEmail] = useState(false);

  useEffect(() => {
    const formSteps = [...document.querySelectorAll("[data-step]")];

    formSteps.forEach((step) => {
      showActiveForm(step);
      step.addEventListener("animationend", (e) => {
        showActiveForm(e.target);
      });
    });
  }, []);

  function showActiveForm(element) {
    if (element.classList.contains("active"))
      element.classList.remove("hidden");
    else element.classList.add("hidden");
  }

  useEffect(() => {
    if (selectedStep === 3) {
      setSendingEmail(true);

      emailjs
        .send(
          "gmail",
          "portfolio_template",
          emailData,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(
          () => {
            setSendingEmail(false);
          },
          (error) => {
            alert(
              "Email failed to deliver. You can send an email manualy to: vitaliysteffensen@gmail.com"
            );
            console.warn("Email error:", error);
          }
        );
    }
  }, [selectedStep]);

  return (
    <TimelinePage title="Get in touch" link="contact" allowOverflow>
      <div className="contact">
        <MultiStepFormProgressBar
          steps={["YOUR INFO", "MESSAGE", "CONFIRMATION"]}
          selectedStep={selectedStep}
        />

        <form data-multi-step className="multi-step-form">
          <Form
            stepNumber={1}
            stepTitle="YOUR INFO"
            selectedStep={selectedStep}
            setSelectedStep={setSelectedStep}
            setEmailData={setEmailData}
            fields={fields[1]}
          />
          <Form
            stepNumber={2}
            stepTitle="MESSAGE"
            selectedStep={selectedStep}
            setSelectedStep={setSelectedStep}
            fields={fields[2]}
            setEmailData={setEmailData}
            hasPrevious
            isSubmit
          />
          <div
            className={`form-card ${selectedStep === 3 ? "active" : "hide"}`}
            data-step="3"
          >
            {sendingEmail ? (
              <>
                <h3 className="step-title">
                  <T>Sending...</T>
                </h3>
                <Spin
                  indicator={
                    <LoadingOutlined
                      className="contact__confirmation-icon"
                      spin
                    />
                  }
                />
              </>
            ) : (
              <>
                <h3 className="step-title">
                  <T>Your email has been sent.</T>
                </h3>
                <CheckCircleOutlined className="contact__confirmation-icon" />
              </>
            )}
          </div>
        </form>

        <a
          href="https://github.com/Vitaliy-Steffensen/vitaliysteffensen.com-FE"
          rel="noreferrer"
          target="_blank"
          className="contact__source-container"
        >
          <ExternalButton
            title="Source"
            backgroundColor="#DE4721"
            color="#242424"
            icon={<GithubOutlined />}
          />
        </a>
      </div>
    </TimelinePage>
  );
}
