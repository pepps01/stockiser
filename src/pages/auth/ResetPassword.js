import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { BASEURL } from "../../apis/api";

function ResetPassword() {
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        email: localStorage.getItem('email'),
        password:"",
        confirm_password:""
    });
    const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState("")
  const [loggedIn, setLoggedIn] = useState(false);

  const handleNavigate = () => {
    navigate(-1);
  };
    // const errorMessage ="ok"

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const goBack=()=>{
        navigate("/send-code")
    }


    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
          console.log("FormData", formData)

          if (formData.password != formData.confirm_password){
            setError(true)
            return;
          }
            const response = await fetch(BASEURL + "/api/reset-password", {
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
                localStorage.setItem("token", result.result.access_token);
                localStorage.setItem("email", result.result.access_token);
                localStorage.setItem("email_web", formData.email);
                setLoggedIn(true);
              }
          } 
        } catch (e) {
          setError(true);
          console.log("Error", e.message);
        };
    }

  return (
    <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }}>

    <div className='' style={{
        maxWidth: 500, 
    }}>
         <div className="login-title">

     <button onClick={handleNavigate}>Go Back</button>
          <h1>Reset Password</h1>
          <p>
            A link for confirmation would be sent to your mail
          </p>
        </div>


        <div className="login-form" style={{marginTop:15}}>
            <div className={`${error ? "error" : "hidden"}`}>
                    <p className="alert-red">{errorMessage}</p>
            </div>

            <form>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
        
                <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            placeholder="Confirm Password"
                            value={formData.confirm_password}
                            onChange={handleChange}
                        />
                    </div> 
                    <div className="form-group">
                    <input type="submit" value={"Reset Password"} onClick={handleSubmit} />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword