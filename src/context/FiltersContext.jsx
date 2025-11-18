import React, { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("Industry");
  const [location, setLocation] = useState("Location")
  const [sortBy, setSortBy] = useState("")

  return (
    <FiltersContext.Provider
      value={{search,setSearch,industry,setIndustry,location,setLocation,sortBy,setSortBy,}}>
      {children}
    </FiltersContext.Provider>
  );
}
