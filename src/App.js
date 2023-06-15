import './App.css';
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import About1 from "./Components/About1";
import Alert from "./Components/Alert";


function App() {
  const [mode, setMode] = useState('light');
  const [modeBtnTxt, setModeBtnTxt] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1700);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeBtnTxt("Disable Dark Mode");
      document.body.style.backgroundColor = '#055160';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      setModeBtnTxt("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="AyVerse" mode={mode} toggleMode={toggleMode} modeBtnTxt={modeBtnTxt} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter Text Below: " mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
        {/* <About/> */}
        <About1 mode={mode} toggleMode={toggleMode} />
      </div>
    </>
  );
}

export default App;
