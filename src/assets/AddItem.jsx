function AddToDoWork() {
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
            />
          </div>
        </div>
        <div className="col-4">
          <input type="date" className="form-control border-dark"></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success text-nowrap">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDoWork;
