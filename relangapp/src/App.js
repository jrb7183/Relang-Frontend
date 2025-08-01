import React, { useState } from "react";

import './App.css';
import ConsTable from './components/consTable'
import requestCons from './apiCalls';
import InputTable from "./components/inputTable";
// import getUser from './apiCalls';

function App() {
  const [outRows, setRows] = useState([]);

  const [consNum, setConsNum] = useState("");
  const [numPhonos, setNumPhonos] = useState(1);

  let initInputs = new Array(8).fill(new Array(11).fill(""));
  const [inputs, setInputs] = useState([initInputs]);

  const handleInputs = (event, phonoNum, row, column) => {
    const newInputs = inputs.map((phono, k) => {
      
      if (k === phonoNum) {
        return phono.map((rowlist, i) => {

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
      }
      return phono;
    });

    setInputs(newInputs);
  }

  const handleChange = (event) => {
    setConsNum(event.target.value);
  }

  const newCons = async (num) => {
    const new_rows = await requestCons(consNum); 
    setRows(new_rows);
  }

  const addPhono = (event) => {
    setNumPhonos(numPhonos + 1);
    const newInputs = inputs.concat([new Array(8).fill(new Array(11).fill(""))]);
    setInputs(newInputs);
  }

  const removePhono = (event) => {
    if (numPhonos > 1) {
      setNumPhonos(numPhonos - 1);
      const newInputs = inputs.filter((_, i) => i !== numPhonos - 1);
      setInputs(newInputs);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={addPhono} >Add Phonology</button>
        {numPhonos > 1 ? <button type="button" onClick={removePhono} >Remove Phonology</button> : <></>}
        {Array.from({length: numPhonos}).map((_, i) => <InputTable key={i} index={i} inputs={inputs[i]} handleInputs={(event, row, column) => handleInputs(event, i, row, column)} />)}
        <ConsTable rows={outRows} />
        <form name="Test Form">
            <label>Enter Number of Consonants Here: <input name="Num Cons" type="text" value={consNum} onChange={handleChange}/></label>
            <button type="button" onClick={() => {newCons(consNum)}} >Get Consonants!</button>
        </form>
      </header>
    </div>
  );
}

export default App;
