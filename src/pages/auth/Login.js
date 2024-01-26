import React, { useEffect, useState } from "react";

import LoginPhoto from "./../../assets/page_logos/login/login.jpg";
import AlgizerImage from "./../../assets/page_logos/login/algizer.svg";
import Arrow from "./../../assets/page_logos/login/arrow.png";

import "./login.css";
import { useNavigate } from "react-router-dom";
import { Alert } from "@chakra-ui/react";
import { BASE_URL } from "../../apis/api";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard");
    }
  }, [loggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await fetch(BASE_URL + "/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("token", result.access_token);
        const token = localStorage.getItem("token");
        console.log("token_case", token);
        setLoggedIn(true);
      } else {
        console.log("Failed", response.status);
      }
    } catch (e) {
      setError(true);
      console.log("Error", e.message);
    }
  };
  return (
    <div className="loginContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          <img
            src={AlgizerImage}
            alt="algizer logo"
            crossOrigin="anonymous"
            style={{
              marginLeft: "0%",
              width: "80%",
            }}
          />
          <div className="descriptionContainer">
            <h1
              style={{
                color: "#43BA00",
                zIndex: 6,
              }}
            >
              Algizer
            </h1>
            <p className="description">
              On the other hand, prop platforms are customized platforms built
              by large brokerages to match their specific demands and style of
              trading. Traders use various trading platforms, depending on the
              style and amount of their trading.
            </p>
          </div>
        </div>
        <img src={LoginPhoto} alt="Login" crossOrigin="anonymous" />
      </div>
      {/* Right */}
      <div className="rightContainer">
        <div className="move-section" onClick={handleNavigate}>
          <img
            src={Arrow}
            alt="Arrow back"
            width={30}
            height={25}
            crossOrigin="anonymous"
          />
          <p>Go Home</p>
        </div>
        <div className="login-title">
          <h1>Login</h1>
          <p>
            To sign in to the trading platform allows fot he email address to be
            entered to fill the information below{" "}
          </p>
        </div>
        <div className="login-form">
          <div className={`${!error ? "hidden" : ""}`}>
            <Alert message={error && ""} />
          </div>
          <form
            action=""
            style={{
              marginTop: "2rem",
            }}
          >
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
              <input type="submit" value={"Login"} onClick={handleSubmit} />
            </div>
          </form>
          <div>
            <p>
              Have an account?{" "}
              <a
                href="/dashboard"
                style={{
                  textDecoration: "none",
                }}
              >
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
