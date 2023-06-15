// import './App.css';

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About"
function App() {
  return (
    <>
      <Navbar title="AyVerse" homeText="HOME" />
      <div className="container my-3">
      <TextForm heading="Enter Text Below: " />
      <About  />
      </div>        
    </>
  );
}

export default App;
