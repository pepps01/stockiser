import { ArrowBigLeft, ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'

import { useNavigate } from "react-router-dom";
import LoginLayout from '../../components/layouts/loginLayouts';



function Register() {
    const [loading, setLoading] =useState()
    const [formData, setFormData] = useState({
        "firstname":"",
        "lastname":"",
        "email":"",
        "password":""
    })
    const [error, setError] = useState(false)

    const navigate =  useNavigate()
    const handleSubmit =()=>{
        console.log("working...")
    }
    const handleChange =()=>{}

  return (
    <LoginLayout>
            {/* <div className="w-full  flex justify-start gap-4 items-center cursor-pointer" onClick={()=> navigate(-1)}>
                <ArrowLeft className='text-lime-400'/> <p>Go Back</p>
            </div> */}

            <div className=''>
                <h1 className='font-extrabold text-2xl text-lime-500'>Sign Up</h1>
                <p>Sign up to use the Tickizer application</p>
            </div>

            <div className='error'>
                {error? "":""}
            </div>
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
                        <input type="submit" value={"Sign Up"} onClick={handleSubmit} className="font-semibold"/>
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