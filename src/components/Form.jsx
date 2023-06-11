import React, { useState } from "react";

import InputText from "../UI/InputText";
import Button from "../UI/Button";

import useFetch from "../hooks/useFetch";

import constants from "../constants";

import "./style.sass";

const Form = ({ addLocation, addPromiseLocation, sentAlert }) => {
  const [location, setLocation] = useState("");

  const fetchData = useFetch;

  const fetchName = async () => {
    const res = await fetchData(
      `${constants.BASE_URL}/geo/1.0/direct?q=${location}&limit=5&appid=${constants.API_KEY}`
    );

    if (res !== undefined && res.length) fetchWeather(res[0]);
    else sentAlert("Location not found ");

    setLocation("");
  };

  const fetchWeather = async (location) => {
    addPromiseLocation();

    const res = await fetchData(
      `${constants.BASE_URL}/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&exclude=current&appid=${constants.API_KEY}&units=metric`
    );

    addLocation(res);
  };

  return (
    <div className="form">
      <InputText
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
        onKeyPress={(e) => (e.key === "Enter" ? fetchName() : "")}
        type="text"
      />
      <Button onClick={() => fetchName()}>Add</Button>
    </div>
  );
};

export default Form;
