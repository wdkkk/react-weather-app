import React from "react";

import LocationDisplay from "../UI/LocationDisplay";
import LocationDisplayLoading from "../UI/LocationDisplayLoading";

import "./style.sass";
import weatherStore from "../store/weatherStore";
import { observer } from "mobx-react-lite";

const LocationsList = observer(() => {
  return (
    <div className="locations">
      {weatherStore.weatherLocations
        ? weatherStore.weatherLocations.map((location, index) =>
            location === "loading" ? (
              <LocationDisplayLoading key={index} />
            ) : (
              <LocationDisplay location={location} key={location.id} />
            )
          )
        : ""}
    </div>
  );
});

export default LocationsList;
