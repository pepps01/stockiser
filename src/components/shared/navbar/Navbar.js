import React from "react";

function AppNavbar(props) {
  return (
    <nav
      className=""
      style={{
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* search and profile box */}
      <h1
        style={{
          textAlign: "left",
        }}
      >
        {props.title}
      </h1>
    </nav>
  );
}

export default AppNavbar;
