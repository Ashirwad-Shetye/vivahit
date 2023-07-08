import React from "react";

function Weather() {
  return (
    <div className="border relative overflow-hidden rounded-2xl">
      <div className="grid grid-rows-3 w-full px-4 h-full py-4">
        <div>
          <h1>Weather</h1>
          <p className="text-sm">what's the weather.</p>
        </div>
        <div>
          <div className="flex space-x-4">
            <h1>22 c</h1>
            <h2>11 c</h2>
          </div>
          <p className="text-sm">Partly Cloudy</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-white bg-accentSecondary rounded-xl flex flex-col justify-center items-center">
            <p>Pressure</p>
            <h1>800mb</h1>
          </div>
          <div className="bg-accentGreen rounded-xl flex flex-col justify-center items-center">
            <p>Visibility</p>
            <h1>4.3 km</h1>
          </div>
          <div className="border rounded-xl flex flex-col justify-center items-center">
            <p>Humidity</p>
            <h1>87%</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
