import { useState } from 'react';

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

    console.log(props.isHeader);
    if (props.isHeader) {
        return (
            <tr className="inputTable" >
                <th className="inputTable" key={0}> Consonants </th>
                {places.map((place, i) => <th className="inputTable" key={i + 1}>{place}</th>)}
            </tr>
        );
    }
    console.log("butts");
    return(
        <tr className="inputTable" >
            <th className="inputTable" key={0}> {props.manner} </th>
            {props.inputs.map((val, i) => <Cell key={i + 1} index={i + 1} input={val} handler={(event) => props.handler(event, i)}/>)}
        </tr>
    );
}

function InputTable(props) {
    const manners = ["Nasal", "Plosive", "Affricate", "Fricative", "Sibilant", "Trill", "Tap", "Approximant"];
    let initInputs = new Array(8).fill(new Array(11).fill(""));
    const [inputs, setInput] = useState(initInputs);

    const handleInput = (event, row, column) => {
        const newInputs = inputs.map((rowlist, i) => {
            if (i === row) {
                return rowlist.map((val, j) => {

                    if (j === column) {
                        return event.target.value;
                    }
                    return val;
                });
            }
            return rowlist;
        });
        setInput(newInputs);
    }

    return (
        <>
        <h1>Inventory {props.index + 1}</h1>
        <table className="inputTable">
            <tbody>
                <Row key={0} isHeader={true} />
                {manners.map((manner, i)=> <Row key={i + 1} isHeader={false} manner={manner} inputs={inputs[i]} handler={(event, column) => handleInput(event, i, column)}/>)}
            </tbody>
        </table>
        </>
    );
}


export default InputTable;