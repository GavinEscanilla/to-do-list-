import { useState } from "react";
import Display from "./Display";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex flex-col bg-gray-200 h-screen">
    <h1 className="text-8xl font-bold text-center">To Do List</h1>
    <Display />
    </div>
  );
}

export default App;
