function Item({ work, endDate }) {
  return (
    <div class="container all-content">
      <div class="row">
        <div class="col-6 justify-content-center">{work}</div>
        <div class="col-4 justify-content-center">{endDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger text-nowrap">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
