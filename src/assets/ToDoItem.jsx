function ImplementItem({ work, endDate }) {
  return (
    <div className="container all-content">
      <div className="row">
        <div className="col-6 justify-content-center">{work}</div>
        <div className="col-4 justify-content-center">{endDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger text-nowrap">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImplementItem;
