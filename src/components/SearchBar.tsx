import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { GEO_API_URL, geoApiOptions } from "../api/constants";
import { AsyncPaginate, LoadOptions } from "react-select-async-paginate";
import { GroupBase } from "react-select";
import { City } from "../lib/types";

// Custom styles for react select async paginate
const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "0px",
    boxShadow: state.isFocused ? "0 0 0 0px transparent" : null,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#f97f29" : null,
    color: state.isFocused ? "white" : null,
  }),
};

function SearchBar({ handleOnSearchClick }: any) {
  const [searchValue, setSearchValue] = useState("");

  const loadOptions: LoadOptions<string, GroupBase<string>, unknown> = async (
    inputValue: string
  ) => {
    const url = `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`;

    try {
      const response = await fetch(url, geoApiOptions);
      const responseData = await response.json();
      const options = responseData?.data.map((city: City) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name} ${city.countryCode}`,
      }));
      return { options };
    } catch (error) {
      console.error("Error loading options:", error);
      return { options: [] };
    }
  };

  const handleSearchOnchange = (searchData: any) => {
    setSearchValue(searchData);
  };

  const handleClick = () => {
    handleOnSearchClick(searchValue);
  };

  return (
    <div className="flex items-center mx-5 bg-accentGrey pl-3 py-1 rounded-lg">
      <AsyncPaginate
        value={searchValue}
        debounceTimeout={600}
        defaultOptions
        loadOptions={loadOptions}
        placeholder="Search city ..."
        onChange={handleSearchOnchange}
        styles={customStyles}
        className="bg-transparent w-64 focus:outline-none text-accentSecondary focus:ring-0 placeholder:text-fontBlue text-sm font-semibold tracking-wide"
      />
      <button
        onClick={handleClick}
        className="text-xl px-5 text-accentPrimary hover:scale-110 duration-200"
      >
        <LuSearch />
      </button>
    </div>
  );
}

export default SearchBar;
