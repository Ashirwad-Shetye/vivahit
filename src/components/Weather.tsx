import React from "react";
import { BsWind } from "react-icons/bs";

function Weather() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[url('/img/weather-bg/02d.gif')] bg-cover bg-no-repeat text-accentSecondary">
      <div className="grid grid-rows-3 w-full px-6 h-full py-6">
        <div>
          <div className="flex items-center space-x-4 text-white">
            <div className="bg-white text-xl rounded-full p-2 text-accentPrimary">
              <BsWind />
            </div>
            <div>
              <h1 className="font-semibold text-white">Weather</h1>
              <p className="text-sm">Main pollution : PM 2.5</p>
            </div>
          </div>
        </div>
        <div className="space-y-1 -translate-y-4">
          <div className="flex space-x-4 items-center">
            <h1 className="font-semibold text-white text-4xl">22° C</h1>
            <h2 className="bg-white text-accentSecondary text-sm h-6 px-1 flex items-center rounded-md">
              11° C
            </h2>
          </div>
          <p className="text-sm text-white">Partly Cloudy</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-white bg-accentSecondary rounded-xl flex flex-col justify-center items-center space-y-1">
            <p className="text-sm">Pressure</p>
            <h1 className="font-semibold text-xl">800mb</h1>
          </div>
          <div className="bg-accentGreen rounded-xl flex flex-col justify-center items-center space-y-1">
            <p className="text-sm">Visibility</p>
            <h1 className="font-semibold text-xl">4.3 km</h1>
          </div>
          <div className="bg-white rounded-xl flex flex-col justify-center items-center space-y-1">
            <p className="text-sm">Humidity</p>
            <h1 className="font-semibold text-xl">87%</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
