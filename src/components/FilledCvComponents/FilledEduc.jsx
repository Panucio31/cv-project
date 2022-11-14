import { useContext } from "react";



function FilledEduc() {
  
  const eduInfo = useContext(educationInfo);

  console.log(eduInfo)
  return (
    <>
      <div className="dates" >{}</div>
      <div className="possition">{}</div>
      <div className="company-uni">{}</div>
      <div className="description">{}</div>
    </>
  );
}

export default FilledEduc;
