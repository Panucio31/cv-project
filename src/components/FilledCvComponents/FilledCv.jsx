import FilledEduc from "./FilledEduc";
import FilledExp from "./FilledExp";
// import PersonalInfo from "../PersonalInfo";

function FilledCv(props) {
  return (
    <>
      <div className="cv-container">
        <div className="header">
          <div className="name">
            {props.appState.name} {props.appState.surname}
          </div>
          <div className="profesion">{props.appState.profession}</div>
          <div className="avatar">
            <img src="profile.jpg" alt="" />
          </div>
        </div>
        <div className="info-field">
          <div className="experiance">
            <h3>Experiance</h3>
            <FilledExp appState={props.appState} setAppState={props.setAppState}/>
          </div>
          <hr className="vertical" />
          <div className="education">
            <h3>Education</h3>
            <FilledEduc appState={props.appState} setAppState={props.setAppState} />
            <h3>Contact Info:</h3>
            <h5>Phone No: {props.appState.number}</h5>
            <h5>City: {props.appState.adress}</h5>
            <h5>Email: {props.appState.email}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilledCv;
