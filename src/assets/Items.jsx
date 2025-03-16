import ImplementItem from "./ToDoItem";
const Items = ({ arrayOfItems }) => {
  return (
    <>
      {arrayOfItems.map((item) => (
        <ImplementItem work={item.name} endDate={item.date} />
      ))}
    </>
  );
};
export default Items;
