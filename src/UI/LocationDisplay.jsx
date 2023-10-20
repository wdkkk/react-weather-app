import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.sass";
import constants from "../constants/constants";

import weatherStore from "../store/weatherStore";

const LocationDisplay = ({ location }) => {
  const navigate = useNavigate();

  return (
    <div
      className="LocationDisplay"
      onClick={() => navigate(`/forecast/${location.name.toLowerCase().replace("'", "")}`)}
    >
      <div className="LocationDisplayCity">{location.name}</div>
      <div className="LocationDisplayImage">    
        <img src={constants.IMG_URL + location.weather[0].icon} alt="" />
      </div>
      <div className="LocationDisplayTemp">{location.main.temp}°C</div>
      <div className="LocationDisplayDesc">{location.weather[0].main}</div>
      <div
        className="LocationDisplayClose"
        onClick={(e) => {
          e.stopPropagation();
          weatherStore.deleteLocation(location.id);
        }}
      >
        <div></div>
      </div>
    </div>
  );
};

export default LocationDisplay;
