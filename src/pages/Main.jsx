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
  const [alertState, setAlertState] = useState(false);
  const [alertText, setAlertText] = useState("");

  const addLocation = (location) => {
    const res = weatherStore.addLocation(location);

    if (res === false) sentAlert("This location is already on the list");
  };

  const clearLocations = () => {
    weatherStore.clearLocations();
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
        addPromiseLocation={weatherStore.addPromiseLocation}
      />

      <div className="button__wrapper">
        <Button onClick={() => clearLocations()}>Очистить список</Button>
      </div>

      <LocationsList />
      <Alert visible={alertState} text={alertText} />
    </div>
  );
};

export default Main;
