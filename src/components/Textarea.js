import React from "react";
import { useState } from "react";

export default function Textarea(prop) {
  const [userText, setUserText] = useState("");

  const onChnageHandler = (event) => {
    setUserText(event.target.value);
  };
  const upClickHandler = () => {
    setUserText(userText.toUpperCase());
  };
  const loClickHandler = () => {
    setUserText(userText.toLowerCase());
  };
  const clearClickHandler = () => {
    setUserText("");
  };

  return (
    <div>
      <h2>{prop.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          onChange={onChnageHandler}
          placeholder="Enter text here"
          rows="10"
          value={userText}
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

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {userText.split(" ").length} words and {userText.length} charracter
        </p>

        <hr />

        <h2 style={{ display: "inline" }}>Preview </h2>
        <small>{0.008 * userText.split(" ").length} minutes time to read</small>
        <p className="my-3">{userText}</p>
      </div>
    </div>
  );
}