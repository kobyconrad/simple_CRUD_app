import React, { useState } from "react";
import "./App.css";
import NoteBlock from "./components/noteBlock";

function App() {
  console.log("render");
  const [state, setState] = useState([{ text: "loading text" }]);

  // sends get request to express which sends back note data from postgres then saves to state
  fetch("http://localhost:4001/read-all")
    .then((res) => res.json())
    .then((val) => {
      if (JSON.stringify(val) !== JSON.stringify(state)) {
        setState(val);
      }
    });

  const mappedNotes = state.map((item) => {
    return <NoteBlock text={item.text} key={`${Math.random() * 100}`} />;
  });

  return (
    <div className="App">
      <div className="App-header">
        <h2>Hello this is my Simple CRUD App :)</h2>
        <button
          onClick={() => {
            console.log("create");
          }}
        >
          create
        </button>
        <button
          onClick={() => {
            console.log("delete");
          }}
        >
          delete
        </button>
        {mappedNotes}
      </div>
    </div>
  );
}

export default App;
