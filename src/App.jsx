import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./assets/AppName";
import AddToDoWork from "./assets/AddItem";
import Item1 from "./assets/ToDoItem1";
import Item2 from "./assets/ToDoItem2";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <AppName />
      <AddToDoWork />
      <Item1 />
      <Item2 />
    </div>
  );
}

export default App;
