import React from "react";

import LocationDisplay from "../UI/LocationDisplay";
import LocationDisplayLoading from "../UI/LocationDisplayLoading";

import "./style.sass";

const LocationsList = ({ locations }) => {
  return (
    <div className="locations">
      {locations
        ? locations.map((location, index) =>
            location === "loading" ? (
              <LocationDisplayLoading key={index} />
            ) : (
              <LocationDisplay location={location} key={location.id} />
            )
          )
        : ""}
    </div>
  );
};

export default LocationsList;
