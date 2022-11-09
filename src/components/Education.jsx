function Education() {
  return (
    <>
    <div className="info-container">
      <h1>Education</h1>
      <div className="container-ed">
        <input type="text" placeholder="University Name" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Degree" />
      </div>
        <textarea name="subject" id="sub" cols="30" rows="10" placeholder="Describe Your Subject"></textarea>
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
      <hr />
    </div>
    </>
  );
}

export default Education;
