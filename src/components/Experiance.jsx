import { useState } from "react";

function Experience(props) {
  const [experience, setExperience] = useState({
    position: "",
    company: "",
    description: "",
    strDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const newEntery = e.target.name;
    setExperience({...experience, [newEntery]: e.target.value})
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.setAppState({...props.appState, expInfo: [...props.appState.expInfo, experience]})
  }
  
  return (
    <>
      <form onSubmit={onSubmit} className="info-container">
        <h1>Experience</h1>
        <div className="container-xp">
          <input
            name="position"
            type="text"
            placeholder="Position"
            value={experience.position}
            onChange={handleChange}
          />
          <input
            name="company"
            type="text"
            placeholder="Company"
            value={experience.company}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="description"
          id="des"
          cols="30"
          rows="10"
          placeholder="Describe your Responsibilities"
          value={experience.description}
          onChange={handleChange}
        ></textarea>
        <div className="date-input">
          <label htmlFor="date">Started From:</label>
          <input
            name="strDate"
            type="date"
            id="date"
            value={experience.strDate}
            onChange={handleChange}
          />
          <label htmlFor="date">Until:</label>
          <input
            name="endDate"
            type="date"
            id="date"
            value={experience.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="btn-container">
          <button className="add-btn">Add</button>
          <button className="delete-btn">Delete</button>
        </div>
      </form>
      <hr />
    </>
  );
}

export default Experience;
