import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handelUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("converted to uppercase", "success");
  };
  const handelUpLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("converted to lowercase", "success");
  };
  const handelclear = () => {
    let newtext = "";
    setText(newtext);
    props.showalert("text cleared", "danger");
  };

  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            id="my-box"
            rows="8"
          ></textarea>
        </div>
        <div className="grid mx-3">
          <button
            type="button"
            className="btn btn-primary "
            onClick={handelUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            className="btn btn-success mx-3 "
            onClick={handelUpLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handelclear}
          >
            Clear text
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Word's and {text.length} Character's
        </p>
        <p>{0.008 * text.split(" ").length}min. Average time to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter someting in textbox above to preview it here."}
        </p>
      </div>
    </>
  );
}
