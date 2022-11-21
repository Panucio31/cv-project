function PersonalInfoForm(props) {

  
  const handleChange = (e) => {
    const newInfo = e.target.name;
    props.setAppState({ ...props.appState, [newInfo]: e.target.value });
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
            value={props.appState.profession}
            onChange={handleChange}
            placeholder="What is your profesion?"
          />
        </div>
        <div className="container-pi">
          <input
            name="name"
            type="text"
            placeholder="First Name"
            value={props.appState.name}
            onChange={handleChange}
          />
          <input
            name="surname"
            type="text"
            placeholder="Last Name"
            value={props.appState.surname}
            onChange={handleChange}
          />
          <input
            name="adress"
            type="text"
            placeholder="Address"
            value={props.appState.adress}
            onChange={handleChange}
          />
          <input
            name="number"
            type="number"
            placeholder="Phone Number"
            value={props.appState.number}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={props.appState.email}
            onChange={handleChange}
          />
        </div>
        <input type="file" name="avatar" onChange={props.handleFileChange}/>
       
        <textarea
          name="summary"
          id="sum"
          cols="30"
          rows="10"
          placeholder="Professional Summary"
          value={props.appState.summary}
          onChange={handleChange}
        ></textarea>
      </div>
      <hr />
    </>
  );
}

export default PersonalInfoForm;
