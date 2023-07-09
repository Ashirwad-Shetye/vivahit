import React from "react";

function Tomorrow() {
  return (
    <div className="bg-accentGreen/80 text-accentSecondary min-h-[4rem] max-h-[20rem] relative md:col-span-4 rounded-2xl overflow-hidden">
      <div className="px-10 py-10 h-full flex flex-col justify-between">
        <div>
          <h1>Tomorrow</h1>
        </div>
        <div className="-mt-6 translate-x-10 resize-none">
          <img
            src="/illustration/cold.svg"
            alt=""
            className=" object-contain"
          />
        </div>
        <div className="space-y-1 absolute bottom-6">
          <h1 className="font-semibold text-4xl">22° C</h1>
          <p className="text-sm">Partly Cloudy</p>
        </div>
      </div>
    </div>
  );
}

export default Tomorrow;
