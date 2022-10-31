function Experience() {
  return (
    <>
      <div className="container">
        <h1>Experience</h1>
        <input type="text" placeholder="Position"/>
        <input type="text" placeholder="Company"/>
        <input type="text" placeholder="City"/>
        <label htmlFor="date">Started from </label>
        <input type="date" id="date"/>
        <label htmlFor="date">Until</label>
        <input type="date" id="date"/>
        <button>
          Add
        </button>
        <button>Delete</button>
      </div>
    </>
  );
}

export default Experience;
