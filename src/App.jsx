import AppName from "./assets/AppName";
import AddToDoWork from "./assets/AddItem";
import Items from "./assets/Items";
import "./App.css";
import { useState } from "react";
import WelcomeMeassage from "./assets/WelcomeMessage";

function App() {
  const itemsList = [];

  const [arrayOfItems, setArrayOfItems] = useState(itemsList);

  const handleNewItem = (itemName, itemDueDate) => {
    const newArrayofItems = [
      ...arrayOfItems,
      { name: itemName, endDate: itemDueDate },
    ];
    setArrayOfItems(newArrayofItems);
  };

  const hanndleDeleteItem = (todoItemName) => {
    const postDeletionArray = arrayOfItems.filter(
      (item) => item.name !== todoItemName
    );
    setArrayOfItems(postDeletionArray);
  };
  return (
    <div className="container-fluid">
      <AppName />
      <AddToDoWork onClick={handleNewItem} />
      {arrayOfItems.length === 0 && <WelcomeMeassage />}
      <Items
        arrayOfItems={arrayOfItems}
        onDeleteClick={hanndleDeleteItem}
      ></Items>
    </div>
  );
}

export default App;
