import { makeAutoObservable, toJS } from "mobx";

class WeatherStore {
  weatherLocations = [];

  constructor() {
    makeAutoObservable(this);
  }

  addLocation(location) {
    this.weatherLocations = this.weatherLocations.filter(
      (l) => l !== "loading"
    );
    if (this.weatherLocations.find((l) => l.id === location.id)) return false;
    else this.weatherLocations = [location, ...this.weatherLocations];
  }
  deleteLocation(id) {
    this.weatherLocations = this.weatherLocations.filter((l) => l.id !== id);
  }
  clearLocations() {
    this.weatherLocations = [];
  }
  addPromiseLocation = () => {
    this.weatherLocations.push("loading");
  };
}

export default new WeatherStore();
