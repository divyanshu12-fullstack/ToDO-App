import ImplementItem from "./ToDoItem";
const Items = ({ arrayOfItems, onDeleteClick }) => {
  return (
    <>
      {arrayOfItems.map((item, index) => (
        <ImplementItem
          work={item.name}
          endDate={item.endDate}
          key={index}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </>
  );
};
export default Items;
