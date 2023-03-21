import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";

import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Textform from "./components/Textform";
import Footer from "./components/Footer";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#121212";
      showAlert("Dark mode Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode Enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar title="TxtAnalyser" mode={mode} toggleMode={toggleMode} />
        <div className="App-header">
          <Alert alert={alert} />

          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Textform />
                }
              />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
        <strong><hr /></strong>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
