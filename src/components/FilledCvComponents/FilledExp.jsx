function FilledExp(props) {

  const handleClick = (id) => {
    const filtered = props.appState.expInfo.filter((edu) => edu.id !== id);
    
    props.setAppState( {...props.appState,  expInfo: filtered });
  }

  return props.appState.expInfo.map((item) => (
    <div key={item.strDate}>
      <div className="dates">
        <strong>
          {item.strDate}-{item.endDate}
        </strong>
      </div>
      <div className="possition-name">
        <strong>{item.position}</strong>
      </div>
      <div className="company-name">
        <i>{item.company}</i>
      </div>
      <div className="description">{item.description}</div>
      <span onClick={() => handleClick(item.id)}>X</span>
    </div>
  ));
}

export default FilledExp;
