import React from "react";
import "./FormField.css";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default function FormField({ field, value, handleValueChange, error }) {
  const { name, required, textEditor } = field;

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
    <div className="form-group">
      <label htmlFor={name}>
        {name}
        {required && " *"}
      </label>
      {textEditor ? (
        <Editor
          wrapperClassName="textBox"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          onEditorStateChange={handleEditorChange}
        />
      ) : (
        <input
          type={name}
          name={name}
          id={name}
          onChange={handleValueChange}
          value={value}
        />
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
