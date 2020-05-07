import React, { useState } from "react";
import { XSquare, Edit } from "react-feather";

function NoteBlock(props) {
  const [state, setState] = useState(1);

  return (
    <div className="componentContainer">
      <div className="textContainer">{props.text}</div>
      <div className="editContainer">
        <div
          className="editSVG"
          onClick={() => {
            console.log("edit");
          }}
        >
          <Edit color="#F2F2F2" size={24} />
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
          min-height: 60px;
          margin-top: 20px;
          padding: 10px 20px 10px 20px;
          font-size: 22px;
        }
        .textContainer {
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
