import { useState } from "react";
import Nav from "./components/Nav";
import Highlights from "./components/Highlights";
import SearchBar from "./components/SearchBar";
import AQI from "./components/AQI";
import Today from "./components/Today";
import Tomorrow from "./components/Tomorrow";
import Weather from "./components/Weather";
import { IoNotificationsOutline } from "react-icons/io5";
import { OW_API_URL, OW_KEY, AQI_URL } from "./api/constants";

function App() {
  const [currentWeather, setCurrentWeather] = useState<any | null>(null);
  const [forecast, setForecast] = useState<any | null>(null);
  const [aqi, setAqi] = useState<any | null>(null);

  const handleOnSearchClick = (searchData: any) => {
    const [lat, lon] = searchData.value.split(" ");

    const city: string = searchData.label;

    const currentWeatherFetch = fetch(
      `${OW_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OW_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${OW_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OW_KEY}&units=metric`
    );

    const AQIFetch = fetch(`${AQI_URL}lat=${lat}&lon=${lon}&appid=${OW_KEY}`);

    Promise.all([currentWeatherFetch, forecastFetch, AQIFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        const AQIResponse = await response[2].json();
        setCurrentWeather({ city, ...weatherResponse });
        setForecast({ city, ...forecastResponse });
        setAqi({ city, ...AQIResponse });
      })
      .catch((err: string) => {
        console.error(err);
      });
  };

  return (
    <main className="flex-col md:flex-row flex font-Figtree tracking-wide">
      <Nav />
      <section className="flex-1 mx-auto max-h-screen">
        <div className="h-28 flex items-center justify-between md:justify-end">
          <SearchBar handleOnSearchClick={handleOnSearchClick} />
          <button
            className="border-2 text-xl rounded-full px-2.5 py-2.5 mr-4 text-fontBlue hover:bg-accentPrimary/80 hover:text-white 
            hover:border-transparent duration-200"
          >
            <IoNotificationsOutline />
          </button>
        </div>
        <div className="grid grid-rows-2 gap-4 px-4 pb-4 h-5/6">
          <div className="grid md:grid-cols-2 gap-4">
            <Weather currentWeather={currentWeather} />
            <AQI currentWeather={currentWeather} aqi={aqi} />
          </div>
          <div className="grid md:grid-cols-12 gap-4">
            <Today currentWeather={currentWeather} />
            <Tomorrow forecast={forecast} />
          </div>
        </div>
      </section>
      <Highlights forecast={forecast} />
    </main>
  );
}

export default App;
