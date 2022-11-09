function PersonalInfo() {
  return (
    <>
      <div className="info-container">
        <h1>Personal Information</h1>
        <div className="container-pi">
          <input type="text" placeholder="First Name" id="fName" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Address" />
          <input type="number" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />
        </div>
          <textarea name="summary" id="sum" cols="30" rows="10" placeholder="Professional Summary"></textarea>
      </div>
      <hr />
    </>
  );
}

export default PersonalInfo;
