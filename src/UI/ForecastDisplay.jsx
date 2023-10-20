import React from "react";

import "./style.sass";
import constants from "../constants/constants";

const ForecastDisplay = ({ forecast }) => {
  const convertTemp = (temp) => Math.round(temp - 273.15);

  return (
    <div className="ForecastDisplay">
      <div className="LocationDisplayCity">{forecast.dt_txt.slice(10, 16)}</div>
      <div className="LocationDisplayImage">
        <img src={`${constants.IMG_URL}${forecast.weather[0].icon}.png`} alt="" />
      </div>
      <div className="LocationDisplayTemp">
        {convertTemp(forecast.main.temp)}°C
      </div>
      <div className="LocationDisplayDesc">{forecast.weather[0].main}</div>
    </div>
  );
};

export default ForecastDisplay;
