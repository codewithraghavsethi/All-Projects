import React from "react";
import "./LoginSingUp.css";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import person_icon from "../Assets/person.png";

const LoginSingUp = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={person_icon} alt="" />
          <input type="name" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" />
        </div>
      </div>
    </div>
  );
};

export default LoginSingUp;
