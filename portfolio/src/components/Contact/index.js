import React, { useEffect, useState } from "react";
import TimelinePage from "../Templates/TimelinePage";
import "./Contact.css";
import Form from "./components/Form";
import { fields } from "./contactFields";
import MultiStepFormProgressBar from "./components/Form/MultiStepFormProgressBar";
import { GithubOutlined } from "@ant-design/icons";
import ExternalButton from "../elements/ExternalButton";

export default function Contact() {
  const [selectedStep, setSelectedStep] = useState(1);

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
    selectedStep === 3 && console.log("set loading & send email");
  }, [selectedStep]);

  return (
    <TimelinePage title="Contact" link="contact" contentMargin={200}>
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
            fields={fields[1]}
          />
          <Form
            stepNumber={2}
            stepTitle="MESSAGE"
            selectedStep={selectedStep}
            setSelectedStep={setSelectedStep}
            fields={fields[2]}
            hasPrevious
            isSubmit
          />
          <div
            className={`form-card ${selectedStep === 3 ? "active" : "hide"}`}
            data-step="3"
          >
            <h3 className="step-title">CONFIRMATION</h3>
          </div>
        </form>

        <div className="contact__source-container">
          <ExternalButton
            title="Source"
            link="https://github.com/Vitaliy-Steffensen/vitaliysteffensen.com-FE"
            backgroundColor="#DE4721"
            color="#242424"
            icon={<GithubOutlined />}
          />
        </div>
      </div>
    </TimelinePage>
  );
}
