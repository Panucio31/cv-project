function FilledCv(props) {
  console.log(props)
  return <>
    <div className="cv-container">
      <header>
        <h1>{props.fName}</h1>
      </header>
    </div>
  </>;
}

export default FilledCv;
