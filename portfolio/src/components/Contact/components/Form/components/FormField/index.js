import React from "react";
import "./FormField.css";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default function FormField({ field, value, handleValueChange, error }) {
  const { name, textEditor } = field;

  const handleEditorChange = (editorState) => {
    const editorContent = editorState.getCurrentContent();
    const editorHtml = draftToHtml(convertToRaw(editorContent));

    const e = {
      target: {
        name,
        value: editorContent.hasText() ? editorHtml : "",
      },
    };

    handleValueChange(e);
  };

  return (
    <div className="form-field">
      {textEditor ? (
        <Editor
          wrapperClassName={`form-field__text-editor ${
            error && "form-field__input--error"
          }`}
          editorClassName="form-field__text-editor-content"
          toolbarClassName="toolbar-class"
          onEditorStateChange={handleEditorChange}
          placeholder={name}
        />
      ) : (
        <input
          className={`form-field__input ${error && "form-field__input--error"}`}
          type={name}
          name={name}
          id={name}
          onChange={handleValueChange}
          value={value}
          placeholder={name}
        />
      )}
      {error && <p className="form-field__error">{error}</p>}
    </div>
  );
}
