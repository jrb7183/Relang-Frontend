import React, { useState } from "react";

import './App.css';
import ConsTable from './components/consTable'
import requestCons from './utils/apiCalls';
import cleanPhono from "./utils/cleanPhonology";
import InputTable from "./components/inputTable";
// import getUser from './apiCalls';

function App() {
  const [outRows, setRows] = useState([]);
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

  const newCons = async () => {
    const phonos = cleanPhono(inputs);
    console.log(phonos)
    const new_rows = await requestCons(phonos); 
    setRows(new_rows);
  }

  const addPhono = () => {
    setNumPhonos(numPhonos + 1);
    const newInputs = inputs.concat([new Array(8).fill(new Array(11).fill(""))]);
    setInputs(newInputs);
  }

  const removePhono = () => {
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
        <button type="button" onClick={() => {newCons()}} style={{margin: "10px"}} >Get Consonants!</button>
      </header>
    </div>
  );
}

export default App;
