import React, { useEffect, useRef, useState } from "react";
import TimelinePage from "../Templates/TimelinePage";
import "./Contact.css";

export default function Contact() {
  const multiStepForm = useRef();
  const [selectedStep, setSelectedStep] = useState(1);
  //var formSteps = [...document.querySelectorAll("[data-step]")];
  let currentStep = 1;

  useEffect(() => {
    const formSteps = [...document.querySelectorAll("[data-step]")];

    formSteps.forEach((step) => {
      console.log("step ", step);
      if (step.classList.contains("active")) step.classList.remove("hidden");
      else step.classList.add("hidden");

      step.addEventListener("animationend", (e) => {
        console.log("e.target ", e.target.getAttribute("data-step"));
        console.log("e.target.classList ", e.target.classList);

        if (e.target.classList.contains("active"))
          e.target.classList.remove("hidden");
        else e.target.classList.add("hidden");
        //   e.target.classList.toggle(
        //     "hidden",
        //     !e.target.classList.contains("active")
        //   );
        //e.target.classList.toggle("hide", !e.target.classList.contains("active"));
        //formSteps[currentStep].classList.remove("hide");
        //   if (e.target.classList.contains("active"))
        //     e.target.classList.remove("hide");
        //   else e.target.classList.add("hide");
      });
    });
  }, []);

  //   formSteps.forEach((el) => {
  //     console.log("el ", el);
  //     if (el.classList.contains("active")) el.classList.remove("hidden");
  //     else el.classList.add("hidden");

  //     step.addEventListener("animationend", (e) => {
  //       console.log("e.target ", e.target.getAttribute("data-step"));
  //       console.log("e.target.classList ", e.target.classList);

  //       if (e.target.classList.contains("active"))
  //         e.target.classList.remove("hidden");
  //       else e.target.classList.add("hidden");
  //   }
  //   });

  //   formSteps.forEach((step) => {
  //     step.addEventListener("animationend", (e) => {
  //       console.log("e.target ", e.target.getAttribute("data-step"));
  //       console.log("e.target.classList ", e.target.classList);

  //       if (e.target.classList.contains("active"))
  //         e.target.classList.remove("hidden");
  //       else e.target.classList.add("hidden");
  //       //   e.target.classList.toggle(
  //       //     "hidden",
  //       //     !e.target.classList.contains("active")
  //       //   );
  //       //e.target.classList.toggle("hide", !e.target.classList.contains("active"));
  //       //formSteps[currentStep].classList.remove("hide");
  //       //   if (e.target.classList.contains("active"))
  //       //     e.target.classList.remove("hide");
  //       //   else e.target.classList.add("hide");
  //     });
  //   });

  const gotoNextStep = () => {
    currentStep += 1;

    setSelectedStep((prevState) => {
      const newState = prevState + 1;
      currentStep += 1;

      //FormValidations
      //   const formSteps = [...document.querySelectorAll("[data-step]")];
      //   console.log("formSteps ", formSteps);

      //   //const inputs = [...formSteps[prevState].qurySelectorAll("input")];
      //   const inputs = document.getElementById("fds").i;
      //   console.log("inputs ", inputs);

      return newState;
    });
  };

  const gotoPreviousStep = () => {
    currentStep -= 1;
    setSelectedStep((prevState) => {
      return prevState - 1;
    });
  };

  return (
    <TimelinePage title="Contact" link="contact" contentMargin={200}>
      <form data-multi-step ref={multiStepForm} className="multi-step-form">
        <div
          className={`card ${selectedStep === 1 ? "active" : "hide"}`}
          data-step="1"
          key="1"
        >
          <h3 className="step-title">This is step 1</h3>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Email</label>
            <input type="password" name="password" id="password" />
          </div>
          <button type="button" onClick={gotoNextStep}>
            Next
          </button>
        </div>
        <div
          className={`card ${selectedStep === 2 ? "active" : "hide"}`}
          data-step="2"
          key="2"
        >
          <h3 className="step-title">This is step 2</h3>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="username" name="username" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Email</label>
            <input type="address" name="address" id="address" />
          </div>
          <button type="button" onClick={gotoPreviousStep}>
            Previous
          </button>
          <button type="button" onClick={gotoNextStep}>
            Next
          </button>
        </div>
        <div
          className={`card ${selectedStep === 3 ? "active" : "hide"}`}
          data-step="3"
          key="3"
        >
          <h3 className="step-title">This is step 3</h3>
          <div className="form-group">
            <label htmlFor="subject">Email</label>
            <input type="subject" name="subject" id="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Email</label>
            <input type="message" name="message" id="message" />
          </div>
          <button type="button" onClick={gotoPreviousStep}>
            Previous
          </button>
        </div>
      </form>
    </TimelinePage>
  );
}
