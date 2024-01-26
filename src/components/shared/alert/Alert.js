import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


import "./style.css"

function Alert({ message, message_type = "register", ...props }) {
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    setShowFeedback(true);
  }, []);

  if (message_type === "register") {
    return (
      <div className="message-container">
        {message && ""}
        <p className="error-meesage">Wrong Email and Password</p>
        <Link to={"http://localhost:3001/register"} target="__blank" style={{
          color:"red",
          marginLeft:"5px"
        }}>Click link to Register</Link>
      </div>
    );
  } else {
    return <div className="message-container">{message && ""}</div>;
  }
}

export default Alert;
