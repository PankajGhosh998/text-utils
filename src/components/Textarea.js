import React from "react";
import { useState } from "react";

export default function Textarea(prop) {
  const [userText, setUserText] = useState("");

  const onChnageHandler = (event) => {
    setUserText(event.target.value);
  };
  const upClickHandler = () => {
    setUserText(userText.toUpperCase());
    prop.showAlert("Converted to uppercase","success");
  };
  const loClickHandler = () => {
    setUserText(userText.toLowerCase());
    prop.showAlert("Converted to lowercase","success");
  };
  const clearClickHandler = () => {
    setUserText("");
    prop.showAlert("Cleared","success");
  };
  const copyClickHandler = () => {
    var copyText= document.getElementById("textarea1")
    copyText.select();
    navigator.clipboard.writeText(copyText.value)
    prop.showAlert("Copied to clipboard","success");
  };
  return (
    <div>
      <h2 className="my-3">{prop.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textarea1"
          onChange={onChnageHandler}
          placeholder="Enter text here"
          rows="10"
          value={userText}
          style={{
            backgroundColor: prop.mode === "dark" ? "#ced4da" : "white",
          }}
        ></textarea>
      </div>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={upClickHandler}
      >
        UPPERCASE
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={loClickHandler}
      >
        lowercase
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={clearClickHandler}
      >
        Clear text
      </button>
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={copyClickHandler}
      >
        Copy
      </button>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {userText === "" ? "0" : userText.split(" ").length} words and{" "}
          {userText.length} charracter
        </p>

        <hr />

        <h2 style={{ display: "inline" }}>Preview </h2>
        <small>
          {userText === "" ? "0" : 0.008 * userText.split(" ").length} minutes
          time to read
        </small>
        <p className="my-3">{userText}</p>
      </div>
    </div>
  );
}
