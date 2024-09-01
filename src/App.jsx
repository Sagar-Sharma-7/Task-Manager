import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <div className="mainContainer items-center flex-col w-auto mt-6 border border-red-500 inline-block">
      <div className="heading m-4 border border-green-500">
        <p>Tasks</p>
      </div>
      <div className="column-container flex gap-8 border border-red-500">
        <Column stageName="Low Priority" />
        <Column stageName="Medium Priority" />
        <Column stageName="High Priority" />
      </div>
    </div>
  );
}

export default App;
