import "./App.css";

import React, { useState } from "react";

function App() {
  return (
    <>
    <div>
      <div className="navbar">
        <p>Text analyser</p>
      </div>
      <TextForm />
      </div>
    </>
  );
}

export default App;

const TextForm = (props) => {
  const UpperCase = () => {
    // console.log('upper hitted')
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const lowercase = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const Clear = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    var text = document.getElementById("Textform");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const RemoveExtraaSpaces = () => {
    let newtext = Text.split(/[ ]+/);
    setText(newtext.join(" "));
  };

  const OnChange = (event) => {
    setText(event.target.value);
  };

  const [Text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="">
          <textarea
            className="form-control"
            value={Text}
            onChange={OnChange}
           placeholder="Enter your text here"
            id="Textform"
            rows="8"
          ></textarea>
          <button className=" buttons" onClick={UpperCase}>
            to Upper case
          </button>
          <button className=" buttons" onClick={lowercase}>
            {" "}
            Lower case
          </button>
          <button className=" buttons" onClick={handleCopy}>
            copy to clipboard
          </button>
          <button className=" buttons" onClick={Clear}>
            Clear
          </button>
          <button className=" buttons" onClick={RemoveExtraaSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container ">
        <h1 className="mainHeading">Text-Summary</h1>
        <div className="container ">
          <p class="">
            <p className="container subHeading ">
              Word : <span>{Text.split(" ").length - 1}</span>
            </p>
            <p className="container subHeading ">
              Character: <span>{Text.length}</span>{" "}
            </p>
            <p className="container subHeading ">
              Reading time : <span>{0.008 * Text.split(" ").length}</span>{" "}
            </p>
          </p>
          <hr style={{ width: "100%" }} />
        </div>
        <h2 className="mainHeading">Preview</h2>
        <p className="preview">
          {Text.length > 0 ? Text : "Enter your text here to preview"}
        </p>
      </div>
    </>
  );
};
