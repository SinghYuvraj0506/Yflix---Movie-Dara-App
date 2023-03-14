import React from "react";
import "./Navbar.css";
import {useNavigate} from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()

  const handleScroll = () => {
    if(document.querySelector(".navbar_wrapper")){

      if (window.scrollY > 25) {
        document.querySelector(".navbar_wrapper").style.backgroundColor =
        "#020c1b";
        document.querySelector(".navbar_wrapper").style.boxShadow =
        "rgb(1 4 9 / 77%) 0px 0px 11px 8px";
      } else {
        document.querySelector(".navbar_wrapper").style.backgroundColor =
        "transparent";
        document.querySelector(".navbar_wrapper").style.boxShadow =
        "unset"
      }
    }
  };

  document.addEventListener("scroll", handleScroll);

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
