import React from "react";
import "./Navbar.css";
import {useNavigate} from "react-router-dom"
import Cookies from "universal-cookie"

function Navbar(props) {
  const cookies = new Cookies()
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

  const handleLogout = () =>{
    cookies.remove("auth-token")
    window.location.reload()
  }

  return (
    <div className="navbar_wrapper">
      <section className="left_navbar_wrapper">
        <img src={require("../../Utils/images/logo.png")} alt="" onClick={()=>{navigate("/")}}/>
      </section>

      <section className="right_navbar_wrapper">
        <span className="option_navbar_texts">About</span>
        {!cookies.get("auth-token") ? <>{!props?.loginPage && <span className="option_navbar_texts" onClick={()=>{navigate("/login")}}>Login</span>}
        {!props?.signupPage && <span className="option_navbar_texts" onClick={()=>{navigate("/signup")}}>Signup</span>}</> : <span className="option_navbar_texts" onClick={handleLogout}>Logout</span>}
      </section>
    </div>
  );
}

export default Navbar;
