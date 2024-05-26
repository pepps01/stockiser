import React, {useState, useEffect} from 'react'


import LoginPhoto from "./../../assets/page_logos/login/login.jpg";
import Tickizer from "./../../assets/tickizer.jpeg";
import Arrow from "./../../assets/page_logos/login/arrow.png";

import "./login.css";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "../../apis/api";

function ForgotPassword() {

  const [formData, setFormData] = useState({
    email: "",
  });
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("")
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();
  //  const memo = useMemo(() => first, [second])
  const handleNavigate = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("FormData Email", formData.email)

      // console.log("Formdata package", formData)
      // localStorage.setItem('email', emailCapture)
      console.log("local storage",localStorage.getItem("email"))
      const response = await fetch(BASEURL + "/api/forgot-password", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" ,
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok){ 
          const result = await response.json();

          if (result.status === 'error'){
            setError(true)
            setErrorMessage(result.message)
            console.log("Failed", result.message);

          } else{
            localStorage.setItem("email", formData.email);
            console.log("result token",result.message);
            setLoggedIn(true);
          }
      } 
    } catch (e) {
      setError(true);
      console.log("Error", e.message);
    };
  }

  useEffect(() => {
    if (loggedIn === true) {
      navigate("/send-code");
    }
  }, [loggedIn, navigate]);


  return (
    <div className="loginContainer">
      {/* <div className="leftContainer"> 
        <img src={LoginPhoto} alt="Login" crossOrigin="anonymous" />
      </div> */}
      {/* Right */}
      <div className="rightContainer">
      <button onClick={handleNavigate}>Go Back</button>

        <div className="login-form">
          <div className={`${error ? "error" : "hidden"}`}>
              <p className="alert-red">{errorMessage}</p>
          </div>

          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            

            <div className="form-group">
              <input type="submit" value={"Continue"} onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword