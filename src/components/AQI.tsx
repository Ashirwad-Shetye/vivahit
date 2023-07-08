import React from "react";
import { BsWind } from "react-icons/bs";

function AQI() {
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
              <p className="text-sm">Main pollution : PM 2.5</p>
            </div>
          </div>
        </div>
        <div className="space-y-1 -translate-y-4">
          <div className="flex space-x-4 items-center">
            <h1 className="font-semibold text-4xl">390</h1>
            <h2 className="bg-accentGreen text-accentSecondary text-sm h-6 px-1 flex items-center rounded-md">
              AQI
            </h2>
          </div>
          <p className="text-sm">West Wind</p>
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
              <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AQI;
