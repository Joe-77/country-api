import { createContext, useState } from "react";
export const Context = createContext<any>(undefined)

export const StoreData = ({children} : any)=> {

  const [themes , setThemes] = useState(false)
  const [search , setSearch] = useState("")
  const [filter , setFilter] = useState("")
  const [data , setData] = useState([])

  const changeThemes : ()=> void = ()=> {
    setThemes(!themes);
  }

  const searchCountry = (e : string)=> {
    setSearch(e);
  }

  const filterCountries :(e : any)=> void = (e: any)=> {
    setFilter(e)
  }

  return (
    <Context.Provider
      value={{
        themes,
        changeThemes,
        search,
        searchCountry,
        filter,
        setFilter,
        filterCountries,
        data,
        setData,
      }}
    >
      {children}
    </Context.Provider>
  );

}