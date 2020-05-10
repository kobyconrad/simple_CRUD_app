import React, { useState } from "react";
import { XSquare, Edit, Save } from "react-feather";

function NoteBlock(props) {
  const [state, setState] = useState(props.text);
  const [disabled, setDisabled] = useState(true);
  const [icon, setIcon] = useState("edit");

  // state of the display text
  // state of the text area

  function handleChange(event) {
    setState(event.target.value);
  }

  function handleIcons() {
    if (icon === "edit") {
      return <Edit color="#F2F2F2" size={24} />;
    } else {
      return <Save color="#F2F2F2" size={24} />;
    }
  }

  const currentIcon = handleIcons();

  return (
    <div className="componentContainer">
      <div className="textContainer">
        {/* {state} */}
        <textarea
          placeholder="Write your message here!"
          type="text"
          value={state}
          onChange={handleChange}
          disabled={disabled}
        ></textarea>
      </div>
      <div className="editContainer">
        <div
          className="editSVG"
          onClick={() => {
            console.log("edit");
            setDisabled(!disabled);

            if (icon === "save") {
              setIcon("edit");
            } else {
              setIcon("save");
            }
          }}
        >
          {currentIcon}
        </div>
      </div>
      <div className="deleteContainer">
        <div
          className="deleteSVG"
          onClick={() => {
            console.log("delete" + ` ${props.table_id}`);

            fetch("http://localhost:4001/delete", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ table_id: props.table_id }),
            }).then((res) => {
              console.log(res);
              window.location.reload(false);
            });
          }}
        >
          <XSquare color="#F2F2F2" size={24} />
        </div>
      </div>
      <style jsx="true">{`
        .componentContainer {
          display: flex;
          flex-direction: row;
          align-items: center;
          border: 2px solid #f2f2f2;
          border-radius: 4px;
          width: 75%;
          margin-top: 20px;
          padding: 10px 20px 10px 20px;
          font-size: 22px;
        }
        .textContainer {
          width: 100%;
          display: flex;
          align-items: left;
        }
        textarea {
          width: 100%;
          display: flex;
          align-items: left;
        }
        .editContainer {
          padding: 20px;
        }
        .deleteSVG {
          cursor: pointer;
        }
        .editSVG {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default NoteBlock;
