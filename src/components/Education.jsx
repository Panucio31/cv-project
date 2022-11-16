import { useState } from "react";

const initialState = {
  uniName: "",
  degree: "",
  subject: "",
  startDate: "",
  endDate: "",
};

function Education(props) {
  const [educationInfo, setEducationInfo] = useState({
    uniName: "",
    degree: "",
    subject: "",
    startDate: "",
    endDate: "",
    id:"",
  });

  const newID = Date.now()

  const handleChange = (e) => {
    const newInput = e.target.name;
    setEducationInfo({ ...educationInfo, [newInput]: e.target.value, id: newID });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props.setAppState({
      ...props.appState,
      eduInfo: [...props.appState.eduInfo, educationInfo],
    });
    setEducationInfo(initialState)
  };



  return (
    <form onSubmit={onSubmit} className="info-container">
      <h1>Education</h1>
      <div className="container-ed">
        <input
          type="text"
          name="uniName"
          placeholder="University Name"
          value={educationInfo.uniName}
          onChange={handleChange}
        />
        <input
          name="degree"
          type="text"
          placeholder="Degree"
          value={educationInfo.degree}
          onChange={handleChange}
        />
      </div>
      <textarea
        name="subject"
        cols="30"
        rows="10"
        placeholder="Describe Your Subject"
        value={educationInfo.subject}
        onChange={handleChange}
      ></textarea>
      <div className="date-input">
        <label htmlFor="date">Started From:</label>
        <input
          name="startDate"
          type="date"
          id="date"
          value={educationInfo.startDate}
          onChange={handleChange}
        />
        <label htmlFor="date">Until:</label>
        <input
          name="endDate"
          type="date"
          id="date"
          value={educationInfo.endDate}
          onChange={handleChange}
        />
      </div>
      <div className="btn-container">
        <button className="add-btn">Add</button>
        <button className="delete-btn">Delete</button>
      </div>
      <hr />
    </form>
  );
}

export default Education;
