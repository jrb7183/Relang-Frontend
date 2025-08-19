import './consPage.css';
import React, { useState } from "react";

import requestCons from "../utils/apiCalls";
import cleanPhono from "../utils/cleanPhonology";

import ConsTable from "../components/consTable"
import InputTable from "../components/inputTable";
import NavBar from "../components/navBar";
import Button from '../components/stylishButton';


function ConsPage() {
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
    <div className="consPage">
      <NavBar/>

      <div className="cpBody">
        <div className="upperButtons">
          <Button type="button" command={addPhono} text="Add Inventory" />
          <Button type="button" command={removePhono} disabled={numPhonos - 1 === 0} text="Remove Inventory"/>
        </div>
        
        <div className='inventories'>
          {Array.from({length: numPhonos}).map((_, i) => <InputTable key={i} index={i} inputs={inputs[i]} handleInputs={(event, row, column) => handleInputs(event, i, row, column)} />)}
        </div>

        <div className="lowerButtons">
          <Button type="button" command={addPhono} text="Add Inventory" />
          <Button type="button" command={removePhono} disabled={numPhonos - 1 === 0} text="Remove Inventory"/>
          <Button type="button" command={newCons} text="Get Consonants" />
        </div>

        <div className="consFormatting">
          <ConsTable rows={outRows} />
        </div>
        
        <div className="roomLeaver" />
      </div>
    </div>
  );
}

export default ConsPage;
