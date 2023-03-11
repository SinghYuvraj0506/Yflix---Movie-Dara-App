import React from "react";
import "./Navbar.css";
import {useNavigate} from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()

  return (
    <div className="navbar_wrapper">
      <section className="left_navbar_wrapper">
        <img src={require("../../Utils/images/logo.png")} alt="" onClick={()=>{navigate("/")}}/>
      </section>

      <section className="right_navbar_wrapper">
        <span className="option_navbar_texts">About</span>
        <span className="option_navbar_texts">Login</span>
        <span className="option_navbar_texts">Signup</span>
      </section>
    </div>
  );
}

export default Navbar;
