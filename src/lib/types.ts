export interface City {
  latitude: number;
  longitude: number;
  name: string;
  countryCode: string;
}

export interface CityResponse {
  data: City[];
}

export interface WeatherData {
    updateWeatherData: any;
  weatherData: any,
}

export interface LocationData {
  location: any,
  updateLocation: any
}

export type WeatherLocation = {
  value: string,
  name: string
};