import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About"
import About1 from "./Components/About1"

import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const [modeBtnTxt, setModeBtnTxt] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeBtnTxt("Disable Dark Mode");
      document.body.style.backgroundColor = '#055160';
      document.body.style.color = 'white';
    }
    else {
      setMode('light');
      setModeBtnTxt("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <>
      <Navbar title="AyVerse" mode={mode} toggleMode={toggleMode} modeBtnTxt={modeBtnTxt} />
      <div className="container my-3">
        <TextForm heading="Enter Text Below: " mode={mode} toggleMode={toggleMode} />
        {/* <About/> */}
        <About1 mode={mode} toggleMode={toggleMode} />
      </div>
    </>
  );
}

export default App;
