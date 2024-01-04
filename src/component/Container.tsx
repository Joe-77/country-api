import { useContext } from "react";
import Countries from "./Countries"
import Search from './Search'
import { Context } from "../context/context";
import Filter from "./Filter";

const Container = () => {

  const {themes} = useContext(Context)



  return (
    <section
      className={`${
        themes ? `bg-[#202d36] text-white` : `bg-[#f3f3f3] text-black`
      } min-h-[95vh] sm:min-h-[94vh]`}
    >
      <div className="container m-auto py-10 px-4 md:px-0">
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between sm:items-center">
          <Search />
          <Filter/>
        </div>
        <Countries />
      </div>
    </section>
  );
}

export default Container