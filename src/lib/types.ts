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
  searchData: any,
}

export interface LocationData {
  location: any,
  updateLocation: any
}