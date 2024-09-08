import React from "react";

function Card({ id, task, completed, deleteCard, updateCardCompletion }) {
  return (
    <div
      className={`rounded px-4 py-4 flex ${
        completed ? "bg-green-500" : "bg-[#262626]"
      }`}
    >
      <div className="inputs flex gap-2 justify-center align-middle">
        <input
          type="checkbox"
          name="checkbox"
          className="completeCheck text-green-500"
          checked={completed}
          onChange={(e) => updateCardCompletion(id, e.target.checked)}
        />
        <input
          type="text"
          className="task bg-transparent"
          value={task}
          disabled={true}
        />
      </div>
      <button className="deleteTodo w-6" onClick={() => deleteCard(id)}>
        <img src="delete.svg" alt="" className="opacity-50 hover:opacity-100" />
      </button>
    </div>
  );
}

export default Card;
