import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.sass";

const LocationDisplay = ({ location }) => {
  const navigate = useNavigate();

  return (
    <div
      className="LocationDisplay"
      onClick={() => navigate(`/forecast/${location.name.toLowerCase()}`)}
    >
      <a href={`/forecast/${location.name.toLowerCase()}`}>
        <div className="LocationDisplayCity">{location.name}</div>
        <div className="LocationDisplayImage"></div>
        <div className="LocationDisplayTemp">{location.main.temp}°C</div>
        <div className="LocationDisplayDesc">{location.weather[0].main}</div>
      </a>
    </div>
  );
};

export default LocationDisplay;
