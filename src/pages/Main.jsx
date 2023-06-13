import { useState } from "react";

import Form from "../components/Form";
import LocationsList from "../components/LocationsList";

import "../globalStyle.sass";
import Button from "../UI/Button";
import Alert from "../UI/Alert";

import { toJS } from "mobx";

import weatherStore from "../store/weatherStore";

import "./style.sass";

const Main = () => {
  const [locations, setLocations] = useState(weatherStore.weatherLocations);
  const [alertState, setAlertState] = useState(false);
  const [alertText, setAlertText] = useState("");

  const addLocation = (location) => {
    const res = weatherStore.addLocation(location);

    if (res === false) sentAlert("This location is already on the list");

    setLocations(toJS(weatherStore.weatherLocations));
  };

  const addPromiseLocation = () => {
    setLocations(["loading", ...locations]);
  };

  const clearLocations = () => {
    weatherStore.clearLocations();
    setLocations([]);
  };

  const sentAlert = (text) => {
    setAlertState(true);
    setAlertText(text);

    setTimeout(() => {
      setAlertState(false);
    }, 3000);
  };
  return (
    <div className="main">
      <Form
        addLocation={addLocation}
        sentAlert={sentAlert}
        addPromiseLocation={addPromiseLocation}
      />

      <div className="button__wrapper">
        <Button onClick={() => clearLocations()}>Clear</Button>
      </div>

      <LocationsList locations={locations} />
      <Alert visible={alertState} text={alertText} />
    </div>
  );
};

export default Main;
