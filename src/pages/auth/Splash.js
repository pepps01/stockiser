import React,{useEffect} from "react";

import Tickizer from "./../../assets/tickizer.jpeg";
import CustomButton from "../../components/main/customButton";
// import CustomButton from '../../components/main/customButton'

import './aileen.css'
// import { BASEURL } from "../../apis/api";
// import TestAvenue from "../../components/TestAvenue";
// remember media query

// const rendition = async()=>{
//   const response = fetch(`${BASEURL}/api/me`)

//   if(!response.ok){
//     console.log("error status", response.data)
//   }
//   const result = response.json();
// }



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
