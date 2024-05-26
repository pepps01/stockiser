import React,{useState, useEffect} from 'react'

function VerifyCode() {
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
      email: "",
    });
  const handleSubmit =()=>{}
  const errorMessage ="ok"

  const handleChange = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setError(false)
    };
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
                  <input
                      type="text"
                      name="one"
                      value={formData.one}
                      onChange={handleChange}
                      />
                  <input
                      type="text"
                      name="two"
                      value={formData.one}
                      onChange={handleChange}
                      />
                 <input
                      type="text"
                      name="three"
                      value={formData.one}
                      onChange={handleChange}
                      />
                   <input
                      type="text"
                      name="four"
                      value={formData.one}
                      onChange={handleChange}
                      />
                  </div>

                  <div className="form-group">
                  <input type="submit" value={"Verify Code"} onClick={handleSubmit} />
                  </div>
              </form>
          </div>
      </div>
  </div>
)
}

export default VerifyCode