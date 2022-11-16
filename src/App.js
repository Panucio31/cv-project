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
    },
    eduInfo: [],
    expInfo: [],
  });
  
  return (
    <>
      <InfoPage appState={appState} setAppState={setAppState} />
      <FilledCv appState={appState} setAppState={setAppState}/>
    </>
  );
}

export default App;
