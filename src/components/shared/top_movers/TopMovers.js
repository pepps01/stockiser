import React from "react";

import UBA from "./../../../assets/logos/uba.svg";

import UpArrow from "./../../../assets/misc/up-arrow.svg";

const TopMovers = () => {
  // TODO:
  // props
  //   external components
  // states
  // call[backs]
  // Pass data to the next components
  return (
    <div
      style={{
        marginLeft: "0px",
        paddingLeft: "0px",
        overflow: "scroll",
        marginBottom: "1rem",
      }}
    >
      <h3
        style={{
          textAlign: "left",
        }}
      >
        Top Movers
      </h3>

      <div
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "left",
        }}
      >
        <div
          style={{
            border: "1px solid light-grey",
            borderRadius: "5px",
            marginRight: ".5rem",
            boxShadow: "3px 3px 3px #E5E7EB",
            padding: ".1rem .3rem",
            // zIndex: 2,
          }}
        >
          {/* <a
            href="/asset/1"
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: ".2rem .4rem",
            }}
          >
            <img src={UBA} alt="UBA" width={80} height={40} />
            <div
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <img src={UpArrow} alt="Up Arrow" width={30} crossOrigin="anonymous"/>
              <p
                style={{
                  color: "#3DA900",
                  fontWeight: "bold",
                  fontSize: 18,
                  marginLeft: ".3rem",
                }}
              >
                5.23%
              </p>
            </div>
          </a> */}
        </div>
        {/* pagination */}
      </div>
    </div>
  );
};

export default TopMovers;
