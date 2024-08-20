import React, { useState } from "react";

function Card() {
  const [isEditing, setIsEditing] = useState(true);
  const [todo, setTodo] = useState("random shit");
  const handleEdit = () => {
    console.log("eh");
    setIsEditing(false);
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        className="taskName"
        value={todo}
        onChange={handleChange}
        disabled={isEditing}
      />
      <div className="actions">
        <button onClick={handleEdit} className="editBtn bg-slate-300 px-3">
          e
        </button>
        <button className="completeBtn bg-orange-400 px-3">c</button>
      </div>
    </>
  );
}

export default Card;
