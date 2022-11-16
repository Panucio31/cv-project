function FilledEduc(props) {
  const handleClick = (id) => {
    const filtered = props.appState.eduInfo.filter((edu) => edu.id !== id);
    console.log(filtered);
    props.setAppState({ ...props.appState.eduInfo, filtered });
  };

  if (props.appState.eduInfo.length === 0) {
    return;
  }
  return props.appState.eduInfo.map((item) => (
    <div id={item.startDate} key={item.startDate}>
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
      <span onClick={handleClick}>X</span>
    </div>
  ));
}

export default FilledEduc;
