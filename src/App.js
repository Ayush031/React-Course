// import './App.css';

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="AyVerse" homeText="HOME" />
      <div className="container my-3">
      <TextForm heading="Enter Text Below: " />
      </div>        
    </>
  );
}

export default App;
