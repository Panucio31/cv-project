function FilledExp(props) {
  return props.appState.expInfo.map((item) => (
    <div key={item.strDate}>
      <div className="dates"><strong>{item.strDate}-{item.endDate}</strong></div>
      <div className="possition-name"><strong>{item.position}</strong></div>
      <div className="company-name"><i>{item.company}</i></div>
      <div className="description">{item.description}</div>
    </div>
  ));
}

export default FilledExp;
