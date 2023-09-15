import React, { useState } from "react";
import "./App.css";
import addicon from "./add.svg"

let nextId = 0;

function App() {
  const [item, setItem ] = useState("")
  const [storms, setStorms] = useState([]);

  function handleclick() {
    setStorms([
      ...storms,
      { id: nextId++, item: item}
    ])
  }

  return (
    <>
      <div className="container">
      <h1>Todo List</h1>
        <div className="text-box">
          <input
            placeholder="Add to list of things to do"
            value={item}
            onChange={e => setItem(e.target.value)}
           
          /> <img
          src={addicon}
          alt="search"
          onClick={handleclick}
        />
           
        </div>
        <div className="List">
          <h2>List of Todos</h2>
          <div className="todos">
            <ol type="1">
              {storms.map(storm => (
                <li key={storm.id}>{storm.item}{' '}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      </>
  );
}

export default App;
