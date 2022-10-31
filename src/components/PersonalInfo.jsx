

function PersonalInfo(props) {
console.log(props)
  return (
    <>
      <div className="container">
        <h1>Personal Information</h1>

        <input 
        type="text" 
        placeholder="First Name" 
        id="fName"
        value={props.fName}
        onChange={props.onChange}
        />

        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Address" />
        <input type="number" placeholder="Phone Number" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Description" />
      </div>
    </>
  );
}

export default PersonalInfo;
