import { useRef } from "react";

function AddToDoWork({ onClick }) {
  const todoNameElement = useRef(null);
  const todoDateElement = useRef(null);

  const onButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    todoNameElement.current.value = "";
    const todoDate = todoDateElement.current.value;
    todoDateElement.current.value = "";
    onClick(todoName, todoDate);
  };

  return (
    <form onSubmit={onButtonClick}>
      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <div className="input-group flex-nowrap">
              <input
                type="text"
                ref={todoNameElement}
                className="form-control border-dark"
                placeholder="Schedule Task"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <div className="col-4">
            <input
              type="date"
              ref={todoDateElement}
              className="form-control border-dark"
            ></input>
          </div>
          <div className="col-2">
            <button className="btn btn-success text-nowrap">Add Task</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddToDoWork;
