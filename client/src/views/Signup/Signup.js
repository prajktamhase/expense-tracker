import { useState, useEffect } from "react";
import axios from "axios";
import "./Signup.css";
import React from "react-dom/client";
import { Link } from "react-router-dom";
import Navbar from "./../../component/Navbar/Navbar";
import Footer from "./../../component/Footer/Footer";


function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
//   const [gender, setGender] = useState("female");

  const signup = (async () => {
    if (!name || !email || !password || !mobile || !address ) {
      alert("All dields are required")
      return;
    }
    const response = await axios.post('/signup', {
      name,
      email,
      password,
      mobile,
      address
    });

    if (response?.data?.success) {
      alert(response?.data?.message)
      window.location.href = "/login";
    }

    else {
      alert(response?.data?.message);
    }
  })
  useEffect(() => {
    const userReadLocalstorage = JSON.parse(localStorage.getItem("user"), '{}');

    if (userReadLocalstorage?.email) {
      alert("You are already logged in")
      window.location.href = ("/")
    }
  }, [])

  return (
    <>
      <Navbar/>     
      <div className="flex-container sign-form-design">   
        <div className=" content">
            <form>
          <h1 className="text-center color">SignUp</h1><br />
            <div>
              <label htmlFor="name" className="color">Name: </label><br />
              <input type="text" id="name"
                value={name}
                className="box"
                placeholder="Enter Name"
                onChange={(e) => {
                  setName(e.target.value)
                }} />
            </div>

            <div>
              <label htmlFor="email" className="color">Email: </label><br />
              <input type="email" id="email"
                value={email}
                className="box"
                placeholder="Enter Email"
                onChange={(e) => {
                  setEmail(e.target.value)
                }} />
            </div>

            <div>
              <label htmlFor="password" className="color">Password:</label><br />
              <input type="password" id="pasword"
                value={password}
                className="box"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value)
                }} />
            </div>

            <div>
              <label htmlFor="mobile" className="color">Mobile:</label><br />
              <input type="text" id="mobile"
                value={mobile}
                className="box"
                placeholder="Enter Mobile"
                onChange={(e) => {
                  setMobile(e.target.value)
                }} />
            </div>

            <div>
              <label htmlFor="address" className="color">Address:</label><br />
              <input type="text" id="address"
                value={address}
                className="box"
                placeholder="Enter Address"
                onChange={(e) => {
                  setAddress(e.target.value)
                }} />
            </div>


            <button type="button"
              className="btn"
              onClick={signup}
            >Signup</button>

            <p>
              <Link to="/login" className="link-text">Already have an account?</Link>
            </p>
          </form>
        </div>
      </div>
   <Footer/>
    </>
  )
}
export default Signup