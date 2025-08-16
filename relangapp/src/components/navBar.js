import "./navBar.css";
import { NavLink as Link } from "react-router-dom";

function NavButton(props) {
    return <Link className="navButton" to={props.loc}> {props.text} </Link>
}

function NavBar() {
  return (
    <div className="navBar">
        <div style={{left: "1.316%", position: "relative"}}>
            <NavButton loc={"/"} text="Home"/>
        </div>

        <div className="featureNav">
            <NavButton loc={"/phono"} text="Phonology"/>
            <NavButton loc={"/"} text="Syllable Structure"/>
            <NavButton loc={"/"} text="Morphology /Semantics"/>
            <NavButton loc={"/"} text="Syntax"/>
        </div>
    </div>
  )
}

export default NavBar;