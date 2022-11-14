import { useState } from "react";

function PersonalInfo() {
  const [info, setInfo] = useState({
    name: "",
    surname: "",
    adress: "",
    number: 86,
    email: "",
    summary: "",
  });

  const handleChange = (e) => {
    const newInfo = e.target.name;
    setInfo({ ...info, [newInfo]: e.target.value });
  };
  
  return (
    <>
      <div className="info-container">
        <h1>Personal Information</h1>
        <div className="container-pi">
          <input
            name="name"
            type="text"
            placeholder="First Name"
            value={info.name}
            onChange={handleChange}
          />
          <input
            name="surname"
            type="text"
            placeholder="Last Name"
            value={info.surname}
            onChange={handleChange}
          />
          <input
            name="adress"
            type="text"
            placeholder="Address"
            value={info.adress}
            onChange={handleChange}
          />
          <input
            name="number"
            type="number"
            placeholder="Phone Number"
            value={info.number}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="summary"
          id="sum"
          cols="30"
          rows="10"
          placeholder="Professional Summary"
          value={info.summary}
          onChange={handleChange}
        ></textarea>
      </div>
      <hr />
    </>
  );
}

export default PersonalInfo;
