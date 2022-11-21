import EducationInfo from "./EducationInfo";
import ExperianceInfo from "./ExperianceInfo";
// import PersonalInfo from "../PersonalInfo";

function PersonalInfo(props) {
  return (
    <>
      <div className="cv-container">
        <div className="header">
          <div className="name">
            {props.appState.name} {props.appState.surname}
          </div>
          <div className="profesion">{props.appState.profession}</div>
          <div className="avatar">
            <img src={props.avatar} width={"100px"} alt="user avatar" />
          </div>
        </div>
        <div className="info-field">
          <div className="experiance">
            <h3>Experiance</h3>
            <ExperianceInfo
              appState={props.appState}
              setAppState={props.setAppState}
            />
          </div>
          <hr className="vertical" />
          <div className="education">
            <h3>Education</h3>
            <EducationInfo
              appState={props.appState}
              setAppState={props.setAppState}
            />
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

export default PersonalInfo;
