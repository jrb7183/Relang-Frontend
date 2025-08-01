import './inputTable.css';

function Cell(props) {

    return (
        <td className="inputTable" key={props.index}> 
            <input className="consCell" type="text" value={props.input} onChange={props.handler}/> 
        </td>
    );
}

function Row(props) {
    const places = ["Bilabial", "Labiodental", "Dental", "Alveolar", "Retroflex", "Post-Alveolar", "Palatal", "Velar", "Uvular", "Pharyngeal", "Glottal"];

    if (props.isHeader) {
        return (
            <tr className="inputTable" >
                <th className="inputTable" key={0}> Consonants </th>
                {places.map((place, i) => <th className="inputTable" key={i + 1}>{place}</th>)}
            </tr>
        );
    }

    return(
        <tr className="inputTable" >
            <th className="inputTable" key={0}> {props.manner} </th>
            {props.inputs.map((val, i) => <Cell key={i + 1} index={i + 1} input={val} handler={(event) => props.handler(event, i)}/>)}
        </tr>
    );
}

function InputTable(props) {
    const manners = ["Nasal", "Plosive", "Affricate", "Fricative", "Sibilant", "Trill", "Tap", "Approximant"];

    return (
        <>
        <h1>Inventory {props.index + 1}</h1>
        <table className="inputTable">
            <tbody>
                <Row key={0} isHeader={true} />
                {manners.map((manner, i)=> <Row key={i + 1} isHeader={false} manner={manner} inputs={props.inputs[i]} handler={(event, column) => props.handleInputs(event, i, column)}/>)}
            </tbody>
        </table>
        </>
    );
}


export default InputTable;