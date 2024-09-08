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
  const c = "#ffffff";
  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg bg-[#101205] h-full shadow-md shadow-[#2a5298] font-medium">
      <div className="column-info flex justify-between items-center">
        <div
          className="name px-2 rounded py-1 opacity-80"
          style={{ backgroundColor: bg }}
        >
          {stageName}
        </div>
        <div
          className="count text-sm flex justify-center items-ce w-6 h-6 rounded-full font-medium"
          style={{ color: bg }}
        >
          {cards.length}
        </div>
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
      <div className="add-card flex justify-between ">
        <input
          type="text"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          className="text-[#B5BDC9] w-full bg-transparent rounded outline-none p-4 text-sm"
          id={bg}
          placeholder="Write your task here..."
          onKeyDown={handleKeyPress}
        />
        {/* <button
          className="addTask bg-blue-500 py-1 px-2 rounded hover:bg-blue-700"
          onClick={addCard}
        >
          + Add
        </button> */}
      </div>
    </div>
  );
}

export default Column;
