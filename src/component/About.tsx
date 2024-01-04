import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/context";
import { FaArrowLeft } from "react-icons/fa";

const About = () => {
  const location = useLocation().state;
  const { themes, data } = useContext(Context);
  let currency;
  const lang: {}[] = [];

  const filterCountries: any = [];

  data?.filter((e: any) => {
    if (
      e.region === location.region &&
      e.name.common !== location.name.common
    ) {
      filterCountries.push(e);
    }
  });
  const randomNum: any = Math.ceil(Math.random() * filterCountries.length);

  for (let key in location.currencies) {
    if (location.currencies.hasOwnProperty(key)) {
      currency = location.currencies[key].name;
    }
  }
  for (let key in location.languages) {
    if (location.languages.hasOwnProperty(key)) {
      lang.push(location.languages[key] + ", ");
    }
  }
  function formatLargeNumber(number: number, decimalPlaces = 2) {
    return number.toLocaleString("en-US", {
      style: "decimal",
      maximumFractionDigits: decimalPlaces,
    });
  }

  return (
    <section
      className={`${
        themes ? "bg-[#202d36] text-white" : "bg-white text-black"
      } min-h-screen sm:min-h-[94vh]`}
    >
      <div className="container m-auto px-4 sm:px-0 pt-10">
        <Link
          to="/"
          className={`flex items-center justify-center gap-2 w-24 px-3 py-1 shadow-md shadow-black ${
            themes ? `bg-[#202d36] ` : `bg-white  `
          }`}
        >
          <FaArrowLeft />
          <span className="capitalize">back</span>
        </Link>

        <div className="mt-20 flex flex-col sm:flex-row gap-20 md:items-center">
          <img
            className=" w-64 md:w-60 m-auto sm:m-0 xl:w-[450px]"
            src={location.flags.svg}
            alt=""
          />
          <div>
            <h1 className="text-2xl font-bold uppercase">
              {location.name.common}
            </h1>
            <div className="mt-5 flex flex-col lg:flex-row gap-5 lg:gap-20">
              <div>
                <p className="capitalize text-xs">
                  native name :{" "}
                  <span className="italic font-mono">
                    {location?.name.official}
                  </span>
                </p>
                <p className="capitalize mt-4 text-xs">
                  population : {formatLargeNumber(location.population)}
                </p>
                <p className="capitalize mt-4 text-xs">
                  region : <span className="italic">{location.region}</span>
                </p>
                <p className="capitalize mt-4 text-xs">
                  sub region :{" "}
                  <span className="italic">{location.subregion}</span>
                </p>
                <p className="capitalize mt-4 text-xs">
                  capital : <span className="italic">{location.capital}</span>
                </p>
              </div>
              <div>
                <p className="capitalize text-xs">
                  top level domain : {location.tld[0]}
                </p>
                <p className="capitalize text-xs mt-4">
                  currencies :{" "}
                  <span className="italic font-mono">{currency}</span>
                </p>
                <p className="capitalize text-xs mt-4 leading-7">
                  languages : {lang.map((e: any) => e)}
                </p>
              </div>
            </div>
            <div className="mt-10 capitalize flex flex-col md:flex-row lg:items-center gap-5 md:gap-2">
              <p>border countries : </p>
              <div className="flex gap-3">
                <Link
                  className={`${
                    themes
                      ? `bg-[#202d36] shadow-slate-700`
                      : `bg-white shadow-black`
                  } shadow-md   px-3 py-1 text-[10px] md:text-sm`}
                  to={`/about/${filterCountries[randomNum]?.name.common}`}
                  state={filterCountries[randomNum]}
                >
                  {filterCountries[randomNum]?.name.common}
                </Link>
                <Link
                  className={`${
                    themes
                      ? `bg-[#202d36] shadow-slate-700`
                      : `bg-white shadow-black`
                  } shadow-md   px-3 py-1 text-[10px] md:text-sm`}
                  to={`/about/${filterCountries[randomNum + 1]?.name.common}`}
                  state={filterCountries[randomNum + 1]}
                >
                  {filterCountries[randomNum + 1]?.name.common}
                </Link>
                <Link
                  className={`${
                    themes
                      ? `bg-[#202d36] shadow-slate-700`
                      : `bg-white shadow-black`
                  } shadow-md   px-3 py-1 text-[10px] md:text-sm`}
                  to={`/about/${filterCountries[randomNum + 3]?.name.common}`}
                  state={filterCountries[randomNum + 3]}
                >
                  {filterCountries[randomNum + 3]?.name.common}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
