import React, { useState } from "react";

import './App.css';
import ConsTable from './components/consTable'
import requestCons from './apiCalls';
// import getUser from './apiCalls';

function App() {
  const [rows, setRows] = useState([]);

  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const newCons = async (num) => {
    const new_rows = await requestCons(input); 
    setRows(new_rows);
  }

  return (
    <div className="App">
      <header className="App-header">
        <ConsTable rows={rows} />
        <form name="Test Form">
            <label>Enter Number of Consonants Here: <input name="Num Cons" type="text" value={input} onChange={handleChange}/></label>
            <button type="button" onClick={() => {newCons(input)}} >Get Consonants!</button>
        </form>
      </header>
    </div>
  );
}

export default App;
