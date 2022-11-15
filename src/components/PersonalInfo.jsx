function PersonalInfo({ appState, setAppState, personalInfo }) {
  console.log(personalInfo)
  const handleChange = (e) => {
    const newInfo = e.target.name;
    setAppState({ ...appState, [newInfo]: e.target.value });
  };

  return (
    <>
      <div className="info-container">
        <h1>Personal Information</h1>
        <h3>What is your Proffesion?</h3>
        <div className="target-profession">
          <input
            type="text"
            name="profession"
            value={personalInfo.profession}
            onChange={handleChange}
            placeholder='What is your profesion?'
          />
        </div>
        <div className="container-pi">
          <input
            name="name"
            type="text"
            placeholder="First Name"
            value={personalInfo.name}
            onChange={handleChange}
          />
          <input
            name="surname"
            type="text"
            placeholder="Last Name"
            value={personalInfo.surname}
            onChange={handleChange}
          />
          <input
            name="adress"
            type="text"
            placeholder="Address"
            value={personalInfo.adress}
            onChange={handleChange}
          />
          <input
            name="number"
            type="number"
            placeholder="Phone Number"
            value={personalInfo.number}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={personalInfo.email}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="summary"
          id="sum"
          cols="30"
          rows="10"
          placeholder="Professional Summary"
          value={personalInfo.summary}
          onChange={handleChange}
        ></textarea>
      </div>
      <hr />
    </>
  );
}

export default PersonalInfo;
