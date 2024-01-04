import { useContext } from "react";
import { getData } from "../query/queryData";
import { Context } from "../context/context";

function Countries() {
  const { data } = getData();
  const { themes, search, filter } = useContext(Context);
  console.log(data);

  function formatLargeNumber(number: number, decimalPlaces = 2) {
    return number.toLocaleString("en-US", {
      style: "decimal",
      maximumFractionDigits: decimalPlaces,
    });
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
      {data
        ?.filter((e: any) => e.name.common !== "Israel")
        .filter((data: any) =>
          search === ""
            ? data
            : data.name.common.toLowerCase().includes(search.toLowerCase())
        )
        .filter((e: any) => (filter === "" ? e : e.region === filter))
        .map((e: any, id: number) => (
          <div
            key={id}
            className={`${
              themes && `bg-[#2b3743] shadow-transparent `
            } rounded-md shadow-md shadow-gray-200`}
          >
            <img className="w-full h-40" src={e?.flags.png} alt="" />
            <div className="px-4 my-4">
              <h2 className="font-bold pb-2">{e.name?.common}</h2>
              <p className="text-xs pb-2">
                Population : {formatLargeNumber(e.population)}
              </p>
              <p className="text-xs pb-2">
                Region :{" "}
                <span className=" italic tracking-wide font-mono">
                  {e.region}
                </span>
              </p>
              <p className="text-xs">
                Capital :{" "}
                <span className=" italic tracking-wide font-mono">
                  {e?.capital}
                </span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Countries;

/*
{data?.map((e: any, id: number) => (
        <div
          key={id}
          className={`${
            themes && `bg-[#2b3743] shadow-transparent `
          } rounded-md shadow-md shadow-gray-200`}
        >
          <img className="w-full h-40" src={e?.flags.png} alt="" />
          <div className="px-4 my-4">
            <h2 className="font-bold pb-2">{e?.name?.common}</h2>
            <h2 className="text-xs pb-2">
              Population : {formatLargeNumber(e?.population)}
            </h2>
            <h2 className="text-xs pb-2">
              Region :{" "}
              <span className=" italic tracking-wide font-mono">
                {e?.region}
              </span>
            </h2>
            <h2 className="text-xs">
              Capital :{" "}
              <span className=" italic tracking-wide font-mono">
                {e?.capital[0]}
              </span>
            </h2>
          </div>
        </div>
      ))}

*/