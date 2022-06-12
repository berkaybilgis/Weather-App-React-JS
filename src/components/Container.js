import { useEffect, useState } from "react";
import { useGeo } from "../contexts/GeoContext";
import { useWeather } from "../contexts/WeatherContext";
import axios from "axios";
import Dropdown from "./Dropdown.js";

function Container() {
  const [cityName, setCityName] = useState("Adana");
  const { setCityLat, setCityLon } = useGeo();
  const { dailyData } = useWeather();

  const url = "http://api.openweathermap.org/geo/1.0/direct?q=";
  const key = "8b04f143999c57b866cfc43b88fb1f30";

  useEffect(() => {
    axios(`${url}${cityName}&limit=1&appid=${key}`).then((res) => {
      setCityLat(res.data[0].lat);
      setCityLon(res.data[0].lon);
    });
  }, [cityName]);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();

  return (
    <div className="main">
      <Dropdown setCityName={setCityName} />

      <br />

      <div>
        {dailyData.map((day, i) => {
          return (
            <div className="weather" id={JSON.stringify(i)} key={i}>
              <div className="day">{weekday[d.getDay() + i]}</div>
              <img
                className="icon"
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="weather"
              />
              <div className="temp">{`${Math.round(day.temp.max)}° ${Math.round(
                day.temp.min
              )}°`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Container;
