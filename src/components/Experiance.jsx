import { useState } from "react";

const initialValues = {
  position: "",
  company: "",
  description: "",
  strDate: "",
  endDate: "",
};

function Experience(props) {
  const [experience, setExperience] = useState({
    position: "",
    company: "",
    description: "",
    strDate: "",
    endDate: "",
    id: "",
  });

  const id = Date.now()

  const handleChange = (e) => {
    const newEntery = e.target.name;
    setExperience({ ...experience, [newEntery]: e.target.value, id });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.setAppState({
      ...props.appState,
      expInfo: [...props.appState.expInfo, experience],
    });
    setExperience(initialValues);
  };

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
