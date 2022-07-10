import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";

import React, { useState } from "react";
import Alert from "./component/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Textform from "./component/Textform";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

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
        <Navbar title="Word-Formetter" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Textform
                  heading="
Enter text below to analyse text
"
                />
              }
            />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <strong><hr/></strong>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
