import './consTable.css';

function Row(props) {
    return <tr className="constable" >{props.cells.map((cell, i) => cell.isHeader ? <th className="constable" key={i}>{cell.text}</th> : <td className="constable" key={i}>{cell.text}</td>)}</tr>;
}

function ConsTable(props) {
    return (
        <div>
            {props.rows.length > 0 ? <h1 className="ctTitle" >Here is your consonant inventory!</h1> : <></>}
            <table className="constable">
                <tbody>
                    {props.rows.map((row, i)=> <Row key={i} cells={row}/>)}
                </tbody>
            </table>
        </div>
    );
}


export default ConsTable;