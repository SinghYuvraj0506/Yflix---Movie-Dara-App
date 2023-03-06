import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar_wrapper">
      <section className="left_navbar_wrapper">
        <img src={require("../../Utils/images/logo.png")} alt="" />
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
