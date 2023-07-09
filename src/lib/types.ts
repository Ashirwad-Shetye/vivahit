export interface City {
  latitude: number;
  longitude: number;
  name: string;
  countryCode: string;
}

export interface CityResponse {
  data: City[];
}