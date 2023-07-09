import React from "react";
import { BsWind } from "react-icons/bs";
import {
  windDirection,
  findMainPollution,
  aqiWidth,
  aqiQuality,
} from "../lib/utils";

function AQI({ aqi, currentWeather }: any) {
  const data = currentWeather;
  return (
    <div className="relative overflow-hidden rounded-2xl bg-blue-200 text-white">
      <div className="grid grid-rows-3 w-full px-6 h-full py-6">
        <div className="">
          <div className="flex items-center space-x-4">
            <div className="bg-white text-xl rounded-full p-2 text-accentPrimary">
              <BsWind />
            </div>
            <div>
              <h1 className="font-semibold">Air Quality</h1>
              <p className="text-sm">
                Main pollution : {findMainPollution(aqi.list[0].components)}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-1 -translate-y-4">
          <div className="flex space-x-4 items-center">
            <h1 className="font-semibold text-4xl">
              {Math.round(aqi.list[0].components.co)}
            </h1>
            <h2 className="bg-accentGreen text-accentSecondary text-sm h-6 px-1 flex items-center rounded-md">
              AQI
            </h2>
          </div>
          <p className="text-sm">{windDirection(data.wind.deg)} Wind</p>
        </div>
        <div className="grid border rounded-xl bg-white">
          <div className="text-white rounded-xl flex flex-col justify-center items-center space-y-5 px-5">
            <div className="flex justify-between w-full">
              <span className="text-base font-medium text-fontBlue">Good</span>
              <span className="text-base font-medium text-fontBlue">
                Hazardous
              </span>
            </div>
            <div className="w-full rounded-full h-2.5 bg-accentGrey">
              <div
                className={`bg-accentPrimary h-2.5 rounded-full w-[20%] flex justify-end items-center`}
              >
                <h1 className="text-sm bg-accentSecondary shadow-lg shadow-accentSecondary/50 text-white -translate-y-6 py-1 px-2 rounded-md">
                  {aqiQuality(aqi.list[0].main.aqi)}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AQI;
