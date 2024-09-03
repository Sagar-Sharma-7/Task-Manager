import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <div className="mainContainer items-center flex-col w-auto mt-6  inline-block">
      <div className="heading py-4 border-b-2 border-[#2F2F2F] flex gap-2">
        <img src="table.svg" alt="" className="w-6" />
        <p className="text-lg">Tasks</p>
      </div>
      <div className="column-container flex gap-8 border border-red-500 my-4">
        <Column stageName="Low Priority" bg="red" />
        <Column stageName="Medium Priority" bg="yellow" />
        <Column stageName="High Priority" bg="green" />
      </div>
    </div>
  );
}

export default App;
