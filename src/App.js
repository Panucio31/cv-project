import { useState } from 'react';
import './App.css';
import FilledCv from './components/FilledCv';
import InfoPage from './components/InfoPage';


function App() {

const [input, setInput] = useState('')

const handleChange = (e) => {
  setInput(e.target.value)
}

  return (
    <div className="cv-container">
     <InfoPage/>
     <FilledCv onChange={handleChange} form={input}/>
    </div>
  );
}

export default App;
