import React, { useEffect, useState } from "react";

import LoginPhoto from "./../../assets/page_logos/login/login.jpg";
import Tickizer from "./../../assets/tickizer.jpeg";
import Arrow from "./../../assets/page_logos/login/arrow.png";
import InfoError from "./../../assets/information.png";

import "./login.css";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "../../apis/api";
import { Img } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
import LoginLayout from "../../components/layouts/loginLayouts";

const Login = () => {
  const [formData, setFormData] = useState({
    email:"",
    password: "",
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
        const response = await fetch(BASEURL + "/api/login", {
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
            console.log("result token",result.result.access_token);
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
      navigate("/dashboard");
    }
  }, [loggedIn, navigate]);

  return (
    <LoginLayout>
         <div className='mb-8'>
          <h1 className='font-extrabold text-4xl text-lime-500 mb-4 text-center'>Login in</h1>
          <p>To sign in to the trading platform allows fot he email address to be
              entered to fill the information below</p>
        </div>
          <div className={`${error ? "error" : "hidden"}`} >
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
          <form onSubmit={handleSubmit} className="">
              <div className="form-group">
              <label className="text-lg">Email</label>
               <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-2 border-gray-200 bg-white rounded-sm text-lg"
                />
            </div>
            <div className="form-group">
                <label className="text-lg">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border-2 border-gray-200 bg-white border-r-3 text-lg"
                />
            </div>
            <div className="form-group">
                <input type="submit" value={"Login"} className="font-extrabold"/>
            </div>
        </form>
        <div className='font-medium text-lg'>
             You dont have an account?  <a href="/register" className='text-lime-500 font-bold'>Sign Up</a>
         </div>
    </LoginLayout>
  // <div className='w-full'>
  //   <div className='max-w-[400px] mx-auto mt-10'>
  //     <div className="w-full  flex justify-start gap-4 items-center cursor-pointer" onClick={()=> navigate(-1)}>
  //         <ArrowLeft className='text-lime-400'/> <p>Go Back</p>
  //     </div>
  
  //       
  //    

  //   </div>
  // </div>
  );
};

export default Login;
