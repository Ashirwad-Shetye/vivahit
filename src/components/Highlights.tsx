import React from "react";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { convertTimestampToTime, windDirection } from "../lib/utils";
import { GiWindsock } from "react-icons/gi";

function Highlights({ forecast, currentWeather }: any) {
  const dayOfWeekName = new Date().toLocaleString("default", {
    weekday: "long",
  });
  const dayInAWeek = new Date().getDay();
  const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  const weatherData = currentWeather;
  return (
    <div className="w-3/12 hidden relative xl:flex min-w-[24rem] bg-accentGrey overflow-hidden text-accentSecondary">
      <div className="pl-4 mb-8 pr-6 w-full overflow-hidden">
        {/* location */}
        <div className="h-28 flex items-center justify-center border-b">
          <div className="flex justify-between w-full">
            <div>
              <h1 className="font-[600]">{dayOfWeekName}</h1>
              <p className="w-36 text-sm truncate text-ellipsis">
                {weatherData?.name},{weatherData?.sys.country}
              </p>
            </div>
            <h1 className="text-3xl font-[550] text-accentPrimary">
              {Math.round(weatherData?.main.feels_like)}° C
            </h1>
          </div>
        </div>
        {/* sunset sunrise */}
        <div className="flex flex-col space-y-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-2xl text-accentPrimary">
                <FiSunrise />
              </div>
              <h1 className="font-semibold">Sunrise</h1>
            </div>
            <h1>{convertTimestampToTime(weatherData?.sys.sunrise)}</h1>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-2xl text-accentPrimary">
                <FiSunset />
              </div>
              <h1 className="font-semibold">Sunset</h1>
            </div>
            <h1>{convertTimestampToTime(weatherData?.sys.sunset)}</h1>
          </div>
        </div>
        {/* UVI */}
        <div className="bg-accentSecondary text-white rounded-2xl h-24">
          <div className="px-6 flex items-center h-full w-full space-x-4">
            <div className="text-3xl text-accentSecondary h-12 w-12 flex justify-center items-center rounded-full bg-white">
              <GiWindsock />
            </div>
            <div className="flex justify-between items-center flex-1">
              <div className="font-[600]">Wind</div>
              <div>
                <p className="font-normal">4.5km/h</p>
                <p>{windDirection(weatherData?.wind.deg)} Wind</p>
              </div>
            </div>
          </div>
        </div>
        {/* 5 days forecast */}
        <div className=" text-center pt-6 pb-4">
          <h1 className="text-2xl font-[600] tracking-wide">
            Weather Prediction
          </h1>
        </div>
        <div className="overflow-scroll space-y-4 min-h-[14rem] max-h-[19rem] no-scrollbar">
          {forecast?.list.slice(0, 7).map((item: any, idx: number) => (
            <div
              key={idx}
              className="bg-white flex items-center justify-between px-4 py-2 rounded-xl"
            >
              <div className="flex space-x-4">
                <div className="w-12 h-12">
                  <img
                    src={`/weather-icon/${item?.weather[0].icon}.png`}
                    alt="icon"
                    className="p-1"
                  />
                </div>
                <div>
                  <p className="text-sm">{forecastDays[idx]}</p>
                  <h1 className="text-lg font-[550]">
                    {item?.weather[0].description}
                  </h1>
                </div>
              </div>
              <div className="text-lg font-[500] text-accentPrimary">
                {Math.round(item?.main.temp_min)}° /{" "}
                {Math.round(item?.main.temp_max)}°
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Highlights;
