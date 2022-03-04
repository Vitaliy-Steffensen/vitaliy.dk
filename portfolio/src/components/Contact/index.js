import React, { useEffect, useRef, useState } from "react";
import TimelinePage from "../Templates/TimelinePage";
import "./Contact.css";
import Form from "./components/Form";
import { fields } from "./contactFields";
import MultiStepFormNavigation from "./components/Form/MultiStepFormNavigation";

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
      <MultiStepFormNavigation />

      <form data-multi-step className="multi-step-form">
        <Form
          stepNumber={1}
          stepTitle="this is step 1"
          selectedStep={selectedStep}
          setSelectedStep={setSelectedStep}
          fields={fields[1]}
        />
        <Form
          stepNumber={2}
          stepTitle="this is step 2"
          selectedStep={selectedStep}
          setSelectedStep={setSelectedStep}
          fields={fields[2]}
          hasPrevious
          isSubmit
        />
        <div
          className={`card ${selectedStep === 3 ? "active" : "hide"}`}
          data-step="3"
        >
          <h3 className="step-title">Email Has been sent</h3>
        </div>
      </form>
    </TimelinePage>
  );
}
