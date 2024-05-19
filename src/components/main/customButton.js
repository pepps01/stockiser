import React from "react";
import { useNavigate } from "react-router-dom";

function CustomButton({ titleName, link, ...props }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(link);
    console.log("Handle Click");
  };
  return (
    <button style={defaultStyles.button} onClick={handleClick}>
      {titleName && titleName}
    </button>
  );
}

const defaultStyles = {
  button: {
    color: "#FFF",
    background: "green",
    padding: "15px 25px",
    border: "none",
    borderRadius: "2px",
    width: "100%",
    maxWidth: "200px",
    fontFamily: "Antic",
    fontWeight: "bolder",
    fontSize: "1rem",
    cursor: "pointer",
  },
  link: {
    color: "white",
    textAlign: "center",
    textDecoration: "none",
    fontFamily: "Antic",
  },
};
export default CustomButton;
