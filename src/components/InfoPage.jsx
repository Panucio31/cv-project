import Education from "./Education";
import Experience from "./Experiance";
import PersonalInfo from "./PersonalInfo";

function InfoPage() {
  return (
    <div className="input-container">
      <PersonalInfo />
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
