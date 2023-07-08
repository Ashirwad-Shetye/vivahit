import React from "react";

function Weather() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-red-200 text-accentSecondary">
      <div className="grid grid-rows-3 w-full px-6 h-full py-6">
        <div>
          <h1 className="font-semibold">Weather</h1>
          <p className="text-sm">what's the weather.</p>
        </div>
        <div className="space-y-1 -translate-y-4">
          <div className="flex space-x-4 items-center">
            <h1 className="font-semibold text-4xl">22° C</h1>
            <h2 className="bg-white text-accentSecondary text-sm h-6 px-1 flex items-center rounded-md">
              11° C
            </h2>
          </div>
          <p className="text-sm">Partly Cloudy</p>
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
