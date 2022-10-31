import Education from "./Education";
import Experience from "./Experiance";
import PersonalInfo from "./PersonalInfo";

function InfoPage() {
  return <>
    <PersonalInfo/>
    <Experience/>
    <Education/>
    <button>
      Generate PDF
    </button>
    <button>
      Reset Fields
    </button>
  </>;
}

export default InfoPage;
