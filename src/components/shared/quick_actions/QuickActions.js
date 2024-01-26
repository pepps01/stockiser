import React, { useState } from "react";

import "./actions_data.json";

import WatchList_Container from "./../../../assets/misc/WatchList_Container.svg";
import PortfolioContainer from "./../../../assets/misc/PortfolioContainer.svg";
const QuickActions = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        marginBottom: "1.5rem",
      }}
    >
      <div>
        {/* <img src=""/> */}
        <h3
          style={{
            textAlign: "left",
          }}
        >
          QuickActions
        </h3>
      </div>
      {/* TODO: Mapping the results of the data */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <li>
          <a
            href="/portfolio"
            style={{
              textDecoration: "none",
            }}
          >
            <img
              src={PortfolioContainer}
              alt="portfolio"
              style={{
                width: "100%",
              }}
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
          </a>
        </li>
        <li>
          <a
            href="/portfolio"
            style={{
              textDecoration: "none",
            }}
          >
            <img
              src={WatchList_Container}
              alt="watchlist"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              style={{
                width: "100%",
              }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickActions;
