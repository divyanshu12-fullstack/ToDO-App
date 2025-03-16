import AppName from "./assets/AppName";
import AddToDoWork from "./assets/AddItem";
import Items from "./assets/Items";
import "./App.css";

function App() {
  const arrayOfItems = [
    {
      name: "Do Leetcode",
      endDate: "16/03/25",
    },
    {
      name: "Complete React Course",
      endDate: "20/03/25",
    },
    {
      name: "Complete Half Life 2",
      endDate: "01/05/25",
    },
  ];

  return (
    <div className="container-fluid">
      <AppName />
      <AddToDoWork />
      <Items arrayOfItems={arrayOfItems}></Items>
    </div>
  );
}

export default App;
