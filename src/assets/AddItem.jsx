import { useState } from "react";

function AddToDoWork({ onClick }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (value) => {
    setTodoName(value);
  };

  const handleDateChange = (value) => {
    setTodoDate(value);
  };

  const onButtonClick = () => {
    onClick(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 ">
          <div className="input-group flex-nowrap">
            <input
              type="text"
              className="form-control border-dark"
              placeholder="Schedule Task"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              value={todoName}
              onChange={(event) => handleNameChange(event.target.value)}
            />
          </div>
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control border-dark"
            value={todoDate}
            onChange={(event) => handleDateChange(event.target.value)}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success text-nowrap"
            onClick={onButtonClick}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDoWork;
