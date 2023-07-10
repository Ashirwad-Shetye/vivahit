import axios from "axios"
import { WeatherData, LatLon } from "../lib/types";
import { OW_KEY, OW_API_URL, AQI_URL } from "./constants";

  
export const fetchWeatherData = async ({ lat, lon }: LatLon) => {
  const currentWeatherFetch = fetch(
    `${OW_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OW_KEY}&units=metric`
  );

  const forecastFetch = fetch(
    `${OW_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OW_KEY}&units=metric`
  );

  const AQIFetch = fetch(`${AQI_URL}lat=${lat}&lon=${lon}&appid=${OW_KEY}`);

  try {
    const [currentWeatherResponse, forecastResponse, AQIResponse] =
      await Promise.all([currentWeatherFetch, forecastFetch, AQIFetch]);

    const weatherResponse = await currentWeatherResponse.json();
    const forecastData = await forecastResponse.json();
    const AQIData = await AQIResponse.json();

    return [weatherResponse, forecastData, AQIData];
  } catch (err) {
    console.error(err);
    return [null, null, null];
  }
};