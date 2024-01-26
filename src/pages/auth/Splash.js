import React from "react";

import Algizer from "./../../assets/algizer.png";
import CustomButton from "../../components/main/customButton";
// import CustomButton from '../../components/main/customButton'

import './aileen.css'
// remember media query
const Splash = () => {
  return (
    <div className="splashContainer">
      <img src={Algizer} alt="Algizer" />
      <CustomButton titleName="Get Started" link={"/login"} />
    </div>
  );
};

export default Splash;
// Edge cases
// What is I ma alredy Logged in
