import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import constants from "../constants/constants";
import axios from "axios";
import fetchData from "../hooks/useFetch";

const Forecast = () => {
  const params = useParams();

  const [forecast, setForecast] = useState();

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

    setForecast(res.data);
  };

  return (
    <div>
      Forecast {params.location} {forecast ? forecast.cod : ""}
    </div>
  );
};

export default Forecast;
