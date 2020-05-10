import React, { useState } from "react";

function InputContainer() {
  const [state, setState] = useState("");

  function handleChange(event) {
    setState(event.target.value);
  }

  return (
    <div className="inputContainer">
      <div className="inputTextContainer">
        <textarea
          placeholder="Write your message here!"
          type="text"
          value={state}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <div
          className="divButton"
          onClick={() => {
            console.log(state);
            fetch("http://localhost:4001/create", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ text: `${state}` }),
            }).then((res) => {
              console.log(res);
              window.location.reload(false);
            });
          }}
        >
          submit
        </div>
      </div>
      <style jsx>{`
        .inputContainer {
          width: 75%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          border-bottom: 2px solid white;
          padding: 10px;
        }
        .inputTextContainer {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        textarea {
          width: 95%;
          min-height: 60px;
          font-size: 24px;
          padding: 10px;
          outline: none;
          resize: none;
          border: 0px;
          background-color: #282c34;
          color: white;
        }
        .divButton {
          border: 2px solid white;
          border-radius: 4px;
          padding: 4px 8px 6px 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default InputContainer;
