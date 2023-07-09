import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const windDirection = (degree: number): string => {
  const directions = ["North", "Northeast", "East", "Southeast", "South", "Southwest", "West", "Northwest"];
  const index = Math.round(degree / 45) % 8;
  return directions[index];
}

export const findMainPollution = (obj: { [key: string]: number }): string => {
  let largestValue = -Infinity;
  let largestKey = "";

  for (let i = 5; i <= 6; i++) {
    const value = Object.values(obj)[i];
    if (value > largestValue) {
      largestValue = value;
      largestKey = Object.keys(obj)[i];
    }
  }

  return largestKey;
}

export const aqiWidth = (num: number):number => {
  return num*20
}

export const aqiQuality = (num: number): string => {
  let result =""
  switch (num) {
    case 1:
      result = "Good";
      break;
    case 2:
      result = "Fair";
      break;
    case 3:
      result = "Moderate";
      break;
    case 4:
      result = "Poor";
      break;
    case 5:
      result = "Hazardous";
      break;
  }
  return result
}

export const character = (str: string): string => {
  const mapping: any = {
    "01d": "clear",
    "01n": "clear",
    "02d": "sunny",
    "02n": "sunny",
    "03d": "sunny",
    "03n": "sunny",
    "04d": "happy",
    "04n": "happy",
    "09d": "rain",
    "09n": "rain",
    "10d": "rain",
    "10n": "rain",
    "11d": "rain",
    "11n": "rain",
    "13d": "cold",
    "13n": "cold",
    "50d": "cold",
    "50n": "cold",
    "unknown": "unknown"
  };
  const result = mapping[str] || "unknown";
  return result;
};