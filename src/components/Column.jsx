import React from "react";
import Card from "./Card";

function Column({ category, bg }) {
  return (
    <div>
      <div className="heading">
        <div className="column" style={{ backgroundColor: bg }}>
          {category}
        </div>
        <div className="count">2</div>
      </div>
      <div className="cards_container">
        <Card />
      </div>
      <button className="addBtn">+ New</button>
    </div>
  );
}

export default Column;
