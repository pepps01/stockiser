import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function ForgotPassword() {
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
    });
    const navigate = useNavigate()
    const errorMessage ="ok"
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit =(e)=>{
        e.preventDefault()
        navigate('/login')
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
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                            value={formData.password}
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

export default ForgotPassword