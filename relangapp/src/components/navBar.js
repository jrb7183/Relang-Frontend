import "./navBar.css";
// import React, { useState } from "react";

function NavButton(props) {
    return <button type="button" className="navButton" onClick={props.command}> {props.text} </button>
}

function NavBar() {
  const goHome = () => {
    // If not on homepage, go there
  }

  const goPhono = () => {
    // If not on phonology page, go there
  }

  const goSyllable = () => {
    // If not on syllable structure page, go there
  }

  const goMorpho = () => {
    // If not on morphology/semantics page, go there
  }

  const goSyntax = () => {
    // If not on syntax page, go there
  }
  
  return (
    <div className="navBar">
        <div style={{left: "1.316%", position: "relative"}}>
            <NavButton command={goHome()} text="Home"/>
        </div>

        <div className="featureNav">
            <NavButton command={goPhono()} text="Phonology"/>
            <NavButton command={goSyllable()} text="Syllable Structure"/>
            <NavButton command={goMorpho()} text="Morphology /Semantics"/>
            <NavButton command={goSyntax()} text="Syntax"/>
        </div>
    </div>
  )
}

export default NavBar;