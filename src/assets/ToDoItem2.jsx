function Item2() {
  let work = "Complete React Course";
  let ends = "20/03/25";
  return (
    <div class="container all-content">
      <div class="row">
        <div class="col-6 justify-content-center">{work}</div>
        <div class="col-4 justify-content-center">{ends}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger text-nowrap">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item2;
