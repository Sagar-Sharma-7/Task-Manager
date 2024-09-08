import React, { useState, useEffect } from "react";
import Card from "./Card";

function Column({ stageName, bg }) {
  const [cards, setCards] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load cards from localStorage on component mount
  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem(stageName)) || [];
    setCards(savedCards); // Load cards only once when the component mounts
  }, [stageName]);

  // Save cards to localStorage whenever they change
  useEffect(() => {
    // Save to localStorage only if there are cards, and don't touch localStorage if there are none
    if (cards.length > 0) {
      localStorage.setItem(stageName, JSON.stringify(cards));
    }
  }, [cards, stageName]);

  // Add a new card
  const addCard = () => {
    if (newTask.trim() !== "") {
      const newCard = { id: Date.now(), task: newTask, completed: false };
      setCards([newCard, ...cards]); // Add new card to the beginning
      setNewTask(""); // Clear input
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addCard();
    }
  };

  // Delete card by id
  const deleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);

    // If after deleting the card, no cards are left, remove localStorage
    if (updatedCards.length === 0) {
      localStorage.removeItem(stageName);
    }
  };

  // Update task completion status
  const updateCardCompletion = (id, completed) => {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, completed } : card
    );
    setCards(updatedCards);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="column-info flex gap-3">
        <div className="name">{stageName}</div>
        <div className="count text-sm flex justify-center align-middle w-6 h-6 rounded-full">
          {cards.length}
        </div>
      </div>
      <div className="add-card">
        <input
          type="text"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          className="text-black"
          id={bg}
          onKeyDown={handleKeyPress}
        />
        <button className="addTask" onClick={addCard}>
          + Add
        </button>
      </div>
      <div className="card-container flex flex-col gap-1">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            task={card.task}
            completed={card.completed}
            deleteCard={deleteCard}
            updateCardCompletion={updateCardCompletion}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
