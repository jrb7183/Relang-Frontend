import './stylishButton.css';

function StylishButton(props) {
    return <button className="stylishButton" type="button" onClick={props.command} disabled={props.disabled} > {props.text} </button>
}

export default StylishButton;