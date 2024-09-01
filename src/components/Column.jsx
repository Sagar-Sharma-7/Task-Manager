import React from "react";
import Card from "./Card";

function Column({ stageName }) {
  return (
    <>
      <div className="columnInfo">
        <div className="name">{stageName}</div>
        <div className="count">2</div>
      </div>
      <button className="addTask">+ Add</button>
      <div className="cardContainer">
        <Card />
      </div>
    </>
  );
}

export default Column;
