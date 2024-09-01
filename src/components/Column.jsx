import React, { useState } from "react";
import Card from "./Card";

function Column({ stageName }) {
  const [cards, setCards] = useState([]);
  const [newTask, setNewTask] = useState();

  const writingTask = (e) => {
    setNewTask(e.target.value);
  };

  const addCard = () => {
    const newCard = { id: cards.length + 1, task: newTask };
    setCards([...cards, newCard]);
    setNewTask("");
  };
  return (
    <>
      <div className="columnInfo">
        <div className="name">{stageName}</div>
        <div className="count">{cards.length}</div>
      </div>
      <div className="addcard">
        <input type="text" onChange={writingTask} value={newTask} />
        <button className="addTask" onClick={addCard}>
          + Add
        </button>
      </div>
      <div className="cardContainer">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} task={card.task} />
        ))}
      </div>
    </>
  );
}

export default Column;
