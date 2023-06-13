import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.sass";
import weather from "../constants/weather";

const LocationDisplay = ({ location }) => {
  const navigate = useNavigate();

  const weatherDesc = weather.find((o) => o.name === location.weather[0].main)
    ? weather.find((o) => o.name === location.weather[0].main)
    : "loading";

  return (
    <div
      className="LocationDisplay"
      onClick={() => navigate(`/forecast/${location.name.toLowerCase()}`)}
    >
      <div className="LocationDisplayCity">{location.name}</div>
      <div className="LocationDisplayImage">
        {weatherDesc === "loading" ? (
          <div className="loading"></div>
        ) : (
          <img src={weatherDesc.IMG_URL} alt="" />
        )}
      </div>
      <div className="LocationDisplayTemp">{location.main.temp}°C</div>
      <div className="LocationDisplayDesc">{location.weather[0].main}</div>
    </div>
  );
};

export default LocationDisplay;
