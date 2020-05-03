import React from "react";
import "./App.css";

function App() {
  var xhr = new XMLHttpRequest();

  return (
    <div className="App">
      <header className="App-header">
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
            console.log("read");
            fetch("http://localhost:4001/read-all")
              .then((res) => res.json())
              .then((val) => {
                console.log(val);
              });
          }}
        >
          read
        </button>
        <button
          onClick={() => {
            console.log("delete");
          }}
        >
          delete
        </button>
      </header>
    </div>
  );
}

export default App;
