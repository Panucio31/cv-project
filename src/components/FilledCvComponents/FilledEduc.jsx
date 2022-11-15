function FilledEduc(props) {
  console.log(props.appState);
  return (
      {props.appState.eduInfo.map((item) => (
        <div>
          <div className="dates">{item.startDate}-{item.endDate}</div>
          <div className="possition">{item.degree}</div>
          <div className="company-uni">{item.uniName}</div>
          <div className="description">{item.subject}</div>
        </div>
      ))}
  );
}

export default FilledEduc;
