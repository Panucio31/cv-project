function EducationInfo(props) {


  console.log(props.appState.eduInfo)
  
  const handleClick = (id) => {
    const filtered = props.appState.eduInfo.filter((edu) => edu.id !== id);
    console.log(filtered);
    props.setAppState( {...props.appState,  eduInfo: filtered });
  };

  const editOnClick = (id) => {

  }

  // console.log(props.appState.eduInfo.id)
  return props.appState.eduInfo.map((item) => (
    <div key={item.startDate} id={item.id}>
      <div className="dates">
        <strong>
          {item.startDate}-{item.endDate}
        </strong>
      </div>
      <div className="company-uni">
        <strong>{item.uniName}</strong>
      </div>
      <div className="possition">
        <i>{item.degree}</i>
      </div>
      <div className="description">{item.subject}</div>
      <span onClick={() => handleClick(item.id)}>X</span>
      <button style={{width:"50px", height:"20px", backgroundColor:"green", marginLeft:"10px"}} onClick={() => editOnClick(item.id)}>Edit</button>
    </div>
  ));
}

export default EducationInfo;
