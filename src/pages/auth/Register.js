import { ArrowBigLeft, ArrowLeft } from 'lucide-react'
import React, { useState, useEffect } from 'react'

import { useNavigate } from "react-router-dom";
import { BASEURL } from '../../apis/api';
import LoginLayout from '../../components/layouts/loginLayouts';
import InfoError from "./../../assets/information.png";

function Register() {
    const [loading, setLoading] =useState()
    const [formData, setFormData] = useState({
        "firstname":"",
        "lastname":"",
        "email":"",
        "password":""
    })
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [message, setMessage] = useState(false)
    const navigate =  useNavigate()
    const [alert,setAlert] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange =(e)=>{
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
          const response = await fetch(BASEURL + `/api/register`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(formData),
          });
          // Access-Control-Allow-Origin
          if (response.ok) {
            const result = await response.json();
    
            if (result.status == 'error'){
              setError(true)
              setErrorMessage(result.message)
              console.log("Failed", result.message);
              setAlert(true)
                setFormData("")
            } else{
              localStorage.setItem("token", result.result.access_token);
              console.log("result token",result.result.access_token);
              setMessage(result.message)
              setLoggedIn(true);
            }
          } else {
            setError("Server Downtime! Please retry again")
            setAlert(true)
          }
        } catch (error) {
          console.log("Errors:" + error);
          setError(error);
        }
      }

      
      useEffect(() => {
        if (loggedIn) {
          navigate("/login");
        }
      }, [loggedIn]);
      
  return (
    <LoginLayout>
            {/* <div className="w-full  flex justify-start gap-4 items-center cursor-pointer" onClick={()=> navigate(-1)}>
                <ArrowLeft className='text-lime-400'/> <p>Go Back</p>
            </div> */}

            <div className='mb-8'>
                <h1 className='font-extrabold text-2xl text-lime-500'>Sign Up</h1>
                <p>Sign up to use the Tickizer application</p>
            </div>
{/*             
                {alert=="success"? 
                        "Success":
                 alert =="error"? 
                 
                 "error":
                 
                 ""} */}
            <div className={`${error ? "error" : "hidden"} my-4 py-4`} >
                <img 
                    src={InfoError}
                    alt="Arrow back"
                    width={20}
                    height={20}
                    crossOrigin="anonymous"
                    style={{marginRight:'5px'}}
                    />
                    <p className="alert-red" >{errorMessage}</p>
            </div>
{/* 
            <div className='error'>
                {error? "":""}

            </div> */}
            <form onSubmit={handleSubmit}>
                     <div className="form-group">
                        <label>Firstname</label>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder="Firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            className="border-2 border-gray-200 bg-white"
                        />
                    </div>
                    <div className="form-group">
                        <label>Lastname</label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Enter Lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            className="border-2 border-gray-200 bg-white"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="border-2 border-gray-200 bg-white"
                        />
                    </div>
                    <div className="form-group">
                         <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="border-2 border-gray-200 bg-white border-r-3"
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value={"Sign Up"} className="font-semibold"/>
                    </div>
                </form>
                <div className=''>
                    Already have an account?  <a href="/login" className='text-lime-500 font-semibold'>Login</a>
                </div>
    </LoginLayout>
  )
}

export default Register


// get all these concepts and store inm your memeory to make it easier to access  easilty
// undestand how they each work 