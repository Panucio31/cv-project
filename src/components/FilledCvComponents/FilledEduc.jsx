function FilledEduc(props) {


  console.log(props.appState.eduInfo)
  
  const handleClick = (id) => {
    const filtered = props.appState.eduInfo.filter((edu) => edu.id !== id);
    console.log(filtered);
    props.setAppState( {...props.appState,  eduInfo: filtered });
  };

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
    </div>
  ));
}

export default FilledEduc;
