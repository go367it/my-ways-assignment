import { useEffect, useState } from "react";
import "./styles.css";
import weather from "./weather.json";
import Astronomy from "./Astronomy";
import Atmosphere from "./Atmosphere";

export default function App() {
  const [location, setLocation] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");
  const [currentCondition, setCurrentCondition] = useState("");
  const [astronomy, setAstronomy] = useState([{}]);
  const [atmosphere, setAtmosphere] = useState([{}]);
  // const [image, setImage] = useState("");
  // const

  useEffect(() => {
    const data = weather[0].query.results.channel;
    console.log(data);
    setLocation(data.location);
    setCurrentTemp(data.item.condition.temp);
    setCurrentCondition(data.item.condition.text);
    setAstronomy(data.astronomy);
    let jsonData = {
      humidity: data.atmosphere.humidity,
      pressure: data.atmosphere.pressure,
      visibility: data.atmosphere.visibility,
      wind: data.wind.speed,
      high: data.item.forecast[0].high,
      low: data.item.forecast[0].low
    };
    setAtmosphere(jsonData);

    // setAtmosphere(data1);

    // setImage(data.image.url);
  }, []);

  return (
    <div className="App">
      {/* <img src={image} alt="photos" /> */}
      <p>
        {location.city} City,{location.region}, {location.country}{" "}
      </p>

      <div className="section1">
        <div className="current-temp">
          <h1>{currentTemp} &#8451;</h1>
          <p>{currentCondition}</p>
        </div>

        <Astronomy sunrise={astronomy.sunrise} sunset={astronomy.sunset} />
      </div>

      <div className="section-2">
        <Atmosphere
          high={atmosphere.high}
          low={atmosphere.low}
          pressure={atmosphere.pressure}
          visibility={atmosphere.visibility}
          humidity={atmosphere.humidity}
          wind={atmosphere.wind}
        />
      </div>
    </div>
  );
}
