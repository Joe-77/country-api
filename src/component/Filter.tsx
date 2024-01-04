import { useContext } from "react";
import { Context } from "../context/context";

const Filter = () => {
  const { themes, filterCountries, setFilter } = useContext(Context);

  const change = (e: any) => {
    if (e === "Filter by region") {
      setFilter("");
    } else {
      filterCountries(e);
    }
  };
  return (
    <div>
      <select
        onChange={(e) => change(e.target.value)}
        className={`w-3/4 sm:w-full outline-none px-2 py-1 shadow-md ${
          themes && `bg-[#202d36] shadow-md `
        }`}
      >
        <option value="Filter by region">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
