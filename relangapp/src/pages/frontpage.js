import "./frontpage.css";
import { NavLink as Link } from "react-router-dom";

import NavBar from "../components/navBar";
// import { ReactComponent as Logo} from "../g74-4.svg";
const textJson = require("../text.json");

function Feature(props) {
  return (
    <Link className="feature" to={props.loc}>
        <h1 className="featureName"> {props.name} </h1>
        <p className="featureInfo"> {props.info} </p>
    </Link>
  );
}

function Frontpage() {
  return (
    <div className="frontpage">
      <NavBar/>

      {/* <div className="logoBackground">
        <Logo style={{width: "53.263%", height: "88%"}}/>
      </div> */}

      <div className="fpBody">
        <div className="aboutSection">
          <p className="aboutInfo"> {textJson["About"]["Main"]} <b> {textJson["About"]["Addendum"]} </b> </p>
        </div>

        <div className="featureSection">
          <h1 className="fpTitle"> Features </h1>

          <div className="featureGrid">
            <Feature name="Consonant Analyzer" info={textJson["Features"]["Cons"]} loc={"/phono"}/>
            <Feature name="Vowel Analyzer" info={textJson["Features"]["Vowel"]} loc={"/"}/>
            <Feature name="More Coming Soon!" info={textJson["Features"]["Coming Soon"]} loc={"/"}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Frontpage;