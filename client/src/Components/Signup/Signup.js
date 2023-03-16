import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {AiOutlineGoogle} from "react-icons/ai"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate()
  const cookies = new Cookies()
  const [data, setData] = useState({email:"",password:""})

  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSignup = (e) => {
    e?.preventDefault()
    createUserWithEmailAndPassword(auth,data?.email,data?.password)
    .then((res)=>{
      cookies.set("auth-token", res?.user?.accessToken, {
        expires: new Date(Date.now() + 259200000),   // 5 days expiry
      });
      toast.success("Welcome to Yflix, keep exploring",{
        position:"top-center",
        autoClose:3000
      })
      setTimeout(() => {
        navigate("/")
      }, 3000);
    })
    .catch(err=>{
      if (err.code === "auth/email-already-in-use"){
        toast.error("User already exists, Please login to proceed",{
          position:"top-center"
        })
      }
      else{
        toast.error("Some error occured",{
          position:"top-center"
        })
      }
    })
  }


  if(cookies.get("auth-token")){
    navigate("/")
    return null
  }
  

  return (
    <>
    <ToastContainer/>
      <Navbar signupPage={true}/>
      <div className="login_container_wrapper">
        <div className="login_form">
          <h1>Register</h1>
          <section className="input_section">
          <div>
              <label htmlFor="email">Email Id</label>
              <input type="text" id="email" name="email" placeholder="Type your email id" value={data?.email} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Type your password" value={data?.password} onChange={handleChange}/>
            </div>
          </section>
          <button onClick={handleSignup}>Sign Up</button>
          {/* <section className="other_login_setups">
            <span>Or</span>
            <button><AiOutlineGoogle size={30}/>Signup with google</button>
          </section> */}
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Signup;
