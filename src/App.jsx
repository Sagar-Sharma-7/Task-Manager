import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <>
      <h1 className="heading">To DO</h1>
      <Column category="Low Priority" bg="green" />
      {/* <Column category="Medium Priority" bg="yellow" />
      <Column category="High Priority" bg="red" />
      <Column category="Completed" bg="blue" /> */}
    </>
  );
}

export default App;
