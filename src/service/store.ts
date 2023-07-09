import { create } from "zustand";
import { WeatherData, LocationData } from "../lib/types";


export const useWeatherStore = create<WeatherData>()((set) => ({
  searchData: null,
  
  updateWeatherData: (data: WeatherData) => set({ searchData: data }),
}))

export const useLocationStore = create<LocationData>()((set) => ({
    location: null,
  updateLocation: (data: LocationData) => set({ location: data }),
}))

