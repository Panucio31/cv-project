import { createContext, useState } from "react";

const eduContext = createContext()

function Education() {
  const [educationInfo, setEducationInfo] = useState({
    uniName: "",
    degree: "",
    subject: " ",
    startDate: "",
    endDate: "",
  });

  

  const handleChange = (e) => {
    const newInput = e.target.name;
    setEducationInfo({ ...educationInfo, [newInput]: e.target.value });
  };

 
  return (
    <eduContext.Provider value={educationInfo}>
      <div className="info-container">
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
      </div>
    </eduContext.Provider>
  );
}

export default Education;
