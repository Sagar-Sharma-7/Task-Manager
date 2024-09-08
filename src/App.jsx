import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <div className="fit w-full flex justify-center">
      <div className="mainContainer items-center flex-col w-auto mt-6  inline-block">
        {/* <div className="heading py-4 border-b-2 border-[#101205] flex gap-2">
          <img src="table.svg" alt="" className="w-6 text-black" />
          <p className="text-lg text-[#101205] font-semibold">Tasks</p>
        </div> */}
        <div className="column-container flex gap-4 my-4">
          <Column stageName="Low Priority" bg="#90dc96" />
          <Column stageName="Medium Priority" bg="#ffc979" />
          <Column stageName="High Priority" bg="#e88e8e" />
        </div>
      </div>
    </div>
  );
}

export default App;
