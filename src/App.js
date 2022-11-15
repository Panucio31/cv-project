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
    eduInfo: [
      { uniName: "", degree: "", subject: "", startDate: "", endDate: "" },
    ],
    expInfo: [
      { position: "", company: "", description: "", strDate: "", endDate: "" },
    ],
  });

  return (
    <>
      <InfoPage appState={appState} setAppState={setAppState} />
      <FilledCv appState={appState} />
    </>
  );
}

export default App;
