import Nav from "./components/Nav";
import Highlights from "./components/Highlights";
import SearchBar from "./components/SearchBar";
import AQI from "./components/AQI";
import Today from "./components/Today";
import Tomorrow from "./components/Tomorrow";
import Weather from "./components/Weather";
import { IoNotificationsOutline } from "react-icons/io5";

function App() {
  return (
    <main className="flex font-Figtree tracking-wide">
      <Nav />
      <section className="flex-1">
        <div className="h-24 flex items-center justify-end">
          <SearchBar />
          <button
            className="border-2 text-xl rounded-full px-2.5 py-2.5 mr-4 text-fontBlue hover:bg-accentPrimary/80 hover:text-white 
            hover:border-transparent duration-200"
          >
            <IoNotificationsOutline />
          </button>
        </div>
        <div className="grid grid-rows-2 gap-4 px-4 pb-4 h-5/6">
          <div className="grid grid-cols-2 gap-4">
            <Weather />
            <AQI />
          </div>
          <div className="grid grid-cols-12 gap-4">
            <Today />
            <Tomorrow />
          </div>
        </div>
      </section>
      <Highlights />
    </main>
  );
}

export default App;
