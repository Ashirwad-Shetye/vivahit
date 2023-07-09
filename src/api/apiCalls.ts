import axios from "axios"
import { WeatherData, LocationData, WeatherLocation } from "../lib/types";
import { OW_KEY, OW_API_URL } from "./constants";

  
export const fetchCurrentWeatherData = async (location: WeatherLocation): Promise<WeatherData> => {
    const [lat, lon] = location.value.split(" ");
    const response = await axios.get(`${OW_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OW_KEY}&units=metric`);
    const data = response.data;
    return data 
};

export const fetchForecastData = async (location: WeatherLocation): Promise<WeatherData> => {
    const [lat, lon] = location.value.split(" ");
    const response = await axios.get(`${OW_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OW_KEY}&units=metric`);
    const data = response.data;
    return data
};