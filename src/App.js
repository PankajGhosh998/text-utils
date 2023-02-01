import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({ msg: massage, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const modeChangeHandler = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
      showAlert("Darkmode on", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Darkmode off", "success");
    }
  };
  return (
    <Router>
      <Navbar
        brandName="TextUtils"
        mode={mode}
        toggleMode={modeChangeHandler}
      />
      <Alert alert={alert} />
      <Routes>
        <Route
          path="/about"
          element={
            <About
              heading="About Us"
              mode={mode}
              toggleMode={modeChangeHandler}
            />
          }
        />
        <Route
          path="/"
          element={
            <div className="container my-3">
              <Textarea
                heading="Text analyzer"
                mode={mode}
                toggleMode={modeChangeHandler}
                showAlert={showAlert}
              />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
