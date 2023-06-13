import React from "react";

import "./style.sass";
import weather from "../constants/weather";

const ForecastDisplay = ({ forecast }) => {
  const convertTemp = (temp) => Math.round(temp - 273.15);

  const weatherDesc = weather.find((o) => o.name === forecast.weather[0].main)
    ? weather.find((o) => o.name === forecast.weather[0].main)
    : "loading";

  return (
    <div className="ForecastDisplay">
      <div className="LocationDisplayCity">{forecast.dt_txt.slice(10, 16)}</div>
      <div className="LocationDisplayImage">
        {weatherDesc === "loading" ? (
          <div className="loading"></div>
        ) : (
          <img src={weatherDesc.IMG_URL} alt="" />
        )}
      </div>
      <div className="LocationDisplayTemp">
        {convertTemp(forecast.main.temp)}°C
      </div>
      <div className="LocationDisplayDesc">{forecast.weather[0].main}</div>
    </div>
  );
};

export default ForecastDisplay;
