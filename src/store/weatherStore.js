import { makeAutoObservable } from "mobx";

class WeatherStore {
  weatherLocations = [];

  constructor() {
    makeAutoObservable(this);
  }

  addLocation(location) {
    if (this.weatherLocations.find((l) => l.id === location.id)) return false;
    else this.weatherLocations = [location, ...this.weatherLocations];
  }
  clearLocations() {
    this.weatherLocations = [];
  }
}

export default new WeatherStore();
