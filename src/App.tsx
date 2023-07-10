import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Highlights from "./components/Highlights";
import SearchBar from "./components/SearchBar";
import AQI from "./components/AQI";
import Today from "./components/Today";
import Tomorrow from "./components/Tomorrow";
import Weather from "./components/Weather";
import { IoNotificationsOutline } from "react-icons/io5";
import { fetchWeatherData } from "./api/apiCalls";
import { Skeleton, skeletonVariants } from "./components/ui/Skeleton";

function App() {
  const [currentWeather, setCurrentWeather] = useState<any | null>(null);
  const [forecast, setForecast] = useState<any | null>(null);
  const [aqi, setAqi] = useState<any | null>(null);
  const [latitude, setLatitude] = useState<string | null>();
  const [longitude, setLongitude] = useState<string | null>();

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          }
        );
        const lat = position.coords.latitude.toString();
        const lon = position.coords.longitude.toString();
        setLatitude(lat);
        setLongitude(lon);
        const response: any = await fetchWeatherData({ lat, lon });
        console.log(response);
        setCurrentWeather({ ...response[0] });
        setForecast({ ...response[1] });
        setAqi({ ...response[2] });
      } catch (error) {
        console.error(error);
      }
    };
    getWeatherData();
  }, [latitude, longitude]);

  const handleOnSearchClick = async (searchData: any) => {
    const [lat, lon] = searchData.value.split(" ");
    const city: string = searchData.label;
    const response = await fetchWeatherData({
      lat,
      lon,
    });
    setCurrentWeather({ city, ...response[0] });
    setForecast({ city, ...response[1] });
    setAqi({ city, ...response[2] });
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
            {currentWeather ? (
              <Weather currentWeather={currentWeather} />
            ) : (
              <Skeleton />
            )}
            {aqi ? (
              <AQI currentWeather={currentWeather} aqi={aqi} />
            ) : (
              <Skeleton />
            )}
          </div>
          <div className="grid md:grid-cols-12 gap-4">
            {forecast ? (
              <Today forecast={forecast} />
            ) : (
              <Skeleton className={skeletonVariants({ variant: "today" })} />
            )}
            {forecast ? (
              <Tomorrow forecast={forecast} />
            ) : (
              <Skeleton className={skeletonVariants({ variant: "tomorrow" })} />
            )}
          </div>
        </div>
      </section>
      <Highlights />
    </main>
  );
}

export default App;
