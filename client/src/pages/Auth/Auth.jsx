import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";


const Auth = () => {
  

  return (
    <div className="Auth">
      {/* left side */}

      <div className="a-left">
        <img src={Logo} alt="" />

        <div className="Webname">
          <h1>Game Chat System</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* right form side */}

      <div className="a-right">
        <form className="infoForm authForm" >
          <h3>{isSignUp ? "Register" : "Login"}</h3>
          

          <div>
            <input
              required
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              
            />
          </div>
          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
           
            />
           
          </div>

          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            
            >
              
            </span>
            <button
              className="button infoButton"
              type="Submit"
             
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
