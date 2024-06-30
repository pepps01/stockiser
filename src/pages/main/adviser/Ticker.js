import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import AssetValidate from "./../../../assets/misc/row.svg";
// import QuickActions from "../../../components/shared/quick_actions/QuickActions";
// import TopMovers from "./../../../components/shared/top_movers/TopMovers";
// import MarketNews from "./../../../components/shared/market_news/MarketNews";

import ReactModal from "react-modal";

import Algizer from "./../../../assets/algizer.jpeg";
// import TableSignals from "../../../components/shared/table/TableSignals";
import Sidebar from "../../../components/shared/sidebar";
import AppNavbar from "../../../components/shared/navbar/Navbar";
import { BASEURL } from "../../../apis/api";

import InfoError from './../../../assets/information.png'


function Ticker() {
  // const [modal, setModal] = useState(false);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isData, setIsData] = useState(true);

  const [formData, setFormData] = useState({
    email:"",
    password: "",
  });

  const navigate = useNavigate();


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
          }
      } 
    } catch (e) {
      setError(true);
      console.log("Error", e.message);
    };
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* navbar */}
      <div
        style={{
          height: "50px",
          width: "100%",
          background: "#FFF",
          boxShadow: "3px 1px 3px #E5E7EB",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.3rem .2rem",
        }}
      >
        <img src={Algizer} alt="Algizer" width={250} height={250} />

        <div
          style={{
            borderRadius: "50%",
            width: "100px",
            height: "100px",
          }}
        >
          <img src="" alt="Profile" />
        </div>
      </div>
      {/* navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignContent: "center",
          background: "#F9FAFB",
        }}
      >
        {/* take into consideration the @meedia queries */}
        <Sidebar />
        <div
          className="main"
          style={{
            width: "100%",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            background: "#FBFCFD",
          }}
        >
          {/* Navabar */}

          {/* Another level */}
          <div
            className=""
            style={{
              width: "95.5%",
              background: "#FFF",
              height: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              boxShadow: "3px 1px 3px #E5E7EB",
              zIndex: "3px",
              borderRadius: "6px",
            }}
          >
            {/* TODO: Isolate to a different container */}
            {/* search area  */}

            <button
              style={{
                background: "green",
                padding: "10px 20px",
                border: "none",
                color: "#FFF",
              }}
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
          <AppNavbar title="Create Ticker" />

          <div className="">
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
            <form
              onSubmit={handleSubmit}
              style={{
                marginTop: "1rem",
                width: "500px",
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
                    textAlign: "left",
                  }}
                >
                  Ticker Name
                </label>
                <input
                  type="text"
                  name="ticker_name"
                  id="ticker_name"
                  placeholder="Enter Ticker Name"
                  style={{
                    display: "block",
                    width: "90%",
                    height: "35px",
                    borderRadius: "3px",
                    paddingLeft: "10px",
                    border: "1px solid grey",
                  }}
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
                    textAlign: "left",
                  }}
                >
                  Parameter Name
                </label>
                <input
                  type="text"
                  name="parameter_name"
                  id="paramter_name"
                  placeholder="Parameter Name"
                  style={{
                    display: "block",
                    width: "90%",
                    height: "35px",
                    borderRadius: "3px",
                    paddingLeft: "10px",
                    border: "1px solid grey",
                  }}
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
                  for="stochastic"
                  style={{
                    marginBottom: ".5rem",
                    display: "block",
                    fontWeight: "500",
                    textAlign: "left",
                  }}
                >
                  Stockastic
                </label>

                <select
                  name="stochastic"
                  id="stochastic"
                  value={formData.stochastic}
                  style={{
                    display: "block",
                    width: "93%",
                    height: "35px",
                    borderRadius: "3px",
                    padding: "10px 10px",
                    border: "1px solid grey",
                  }}
                >
                  <option value="volvo">
                    Roll low (Upper Bound x Lower Bound)
                  </option>
                  <option value="saab">
                    Roll High (Upper Bound x Lower Bound)
                  </option>
                  <option value="mercedes">
                    Fasts (Upper Bound x Lower Bound)
                  </option>
                  <option value="audi">Low (Upper Bound x Lower Bound)</option>
                </select>
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
                  for="convergent"
                  style={{
                    marginBottom: ".5rem",
                    display: "block",
                    fontWeight: "500",
                    textAlign: "left",
                  }}
                >
                  Moving Average Convergent & Divergent
                </label>

                <select
                  name="convergent"
                  id="convergent"
                  style={{
                    display: "block",
                    width: "93%",
                    height: "35px",
                    borderRadius: "3px",
                    padding: "10px 10px",
                    border: "1px solid grey",
                  }}
                  onChange={handleChange}
                >
                  <option value="volvo">Fast (Upper Bound x Lower Bound) </option>
                  <option value="saab">Slow (Upper Bound x Lower Bound)</option>
                  <option value="mercedes">Smooth (Upper Bound x Lower Bound)</option>
                </select>
              </div>

              <div
                style={{
                  width: "100%",
                  overflow: "hidden",
                  marginBottom: "1.5rem",
                }}
              >
                <input
                  name="submit"
                  type="submit"
                  value={"Save"}
                  style={{
                    display: "block",
                    width: "92%",
                    height: "50px",
                    borderRadius: "3px",
                    border: "none",
                    paddingLeft: "10px",
                    background: "#43BA00",
                    color: "#FFF",
                    fontSize: "1.1rem",
                    cursor: "pointer",
                  }}
                />
              </div>
            </form>
            {/* container table for the application */}
            {/* check if data is available  */}
            {/* {isData ? <TableSignals /> : "Data is not available"} */}
          </div>
        </div>
        {/* Action bar */}
        <div
          style={{
            maxWidth: "300px",
            width: "100%",
            height: "100vh",
            background: "#FFF",
            boxShadow: "3px 2px 3px #E5E7EB",
            flexDirection: "column",
            alignContent: "center",
            padding: "0rem 1.5rem",
            // zIndex: 2,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Ticker;
