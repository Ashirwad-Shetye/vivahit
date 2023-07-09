import { create } from "zustand";
import { WeatherData, LocationData } from "../lib/types";


export const useWeatherStore = create<WeatherData>()((set) => ({
  weatherData: null,
  updateWeatherData: (data: WeatherData | null) => set({ weatherData: data }),
}))

export const useLocationStore = create<LocationData>()((set) => ({
    location: null,
  updateLocation: (data: LocationData | null) => set({ location: data }),
}))

