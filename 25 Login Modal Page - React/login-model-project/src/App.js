import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [modalStatus, setModalStatus] = useState(false);
  return (
    <div className="App">
      <button className='en' onClick={()=>setModalStatus(true)}>Enquiry Now</button>
      <div onClick={()=>setModalStatus(false)} className={` modalOverlay ${modalStatus ? "modalShow" : " " } `}></div>
      <div className={` modalDiv ${modalStatus ? "showModalDiv" : " " } `}>
        <h3>Enquiry Now <button onClick={()=>setModalStatus(false)} >&times;</button></h3>
      </div>
    </div>
  );
}

export default App;
