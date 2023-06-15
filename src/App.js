import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About"

import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const [modeBtnTxt, setModeBtnTxt] = useState("Enable Dark Mode");
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeBtnTxt("Enable Light Mode");
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light');
      setModeBtnTxt("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="AyVerse" mode={mode} toggleMode={toggleMode} modeBtnTxt={modeBtnTxt} />
      <div className="container my-3">
        <TextForm heading="Enter Text Below: " />
        <About />
      </div>
    </>
  );
}

export default App;
