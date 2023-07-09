import { useWeatherStore, useLocationStore } from "../service/store";

const weatherData = useWeatherStore((state) => state.searchData);
const updateWeather = useWeatherStore((state) => state.updateWeatherData);
const locationData = useLocationStore((state) => state.location);
const updatelocation = useLocationStore((state) => state.updateLocation);
