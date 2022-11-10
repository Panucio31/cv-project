import { useState } from "react";

function Education() {
  const [educationInfo, setEducationInfo] = useState(
    {
      uniName: "",
      degree: "",
      subject: "",
      startDate: "",
      endDate: "",
    },
  );

 

  const handleChange = (e) => {
    setEducationInfo(e.target.value);
    
  };

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
            onChange={(e) => handleChange(e)}
          />
          <input type="text" placeholder="Degree" />
        </div>
        <textarea
          name="subject"
          id="sub"
          cols="30"
          rows="10"
          placeholder="Describe Your Subject"
        ></textarea>
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
