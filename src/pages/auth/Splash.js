import React from "react";

import Tickizer from "./../../assets/tickizer.jpeg";
import CustomButton from "../../components/main/customButton";
// import CustomButton from '../../components/main/customButton'

import './aileen.css'
// remember media query
const Splash = () => {
  return (
    <div className="splashContainer">
      <img src={Tickizer} alt="Tickizer" />
      <CustomButton titleName="Get Started" link={"/login"} />
    </div>
  );
};

export default Splash;
// Edge cases
// What is I ma alredy Logged in
