import React from "react";
import "./Footer.css";
import {FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,FaLink,FaGithub} from "react-icons/fa"

function Footer() {
  return (
    <div className="footer_main_wrapper">
      <div className="footer_option">
        <span>Terms of Use</span>
        <span>Privacy Policies</span>
        <span>About</span>
        <span>Movies</span>
        <span>TV Shows / Webseries</span>
      </div>

      

      <div className="social_icons_footer">
        <span className="icon" onClick={()=>{window.open("https://github.com/SinghYuvraj0506")}}>
          <FaGithub />
        </span>
        <span className="icon" onClick={()=>{window.open("https://singh-yuvraj.netlify.app/")}}>
          < FaLink/>
        </span>
        <span className="icon" onClick={()=>{window.open("https://www.instagram.com/ssinghyuvraj02/")}}>
          <FaInstagram />
        </span>
        <span className="icon" onClick={()=>{window.open("https://twitter.com/Yuvrajsingh0506")}}>
          <FaTwitter />
        </span>
        <span className="icon" onClick={()=>{window.open("https://www.linkedin.com/in/singh-yuvraj002")}}>
          <FaLinkedin />
        </span>
      </div>


      <div className="footer_text01">Thank you for visiting Yflix - Movie Data Display! We hope you enjoyed exploring our site and discovering new movies.</div>

      <div className="footer_text02">Created By Yuvraj Singh</div>
    </div>
  );
}

export default Footer;
