import { useState } from "react";

import Form from "../components/Form";
import LocationsList from "../components/LocationsList";

import "../globalStyle.sass";
import Button from "../UI/Button";
import Alert from "../UI/Alert";

const Main = () => {
  const [locations, setLocations] = useState([]);
  const [alertState, setAlertState] = useState(false);
  const [alertText, setAlertText] = useState("");

  const addLocation = (location) => {
    if (locations.find((l) => l.id === location.id) && locations.length !== 0) {
      setLocations(locations.splice(0));
      sentAlert("This location is already on the list");
    } else
      locations
        ? setLocations([location, ...locations])
        : setLocations([location]);
  };

  const addPromiseLocation = () => {
    locations
      ? setLocations(["loading", ...locations])
      : setLocations("loading");
  };

  const sentAlert = (text) => {
    setAlertState(true);
    setAlertText(text);

    setTimeout(() => {
      setAlertState(false);
    }, 3000);
  };
  return (
    <div>
      <Form
        addLocation={addLocation}
        sentAlert={sentAlert}
        addPromiseLocation={addPromiseLocation}
      />
      <Button
        style={{ margin: "0 auto", marginTop: 65, width: 500 }}
        onClick={() => setLocations([])}
      >
        Clear
      </Button>
      ;
      <LocationsList locations={locations} />
      <Alert visible={alertState} text={alertText} />
    </div>
  );
};

export default Main;
