import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="passwordBox">
      <h2>Password Genrater</h2>

      <div className="passwordBoxIn">
        <input type="text" readOnly /> <button>Copy</button>
      </div>

      <div className="passwordLength">
        <label>Password Length</label>
        <input type="number" max={20} min={1} />
      </div>

      <div className="passwordLength">
        <label>Included Uppercase Letters</label>
        <input type="checkbox" />
      </div>

      <div className="passwordLength">
        <label>Included Lowercase Letters</label>
        <input type="checkbox" />
      </div>

      <div className="passwordLength">
        <label>Included Numbers</label>
        <input type="checkbox" />
      </div>

      <div className="passwordLength">
        <label>Included Symbols</label>
        <input type="checkbox" />
      </div>

      <div>
        <button className="btn">Generate Password</button>
      </div>
    </div>
  );
}

export default App;
