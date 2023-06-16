import './App.css';
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import About1 from "./Components/About1";
import Alert from "./Components/Alert";


function App() {
  const [alert, setAlert] = useState(null);

  const [mode, setMode] = useState('light');
  const [modeBtnTxt, setModeBtnTxt] = useState("Enable Dark Mode");
  const [modeGreenBtnTxt, setModeGreenBtnTxt] = useState("Enable Green Mode");
  const [modePinkBtnTxt, setModePinkBtnTxt] = useState("Enable Pink Mode");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    // setTimeout(() => {
    //   setAlert(null);
    // }, 3000);
  }
  // used for toggling themes
  const toggleMode = () => {
    if (mode === 'light' || mode === 'green' || mode === 'pink') {
    // if (mode === 'light') {
      setMode('dark');
      setModeBtnTxt("Disable Dark Mode");
      setModePinkBtnTxt("Enable Pink Mode");
      setModeGreenBtnTxt("Enable Green Mode");
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

  const toggleModePink = () => {
    // if (mode === 'dark' || mode === 'green' || mode === 'light') {
    if (mode === 'dark' || mode === 'green' || mode === 'light') {
      document.body.style.color = 'black';
      document.body.style.backgroundColor = '#6610f2';
      setMode('pink');
      setModeGreenBtnTxt("Enable Green Mode");
      setModeBtnTxt("Enable Dark Mode");
      setModePinkBtnTxt("Disable Pink Mode");
      showAlert("Pink Mode Enabled", "success");

    }
    else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setMode('light');
      setModePinkBtnTxt("Enable Pink Mode");
      showAlert("Light Mode Enabled", "success");
    }
  }
  const toggleModeGreen = () => {
    if (mode === 'dark' || mode === 'pink' || mode === 'light') {
      setMode('green');
      setModeGreenBtnTxt("Disable Green Mode");
      setModePinkBtnTxt("Enable Pink Mode");
      setModeBtnTxt("Enable Dark Mode");
      document.body.style.backgroundColor = '#20c997';
      document.body.style.color = 'black';
      showAlert("Green Mode Enabled", "success");
    }
    else {
      setMode('light');
      setModeGreenBtnTxt("Enable Green Mode");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="AyVerse" mode={mode} toggleMode={toggleMode} toggleModeGreen={toggleModeGreen} toggleModePink={toggleModePink} modeBtnTxt={modeBtnTxt} modeGreenBtnTxt={modeGreenBtnTxt} modePinkBtnTxt={modePinkBtnTxt} />
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
