import React from "react";
import { LuSearch } from "react-icons/lu";

function SearchBar() {
  return (
    <div className="flex items-center mx-5 bg-accentGrey pl-5 py-3 rounded-lg">
      <input
        type="text"
        placeholder="Search city ..."
        className="bg-transparent w-64 focus:outline-none text-accentSecondary focus:ring-0 placeholder:text-fontBlue text-sm font-semibold tracking-wide"
      />
      <button className="text-xl px-5 text-accentPrimary hover:scale-110 duration-200">
        <LuSearch />
      </button>
    </div>
  );
}

export default SearchBar;
