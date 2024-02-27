import React from "react";
import Algizer from "./../../../assets/algizer.jpeg";

function MainNavbar() {
  return (
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
  );
}

export default MainNavbar;
