import React from "react";
import ForecastDisplay from "../UI/ForecastDisplay";

import "./style.sass";

const ForecastList = ({ forecasts }) => {
  return (
    <div className="forecasts">
      {forecasts.map((f, index) => (
        <ForecastDisplay key={index} forecast={f} />
      ))}
    </div>
  );
};

export default ForecastList;
