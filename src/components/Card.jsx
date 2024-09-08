import React from "react";

function Card({ id, task, completed, deleteCard, updateCardCompletion }) {
  return (
    <div
      className={`rounded-lg shadow-md shadow-[#101010] px-4 py-4 flex gap-2w-full ${
        completed ? "bg-green-400 text-black" : "bg-[#24272B] text-[#B5BDC9]"
      }`}
    >
      <div className="inputs flex gap-2 justify-center items-center w-full">
        <input
          type="checkbox"
          name="checkbox"
          className="completeCheck cursor-pointer w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          checked={completed}
          onChange={(e) => updateCardCompletion(id, e.target.checked)}
        />
        <input
          type="text"
          className="task bg-transparent font-normal"
          value={task}
          disabled={true}
        />
      </div>
      <button className="deleteTodo w-6" onClick={() => deleteCard(id)}>
        <img
          src="delete.svg"
          alt=""
          className="w-6 opacity-80 hover:opacity-100"
        />
      </button>
    </div>
  );
}

export default Card;
