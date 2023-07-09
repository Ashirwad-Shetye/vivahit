export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_GEO_API_KEY,
		'X-RapidAPI-Host': import.meta.env.VITE_GEO_API_HOST
	}
};

export const GEO_API_URL : string = import.meta.env.VITE_GEO_API_URL

export const WEATHER_API_URL = import.meta.env.VITE_OW_API_URL

export const OW_KEY = import.meta.env.VITE_OW_API_KEY

export const AQI_KEY = import.meta.env.VITE_AQI_API_KEY