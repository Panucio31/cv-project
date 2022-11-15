import Education from "./Education";
import Experience from "./Experiance";
import PersonalInfo from "./PersonalInfo";

function InfoPage(props) {
  return (
    <div className="input-container">
      <PersonalInfo appState={props.appState} setAppState={props.setAppState} />
      <Experience />
      <Education />
      <div className='btn-container'>
        <button className="generate-btn">Generate PDF</button>
        <button className="reset-btn">Reset Fields</button>
      </div>
    </div>
  );
}

export default InfoPage;
