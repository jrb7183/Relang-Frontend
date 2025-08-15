import "./frontpage.css";
import NavBar from "../components/navBar";
import { ReactComponent as Logo} from '../logo.svg';
const textJson = require("../text.json");
// import React, { useState } from "react";

function Feature(props) {
  return (
    <button type="button" className="feature" onClick={props.command}>
        <h1 className="featureName"> {props.name} </h1>
        <p className="featureInfo"> {props.info} </p>
    </button>
  );
}

function Frontpage() {
  
  // Placeholder fŋ for actual functionality
  const placeHolder = () => true

  return (
    <div className="frontpage">
      <NavBar/>

      <div className="logoBackground">
        <Logo style={{width: "53.263%", height: "88%"}}/>
      </div>

      <div className="fpBody">
        <div className="featureSection">
          <h1 className="fpTitle"> Features </h1>

          <div className="featureGrid">
            <Feature name="Consonant Analyzer" info={textJson["Features"]["Cons"]} command={placeHolder}/>
            <Feature name="Vowel Analyzer" info={textJson["Features"]["Vowel"]} command={placeHolder}/>
            <Feature name="More Coming Soon!" info={textJson["Features"]["Coming Soon"]} command={placeHolder}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontpage;