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
            xhr.open("GET", "http://localhost:4001/read-all");
            // send the request
            xhr.send();
            // client.query("SELECT text FROM notes", (err, res) => {
            //   console.log(res);
            //   client.end();
            // });
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
