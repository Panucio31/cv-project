function FilledEduc(props) {
  console.log(props.appState.eduInfo);
  return (
      props.appState.eduInfo.map((item) => (
        <div key={item.startDate}>
          <div className="dates"><strong>{item.startDate}-{item.endDate}</strong></div>
          <div className="company-uni"><strong>{item.uniName}</strong></div>
          <div className="possition"><i>{item.degree}</i></div>
          <div className="description">{item.subject}</div>
        </div>
      ))
  );
}

export default FilledEduc;
