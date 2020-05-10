import React, { useState } from "react";
import "./App.css";
import NoteBlock from "./components/noteBlock";
import InputContainer from "./components/inputContainer";

function App() {
  console.log("render");
  const [state, setState] = useState([{ text: "loading text" }]);

  // READ sends get request to express which sends back note data from postgres then saves to state
  fetch("http://localhost:4001/read-all")
    .then((res) => res.json())
    .then((val) => {
      console.log(val);
      if (JSON.stringify(val) !== JSON.stringify(state)) {
        setState(val);
      }
    });

  const mappedNotes = state.map((item) => {
    return (
      <NoteBlock
        text={item.text}
        table_id={item.table_id}
        key={`${Math.random() * 100}`}
      />
    );
  });

  return (
    <div className="App">
      <div className="App-header">
        <h2>Hello this is my Simple CRUD App :)</h2>
        <InputContainer />
        <div className="mappedContainer">{mappedNotes}</div>
      </div>
      <style jsx>{`
        .mappedContainer {
          display: flex;
          flex-direction: column-reverse;
          width: 100%;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default App;
