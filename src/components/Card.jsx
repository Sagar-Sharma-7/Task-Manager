import React, { useState } from "react";

function Card() {
  const [todo, setTodo] = useState("Random Shit");
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
    <>
      <input type="checkbox" name="task" id="completeCheck" />
      <input
        type="text"
        className="task"
        id="task"
        value={todo}
        onChange={handleChange}
        disabled={true}
      />
      <button className="deleteTodo" onClick={handleDelete}>
        x
      </button>
    </>
  );
}

export default Card;
