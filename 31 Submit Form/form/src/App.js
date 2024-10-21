import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [uname, setUname] = useState("");

  let handleSubmit = () => {
    return;
  };

  // let getUname = (event) => {
  //   setUname(event.target.value);
  // };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="text-start my-3">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={uname}
                  onChange={(event)=>setUname(event.target.value)}
                />
              </div>
              <div className="text-start my-3">
                <label>Password</label>
                <input type="text" className="form-control" />
              </div>
              <div className="text-start my-3">
                <button>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
