import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [menu, setMenu] = useState(false);
  return (
    <div className="App">
      <button className="micon" onClick={() => setMenu(!menu)} >
        {menu ? <span>&times;</span> : <span> &#9776;</span>}
      </button>
      <div className={`navbar ${menu ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Gallery</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
