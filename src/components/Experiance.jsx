function Experience() {
  return (
    <>
    <div className="info-container">
      <h1>Experience</h1>
      <div className="container-xp">
        <input type="text" placeholder="Position" />
        <input type="text" placeholder="Company" />
      </div>
        <textarea name="description" id="des" cols="30" rows="10" placeholder="Describe your Responsibilities"></textarea>
        <div className="date-input">
          <label htmlFor="date">Started From:</label>
          <input type="date" id="date" />
          <label htmlFor="date">Until:</label>
          <input type="date" id="date" />
        </div>
      <div className="btn-container">
        <button className="add-btn">Add</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
        <hr />
    </>
  );
}

export default Experience;
