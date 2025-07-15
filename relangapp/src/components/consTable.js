import './consTable.css';

function Row(props) {
    return <tr className="constable" >{props.cells.map((cell, i) => cell.isHeader ? <th className="constable" key={i}>{cell.text}</th> : <td className="constable" key={i}>{cell.text}</td>)}</tr>;
}

function ConsTable(props) {

    console.log(props.rows);
    return (
        <>
        <h1>Here is your Consonant Inventory!</h1>
        <table className="constable">
            <tbody>
                {props.rows.map((row, i)=> <Row key={i} cells={row}/>)}
            </tbody>
        </table>
        </>
    );
}


export default ConsTable;