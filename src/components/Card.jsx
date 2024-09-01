import React, { useState } from "react";

function Card({ key, id, task }) {
  const [todo, setTodo] = useState(task);
  const [isVisible, setIsVisible] = useState(true);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDelete = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-[#262626] border border-green-500 px-4 py-2">
      <input type="checkbox" name="checkbox" className="completeCheck" />
      <input
        type="text"
        className="task bg-transparent"
        value={todo}
        onChange={handleChange}
        disabled={true}
        name="task"
      />
      <button className="deleteTodo" onClick={handleDelete}>
        <img src="delete.svg" alt="" />
      </button>
    </div>
  );
}

export default Card;
