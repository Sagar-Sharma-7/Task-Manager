import React, { useState, useEffect } from "react";
import Card from "./Card";

function Column({ stageName, bg }) {
  const [cards, setCards] = useState([]);
  const [newTask, setNewTask] = useState();

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem(stageName));
    if (savedCards) {
      setCards(savedCards);
    }
  }, [stageName]);
  useEffect(() => {
    if (cards.length == 0) {
      localStorage.removeItem(stageName);
    } else {
      localStorage.setItem(stageName, JSON.stringify(cards));
    }
  }, [cards]);
  const writingTask = (e) => {
    setNewTask(e.target.value);
  };

  const addCard = () => {
    const newCard = { id: cards.length + 1, task: newTask };
    setCards([...cards, newCard]);
    setNewTask("");
  };

  const deleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
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
          id={bg}
        />
        <button className="addTask" onClick={addCard}>
          + Add
        </button>
      </div>
      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            task={card.task}
            deleteCard={deleteCard}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
