import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import constants from "../../constants/constants";
import axios from "axios";
import fetchData from "../../hooks/useFetch";
import Loading from "../../UI/Loading";
import ForecastList from "../../components/ForecastList";

import { useNavigate } from "react-router-dom";

import Button from "../../UI/Button";

import "./style.sass";

const Forecast = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [forecastData, setForecastData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchName();
  }, []);

  const fetchName = async () => {
    const res = await fetchData(
      `${constants.BASE_URL}/geo/1.0/direct?q=${params.location}&limit=5&appid=${constants.API_KEY}`
    );

    if (res !== undefined && res.length) fetchForecast(res[0]);
  };

  const fetchForecast = async (locationData) => {
    const res = await axios(
      `${constants.BASE_URL}data/2.5/forecast?lat=${locationData.lat}&lon=${locationData.lon}&appid=${constants.API_KEY}`
    );

    setForecastData(res.data);
    setIsLoading(false);
  };

  return (
    <div className="forecast__wrapper">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="forecast">
          <div className="forecast__title">{forecastData.city.name}</div>
          <Button
            style={{ margin: "0 auto", marginTop: 50, width: 500 }}
            onClick={() => navigate("/")}
          >
            Back
          </Button>
          <ForecastList forecasts={forecastData.list.splice(0, 9)} />
        </div>
      )}
    </div>
  );
};

export default Forecast;
