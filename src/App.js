import { useState } from "react";
import "./App.css";
import FilledCv from "./components/FilledCvComponents/FilledCv";
import InfoPage from "./components/InfoPage";

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
  const [selectedFile, setSelectedFile] = useState(null);
  // const [isFilePicked, setIsFilePicked] = useState(false);

  // const handleFile = () => {};

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    // setIsFilePicked(true);
  };
  

  return (
    <>
      <InfoPage
        appState={appState}
        setAppState={setAppState}
        avatar={selectedFile}
        setAvatar={setSelectedFile}
        handleFileChange={handleFileChange}

      />
      <FilledCv appState={appState} setAppState={setAppState} />
    </>
  );
}

export default App;
