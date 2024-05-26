import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { BASEURL } from "../../apis/api";

function SendCode() {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")

    const [formData, setFormData] = useState({
        code: "",
        email:localStorage.getItem('email')
      });
      const [loggedIn, setLoggedIn] = useState(false);
    //   const errorMessage ="ok"
      const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1);
      };

    const resendCode =()=>{
        console.log("Resend Code")
    }

    const handleSubmit = async (e)=>
    {
      e.preventDefault();
      try {
        console.log("FormData", formData)
        console.log("FormData", localStorage.getItem('email'))
    
          const response = await fetch(BASEURL + "/api/send-code", {
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
              localStorage.setItem("token", result);
            //   localStorage.setItem("email", result);
              localStorage.setItem("email_web", formData.email);
              console.log(localStorage.getItem('email'))
              setLoggedIn(true);
            }
        } 
      } catch (e) {
        setError(true);
        console.log("Error", e.message);
      };
    }
    
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


  useEffect(() => {
    if (loggedIn === true) {
      navigate("/reset-password");
    }
  }, [loggedIn, navigate]);

  return (
    <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }}>

    <div style={{
        maxWidth: "800px", 
    }}>
         <div className="login-title">
          <h1>Send Code</h1>
          <p>
             Enter Six Digit Code 
          </p>
          
        </div>


        <div className="login-form" style={{marginTop:15}}>
            <div className={`${error ? "error" : "hidden"}`}>
                 <p className="alert-red">{errorMessage}</p>
            </div>
          <button onClick={handleNavigate}>Go Back</button>

            <form>
                    <div className="form-group">
                    <label>Code</label>
                    <input
                        type="text"
                        name="code"
                        id="code"
                        placeholder="Enter code"
                        value={formData.code}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                          <input type="submit" value={"Confirm Code"} onClick={handleSubmit} />
                    </div>
                </form>

                <button onClick={resendCode}>Resend Code</button>
            </div>
        </div>
    </div>
  )
}

export default SendCode