import React from 'react'
import Algizer from "./../../../assets/algizer.svg";
import UserAvatar from "./../../../assets/user.png";

// import ABC from "./../../../assets/"
function CustomNavbar() {
  return (
    <div>
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
            paddingTop:"1.5rem",
            paddingRight:"2rem"
          }}
        >
          <a href="/profile">
            <img src={UserAvatar} alt="Profile"  width={50}/>
          </a>
          <p style={{
            fontSize:".8rem"
          }}>Sherlock Holmes</p>
        </div>
      </div>
    </div>
  )
}

export default CustomNavbar