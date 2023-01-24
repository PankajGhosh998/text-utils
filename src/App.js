import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
// import About from './components/About'

function App() {
  const [mode, setMode] = useState("light");

  const modeChangeHandler = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <div>
      <Navbar
        brandName="TextUtils"
        mode={mode}
        toggleMode={modeChangeHandler}
      />
      <div className="container my-3">
        <Textarea
          heading="Text analyzer"
          mode={mode}
          toggleMode={modeChangeHandler}
        />
        {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
