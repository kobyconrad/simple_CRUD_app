import React from "react";
import { XSquare, Edit } from "react-feather";

function NoteBlock(props) {
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
            console.log("delete");
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
          margin-top: 10px;
          padding: 20px;
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
