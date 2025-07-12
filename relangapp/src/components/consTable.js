function Row(props) {
    return <tr>{props.cells.map(cell => cell.isHeader ? <th>{cell.text}</th> : <td>{cell.text}</td>)}</tr>;
}

function ConsTable(props) {
    return (
        <>
        <h1>Here is your Consonant Inventory!</h1>
        <table>
            {props.rows.map(row => <Row cells={row}/>)}
        </table>
        </>
    );
}


export default ConsTable;