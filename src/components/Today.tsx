import { Button } from "./ui/Button";
import { BsWind, BsThermometerHalf, BsUmbrella } from "react-icons/bs";
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Today({ forecast }: any) {
  const options = {
    Plugin: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
        value: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
        ticks: {
          display: false,
        },
        min: -5,
        max: 50,
      },
    },
  };

  const labels = ["January", "February", "March", "April"];
  const values = [
    forecast.list[0].main.temp,
    forecast.list[1].main.temp,
    forecast.list[2].main.temp,
    forecast.list[3].main.temp,
  ];

  const icons = [
    forecast.list[0].weather[0].icon,
    forecast.list[1].weather[0].icon,
    forecast.list[2].weather[0].icon,
    forecast.list[3].weather[0].icon,
  ];

  const data = {
    labels,
    datasets: [
      {
        data: values,
        borderColor: "#f97f29",
        backgroundColor: "transparent",
        tension: 0.4,
        pointBorderColor: "transparent",
      },
    ],
  };

  return (
    <div className="md:col-span-8 min-h-[4rem] max-h-[20rem] relative text-accentSecondary rounded-2xl">
      <div className="p-8">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">
            How's the <br /> temperature today?
          </h1>
          <div className="space-x-2">
            <Button variant={"navFocus"}>
              <BsThermometerHalf />
            </Button>
            <Button>
              <BsUmbrella />
            </Button>
            <Button>
              <BsWind />
            </Button>
          </div>
        </div>
        {/* chart */}
        <div className="h-[12rem] mt-3 relative overflow-hidden">
          {/* line graph */}
          <div className="absolute w-full h-auto">
            <Line options={options} data={data} className="" />;
          </div>
          <div className="grid h-full grid-cols-4">
            <div className="w-full relative flex items-center justify-center border-r-2">
              <div className="bg-white border border-fontBlue/60 -translate-y-10 rounded-full w-10">
                <img
                  src={`/weather-icon/${icons[0]}.png`}
                  alt="icon"
                  className="p-2"
                />
              </div>
              <div className="absolute bottom-3.5 flex flex-col items-center justify-center">
                <h1 className="text-fontBlue font-semibold">
                  {Math.round(values[0])}°
                </h1>
                <p className="text-[0.8rem] text-fontBlue">Morning</p>
              </div>
            </div>
            <div className="w-full relative flex items-center justify-center border-r-2">
              <div className="bg-white border border-fontBlue/60 -translate-y-10 rounded-full w-10">
                <img
                  src={`/weather-icon/${icons[1]}.png`}
                  alt="icon"
                  className="p-2"
                />
              </div>
              <div className="absolute bottom-3.5 flex flex-col items-center justify-center">
                <h1 className="text-fontBlue font-semibold">
                  {Math.round(values[1])}°
                </h1>
                <p className="text-[0.8rem] text-fontBlue">Afternoon</p>
              </div>
            </div>
            <div className="w-full relative flex items-center justify-center border-r-2">
              <div className="bg-white border border-fontBlue/60 -translate-y-10 rounded-full w-10">
                <img
                  src={`/weather-icon/${icons[2]}.png`}
                  alt="icon"
                  className="p-2"
                />
              </div>
              <div className="absolute bottom-3.5 flex flex-col items-center justify-center">
                <h1 className="text-fontBlue font-semibold">
                  {Math.round(values[2])}°
                </h1>
                <p className="text-[0.8rem] text-fontBlue">Evening</p>
              </div>
            </div>
            <div className="w-full relative flex items-center justify-center">
              <div className="bg-white border border-fontBlue/60 -translate-y-10 rounded-full w-10">
                <img
                  src={`/weather-icon/${icons[3]}.png`}
                  alt="icon"
                  className="p-2"
                />
              </div>
              <div className="absolute bottom-3.5 flex flex-col items-center justify-center">
                <h1 className="text-fontBlue font-semibold">
                  {Math.round(values[3])}°
                </h1>
                <p className="text-[0.8rem] text-fontBlue">Night</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Today;
