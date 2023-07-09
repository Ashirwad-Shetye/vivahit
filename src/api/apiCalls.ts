import axios from "axios"
import { WeatherData, LatLon } from "../lib/types";
import { OW_KEY, OW_API_URL } from "./constants";

  
export const fetchCurrentWeatherData = async ({lat,lon}:LatLon): Promise<WeatherData> => {
    const response = await axios.get(`${OW_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OW_KEY}&units=metric`);
    const data = response.data;
    return data 
};

export const fetchForecastData = async ({lat,lon}:LatLon): Promise<WeatherData> => {
    const response = await axios.get(`${OW_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OW_KEY}&units=metric`);
    const data = response.data;
    return data
};