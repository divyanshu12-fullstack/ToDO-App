import AppName from "./assets/AppName";
import AddToDoWork from "./assets/AddItem";
import Item from "./assets/ToDoItem";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <AppName />
      <AddToDoWork />
      <Item work="Do LeetCode" endDate="16/03/25" />
      <Item work="Complete React Course" endDate="20/03/25" />
    </div>
  );
}

export default App;
