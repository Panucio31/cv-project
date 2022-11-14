import FilledEduc from "./FilledEduc";
import FilledExp from "./FilledExp";
// import PersonalInfo from "../PersonalInfo";

function FilledCv() {
  
  
  return (
    <>
      <div className="cv-container">
        <div className="header">
          <div className="name">{}</div>
          <div className="profesion">{}</div>
          <div className="avatar">
            <img src="profile.jpg" alt="" />
          </div>
        </div>
        <div className="info-field">
          <div className="experiance">
            <h3>Experiance</h3>
            <FilledExp/>
          </div>
          <hr className="vertical"/>
          <div className="education">
            <h3>Education</h3>
              <FilledEduc/>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilledCv;
