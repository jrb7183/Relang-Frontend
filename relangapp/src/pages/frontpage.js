import "./frontpage.css"
import NavBar from "../components/navBar"
import { ReactComponent as Logo} from '../logo.svg';
// import React, { useState } from "react";

function Frontpage() {
  return (
    <div className="frontpage">
      <NavBar/>

      <div className="logoBackground">
        <Logo style={{width: "53.263%", height: "88%"}}/>
      </div>

      
    </div>
  )
}

export default Frontpage;