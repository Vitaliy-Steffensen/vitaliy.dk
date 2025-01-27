import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../../../helpers/constants";
import T from "../../../../utils/translations/TranslatedText/index.js";
import InternalButton from "../../../elements/InternalButton";
import FormField from "./components/FormField";
import "./Form.css";

export default function Form({
  stepNumber,
  stepTitle,
  fields,
  selectedStep,
  setSelectedStep,
  setEmailData,
  hasPrevious,
  isSubmit,
}) {
  const initialValues = fields.reduce(
    (obj, field) => ({
      ...obj,
      [field.name]: "",
    }),
    {}
  );
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const getFormErrors = (values) => {
    const errors = {};

    fields.map((field) => {
      if (field.required && !values[field.name]) {
        errors[field.name] = `${capitalizeFirstLetter(field.name)} is required`;
      } else if (field.formatValidation && field.formatValidation(values))
        errors[field.name] = field.formatValidation(values);
    });

    return errors;
  };

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const gotoPreviousStep = (e) => setSelectedStep((prevState) => prevState - 1);

  const gotoNextStep = (e) => {
    e.preventDefault();

    const errors = getFormErrors(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSelectedStep((prevState) => prevState + 1);
      setEmailData((prevState) => {
        return {
          ...prevState,
          ...formValues,
        };
      });
    }
  };

  return (
    <div
      className={`form-card ${selectedStep === stepNumber ? "active" : "hide"}`}
      data-step={stepNumber}
    >
      <h3 className="step-title">
        <T>{stepTitle}</T>
      </h3>
      {fields?.map((field, i) => (
        <FormField
          field={field}
          value={formValues[field.name]}
          handleValueChange={handleValueChange}
          error={formErrors[field.name]}
          key={i}
        />
      ))}
      <div className="multi-step-form__buttons-container">
        {hasPrevious && (
          <InternalButton
            className="multi-step-form__button"
            type="button"
            onClick={gotoPreviousStep}
          >
            <T>Previous</T>
          </InternalButton>
        )}
        <InternalButton
          className="multi-step-form__button"
          type="button"
          onClick={gotoNextStep}
        >
          <T>{isSubmit ? "Submit" : "Next"}</T>
        </InternalButton>
      </div>
    </div>
  );
}
