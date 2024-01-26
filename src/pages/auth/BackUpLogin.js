import React, { useEffect, useState } from "react";

import LoginPhoto from "./../../assets/page_logos/login/login.jpg";
import AlgizerImage from "./../../assets/page_logos/login/algizer.svg";
import Arrow from "./../../assets/page_logos/login/arrow.png";
import { BASEURL } from "../../apis/api";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/shared/alert/Alert";

import "./style.css";

const BackUpLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await fetch(BASEURL + "/api/login", {
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

  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard");
    }
  }, [loggedIn]);

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
        <img
          src={LoginPhoto}
          alt="Login"
          width={900}
          crossOrigin="anonymous"
          style={{
            height: "100vh",
            objectFit: "cover",
            width: "100%",
          }}
        />
      </div>

      {/* right side */}
      <div className="rightContainer">
        <div className="move" onClick={handleNavigate}>
          <img
            src={Arrow}
            alt="Arrow back"
            width={30}
            height={25}
            crossOrigin="anonymous"
          />
          <p
            style={{
              color: "#43BA00",
              fontWeight: "bold",
              marginLeft: ".5rem",
              fontSize: "1.2rem",
            }}
          >
            Go Home
          </p>
        </div>
        <div style={{ textAlign: "left", marginBottom: "4rem" }}>
          <h1 style={{ color: "#43BA00", marginBottom: "0px" }}>Login</h1>
          <p>
            To sign in to the trading platform allows fot he email address to be
            entered to fill the information below{" "}
          </p>

          <div className={`${!error ? "hidden" : ""}`}>
            <Alert message={error && ""} />
          </div>
          <form
            action=""
            style={{
              marginTop: "2rem",
              // border: "1px solid black"
            }}
          >
            <div
              className="form-group"
              style={{
                width: "100%",
                overflow: "hidden",
                marginBottom: "1.5rem",
              }}
            >
              <label
                style={{
                  marginBottom: ".5rem",
                  display: "block",
                  fontWeight: "500",
                }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div
              className="form-group"
              style={{
                width: "100%",
                overflow: "hidden",
                marginBottom: "1.5rem",
              }}
            >
              <label
                style={{
                  marginBottom: ".5rem",
                  display: "block",
                  fontWeight: "500",
                }}
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div
              style={{
                width: "100%",
                overflow: "hidden",
                marginBottom: "1.5rem",
              }}
            >
              <input
                type="submit"
                value={"Login"}
                style={{
                  display: "block",
                  width: "100%",
                  height: "50px",
                  borderRadius: "3px",
                  border: "none",
                  paddingLeft: "10px",
                  background: "#43BA00",
                  color: "#FFF",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                }}
                onClick={handleSubmit}
              />
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

const styles = {
  display_container: {
    "justify-content": "space-around",
    "align-self": "center",
  },
  image: {
    flex: 1,
    background: "red",
    width: "250px",
    height: "100vh",
  },
  form: {
    flex: 1,
    background: "blue",
    width: "400px",
    height: "100vh",
  },
};
export default BackUpLogin;
