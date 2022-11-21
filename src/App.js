import { useState } from "react";
import "./App.css";
import ExperienceForm from "./components/ExperianceForm";
import EducationForm from "./components/EducationForm";
import PersonalInfo from "./components/FilledCvComponents/PersonalInfo"
import PersonalInfoForm from "./components/PersonalInfoForm";

function App() {
  const [appState, setAppState] = useState({
    personalInfo: {
      name: "",
      surname: "",
      adress: "",
      number: "",
      email: "",
      summary: "",
      profession: "",
      avatar: "",
    },
    eduInfo: [],
    expInfo: [],
  });
  // const [selectedFile, setSelectedFile] = useState(null);
  // // const [isFilePicked, setIsFilePicked] = useState(false);

  // // const handleFile = () => {};

  // const handleFileChange = (e) => {
  //   setSelectedFile(e.target.files[0]);
  //   // setIsFilePicked(true);
  // };

  return (
    <>
      <div>
        <PersonalInfoForm appState={appState} setAppState={setAppState}/>
        <ExperienceForm appState={appState} setAppState={setAppState}/>
        <EducationForm appState={appState} setAppState={setAppState}/>
        <div className="btn-container">
          <button className="generate-btn">Generate PDF</button>
          <button className="reset-btn">Reset Fields</button>
        </div>
      </div>
      <div>
        <PersonalInfo appState={appState} setAppState={setAppState}/>
      </div>
      {/* <InfoPage
        appState={appState}
        setAppState={setAppState}
        avatar={selectedFile}
        setAvatar={setSelectedFile}
        handleFileChange={handleFileChange}
      /> */}
      {/* <FilledCv appState={appState} setAppState={setAppState} /> */}
    </>
  );
}

export default App;
