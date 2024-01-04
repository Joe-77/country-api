import { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { Context } from "../context/context";

const Search = () => {
  const { themes, searchCountry } = useContext(Context);
  return (
    <div
      className={`w-3/4 sm:w-[240px] flex items-center gap-2  px-4 py-2 text-lg rounded-md 
       ${
         themes
           ? `bg-[#2b3743] shadow-[#202d36] text-white`
           : `bg-white shadow-md shadow-gray-300`
       }`}
    >
      <span className="cursor-pointer">
        <IoIosSearch />
      </span>
      <input
        onChange={(e) => searchCountry(e.target.value)}
        className="outline-none bg-transparent text-base w-full"
        type="text"
        placeholder="Search for a country"
      />
    </div>
  );
};

export default Search;
