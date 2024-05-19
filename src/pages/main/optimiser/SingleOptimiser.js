import React, { useState } from "react";

import AppNavbar from "../../../components/shared/navbar/Navbar";
import AssetValidate from "./../../../assets/misc/row.svg";
import QuickActions from "../../../components/shared/quick_actions/QuickActions";
import TopMovers from "./../../../components/shared/top_movers/TopMovers";
import MarketNews from "./../../../components/shared/market_news/MarketNews";
// import Table from "./../../../components/shared/table/Table";

import Algizer from "./../../../assets/algizer.jpeg";

import ReactModal from "react-modal";
// import TableView from "../../../components/shared/table/TableView";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/shared/sidebar";

const SingleOptimiser = () => {
  const [modal, setModal] = useState(false);
  // const [isData, setIsData] = useState(true);
  // const [selectedRow, setSelectedRow] = useState(true);

  const selectedRow = true;
  const handleClick = (e) => {
    e.preventDefault();
    setModal(false);
  };

  const handleOpenClick = (e) => {
    e.preventDefault();
    setModal(true);
  };

  // const handleClickParameter = (e) => {
  //   e.preventDefault();
  // };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      marginRight: "-30%",
      marginBottom: "-20%",
      transform: "translate(-50%, -50%)",
      width: "40%",
      height: "50%",
    },
  };

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
          <AppNavbar title="Default Optimiser" />

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

            {/* Get Financials */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "100%",
                cursor: "pointer",
              }}
            >
              <button
                style={{
                  background: "green",
                  padding: "10px 20px",
                  border: "none",
                  color: "#FFF",
                  cursor: "pointer",
                }}
                onClick={handleOpenClick}
              >
                {/* lift a modal experience to show the growth, value and economy stock */}
                View Stock
              </button>
            </div>
          </div>
          <div
            className=""
            style={{
              padding: "1rem 0rem",
            }}
          >
            {/* container table for the application */}
            {/* check if data is available  */}
            {/* {isData ? <TableView /> : "Data is not available"} */}
            <table
              className="table table-spaced"
              tabIndex={10}
              style={{
                width: "100%",
                textAlign: "left",
                overflowX: "auto",
                boxShadow: "3px 3px 3px #E5E7EB",
              }}
            >
              <thead
                style={{
                  color: "#FFF",
                  height: "2rem",
                  border: "1px solid #43BA00",
                  textAlign: "center",
                }}
              >
                <th></th>
                <th>Return Value</th>
                <th>Number of Buys</th>
                <th>Number of Sells</th>
              </thead>
              <tbody
                style={{
                  overflowY: "scroll",
                }}
              >
                <tr>
                  <td>Maximum Return</td>
                  <td
                    style={{
                      verticalAlign: "center",
                      height: "40px",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    70%
                    {/* <img src={stock.logo} alt={stock.shortName} width={100} /> */}
                  </td>
                  <td
                    style={{
                      verticalAlign: "center",
                      height: "40px",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    70
                    {/* {stock.shortName} */}
                  </td>
                  <td
                    style={{
                      verticalAlign: "center",
                      height: "40px",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    70
                    {/* {new Int32Array(stock.status) > 5 ? "" : stock.status}% */}
                  </td>
                </tr>
                <tr>
                  <td>Highest Number of Buy Signals with a Positive Return</td>
                  <td
                    style={{
                      verticalAlign: "center",
                      height: "40px",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    70%
                    {/* <img src={stock.logo} alt={stock.shortName} width={100} /> */}
                  </td>
                  <td
                    style={{
                      verticalAlign: "center",
                      height: "40px",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    70
                    {/* {stock.shortName} */}
                  </td>
                  <td
                    style={{
                      verticalAlign: "center",
                      height: "40px",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    70
                    {/* {new Int32Array(stock.status) > 5 ? "" : stock.status}% */}
                  </td>
                </tr>
                <tr>
                  <td>Highest Number of Buy Signals with a Negative Return</td>
                  <td
                    style={{
                      verticalAlign: "center",
                      height: "40px",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    70%
                    {/* <img src={stock.logo} alt={stock.shortName} width={100} /> */}
                  </td>
                  <td
                    style={{
                      verticalAlign: "center",
                      height: "40px",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    70
                    {/* {stock.shortName} */}
                  </td>
                  <td
                    style={{
                      verticalAlign: "center",
                      height: "40px",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    70
                    {/* {new Int32Array(stock.status) > 5 ? "" : stock.status}% */}
                  </td>
                </tr>
              </tbody>
            </table>
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
        >
          {/* Top Movers*/}
          <div>
            <MarketNews />
            <TopMovers />
            <QuickActions />
            <img
              src={AssetValidate}
              alt="Asset Validate"
              style={{
                width: "100%",
              }}
            />
          </div>
        </div>
        <ReactModal isOpen={modal} style={customStyles} data={selectedRow}>
          <button onClick={handleClick}>Close Modal</button>
          <div
            style={{
              // marginBottom: "10px",
              margin: "3rem 10rem",
            }}
          >
            <h3>Optimal Parameter</h3>
            <div
              style={{
                margin: "1.5rem 0rem",
              }}
            >
              <label for="stockastic">Stockastic:</label>

              <select
                name="stockastic"
                id="stockastic"
                style={{
                  display: "block",
                  padding: ".3rem",
                  width: "100%",
                  marginTop: ".3rem",
                  height: "40px",
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
              style={{
                margin: "1.5rem 0rem",
              }}
            >
              <label for="convergent">
                Moving Average Convergent x Divergent:
              </label>

              <select
                name="convergent"
                id="convergent"
                style={{
                  display: "block",
                  padding: ".3rem",
                  width: "100%",
                  marginTop: ".3rem",
                  height: "40px",
                }}
              >
                <option value="volvo">Fast (Upper Bound x Lower Bound) </option>
                <option value="saab">Slow (Upper Bound x Lower Bound)</option>
                <option value="mercedes">
                  Smooth (Upper Bound x Lower Bound)
                </option>
              </select>
            </div>
            <div
              style={{
                margin: "1.5rem 0rem",
              }}
            >
              <label for="strength">Relative Strength Indicators (RSI):</label>

              <select
                name="strength"
                id="strength"
                style={{
                  display: "block",
                  padding: ".3rem",
                  width: "100%",
                  marginTop: ".3rem",
                  height: "40px",
                }}
              >
                <option value="volvo">Overbought </option>
                <option value="saab">Oversold</option>
              </select>
            </div>
            <Link
              to={{ pathname: "/sellview" }}
              style={{
                background: "green",
                textDecoration: "none",
                color: "#fff",
                padding: ".7rem .5rem",
                borderRadius: "5px",
                marginTop: "15px",
                display: "block",
                textAlign: "center",
              }}
            >
              Adopt the Parameter
            </Link>
          </div>

          {/* <button onClick={handleClickParameter}>Estimate Parameter</button> */}
        </ReactModal>
      </div>
    </div>
  );
};

export default SingleOptimiser;
