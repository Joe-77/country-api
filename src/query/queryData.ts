import { useState } from "react";
import { useQuery } from "react-query";

export const getData = () => {
  const [country, setCountry] = useState([]);

  const getAllCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((e) => e.json())
      .then((e) => setCountry(e));

    return country;
  };

  return useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });
};
