import React from "react";
import { BsWind } from "react-icons/bs";
import { mToKm } from "../lib/unitConversion";

function Weather({ currentWeather }: any) {
  const data = currentWeather;
  return (
    <div
      className={`relative overflow-hidden min-h-[4rem] max-h-[20rem] rounded-2xl bg-[url('/img/weather-bg/09d.gif')] bg-cover bg-no-repeat text-accentSecondary`}
    >
      <div className="grid grid-rows-3 w-full px-6 h-full py-6">
        <div>
          <div className="flex items-center space-x-4 text-white">
            <div className="bg-white text-xl rounded-full p-2 text-accentPrimary">
              <img
                src={`/outline/${data.weather[0].icon}.svg`}
                alt="weather icon"
                className=" fill-accentPrimary"
              />
            </div>
            <div>
              <h1 className="font-semibold text-white">Weather</h1>
              <p className="text-sm">What's the weather.</p>
            </div>
          </div>
        </div>
        <div className="space-y-1 -translate-y-4">
          <div className="flex space-x-4 items-center">
            <h1 className="font-semibold text-white text-4xl">
              {Math.round(data.main.feels_like)}° C
            </h1>
            <h2 className="bg-white text-accentSecondary text-sm h-6 px-1 flex items-center rounded-md">
              {Math.round(data.main.temp)}° C
            </h2>
          </div>
          <p className="text-sm text-white">{data.weather[0].description}</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-white bg-accentSecondary rounded-xl flex flex-col justify-center items-center space-y-1">
            <p className="text-sm">Pressure</p>
            <h1 className="font-semibold text-xl">
              {Math.round(data.main.pressure)}mb
            </h1>
          </div>
          <div className="bg-accentGreen rounded-xl flex flex-col justify-center items-center space-y-1">
            <p className="text-sm">Visibility</p>
            <h1 className="font-semibold text-xl">
              {mToKm(data.visibility)}km
            </h1>
          </div>
          <div className="bg-white rounded-xl flex flex-col justify-center items-center space-y-1">
            <p className="text-sm">Humidity</p>
            <h1 className="font-semibold text-xl">
              {Math.round(data.main.humidity)}%
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
