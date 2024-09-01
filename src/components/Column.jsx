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
    <div className="flex flex-col">
      <div className="column-info">
        <div className="name">{stageName}</div>
        <div className="count">{cards.length}</div>
      </div>
      <div className="add-card">
        <input
          type="text"
          onChange={writingTask}
          value={newTask}
          className="text-black"
        />
        <button className="addTask" onClick={addCard}>
          + Add
        </button>
      </div>
      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.id} id={card.id} task={card.task} />
        ))}
      </div>
    </div>
  );
}

export default Column;
