
function Education() {
  return (
    <div className="container">
      <h1>Education</h1>
      <input type="text" placeholder="University Name"/>
        <input type="text" placeholder="City"/>
        <input type="text" placeholder="Degree"/>
        <input type="text" placeholder="Subject"/>
        <label htmlFor="date">Started from </label>
        <input type="date" id="date"/>
        <label htmlFor="date">Until</label>
        <input type="date" id="date"/>
        <button>Add</button>
        <button>Delete</button>
    </div>
  );
}

export default Education;
