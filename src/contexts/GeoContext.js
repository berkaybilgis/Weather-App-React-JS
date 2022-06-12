import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const GeoContext = createContext();

export const GeoProvider = ({ children }) => {
  const [cityLat, setCityLat] = useState();
  const [cityLon, setCityLon] = useState();

  const values = { cityLat, setCityLat, cityLon, setCityLon };

  return <GeoContext.Provider value={values}>{children}</GeoContext.Provider>;
};

export const useGeo = () => useContext(GeoContext);
