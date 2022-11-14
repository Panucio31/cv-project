import { useState } from "react";

function Education() {
  const [educationInfo, setEducationInfo] = useState({
    uniName: "",
    degree: "",
    subject: " ",
    startDate: "",
    endDate: "",
  });

  const handleUniChange = (e) => {
    setEducationInfo({
      ...educationInfo,
      uniName: e.target.value,
    });
  };

  const handleDegree = (e) => {
    
    setEducationInfo({ 
      ...educationInfo,
      degree: e.target.value,
     });
  };

  const handleSubject = (e) => {
    console.log(e.target.value)
    setEducationInfo({
      ...educationInfo,
      subject: e.target.value,
    })
  }
 console.log(educationInfo.subject);
  return (
    <>
      <div className="info-container">
        <h1>Education</h1>
        <div className="container-ed">
          <input
            type="text"
            name="uniName"
            placeholder="University Name"
            value={educationInfo.uniName}
            onChange={(e) => handleUniChange(e)}
          />
          <input
            type="text"
            placeholder="Degree"
            value={educationInfo.degree}
            onChange={(e) => handleDegree(e)}
          />
        </div>
        <textarea
          name="subject"
          cols="30"
          rows="10"
          placeholder="Describe Your Subject"
          value={educationInfo.subject}
          onChange = {(e) => handleSubject(e)}
        ></textarea>
        <div className="date-input">
          <label htmlFor="date">Started From:</label>
          <input
            type="date"
            id="date"
            value={educationInfo.startDate}
            // onChange={(e) => handleChange(e)}
          />
          <label htmlFor="date">Until:</label>
          <input
            type="date"
            id="date"
            value={educationInfo.endDate}
            // onChange={(e) => handleChange(e)}
          />
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
