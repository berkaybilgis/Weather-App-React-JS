import { createContext, useContext, useEffect, useState } from "react";
import { useGeo } from "../contexts/GeoContext";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [dailyData, setDailyData] = useState([]);
  const { cityLat, cityLon } = useGeo();

  const url = "https://api.openweathermap.org/data/2.5/onecall?";
  const key = "8b04f143999c57b866cfc43b88fb1f30";

  useEffect(() => {
    axios(
      `${url}lat=${cityLat}&lon=${cityLon}&exclude=daily.weather&appid=${key}&units=metric`
    ).then((res) => {
      setDailyData(res.data.daily.map((day) => day));
    });
  }, [cityLat]);

  const values = {
    dailyData,
    setDailyData,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
