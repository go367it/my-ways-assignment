import "./Atmosphere.css";

const Atmosphere = (props) => {
  return (
    <div>
      <div className="section">
        <span>
          High/Low:&nbsp;&nbsp; {props.high}/{props.low}
        </span>
        <span>Pressure: &nbsp;&nbsp; {props.pressure}</span>
      </div>

      <div className="section">
        <span>Visibility: &nbsp;&nbsp; {props.visibility}</span>
        <span>Humidity: &nbsp;&nbsp; {props.humidity}</span>
      </div>

      <div className="section">
        <span>Wind: &nbsp;&nbsp; {props.wind}</span>
      </div>
    </div>
  );
};

export default Atmosphere;
