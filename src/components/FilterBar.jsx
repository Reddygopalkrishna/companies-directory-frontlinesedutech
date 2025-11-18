import React, { useContext, useMemo } from "react";
import { FiltersContext } from "../context/FiltersContext";
import { Search, SlidersHorizontal, MapPin, ArrowUpDown } from "lucide-react";
import MinimalDropdown from "./MinimalDropdown";

const FilterBar =({ companies = [] })=> {
  const {search, setSearch,industry, setIndustry,location, setLocation,sortBy, setSortBy} = useContext(FiltersContext);

  const industries =useMemo(
    () => ["Industry", ...new Set(companies.map((c) => c.industry))],
    [companies]
  );

  const locations=useMemo(
    () => ["Location", ...new Set(companies.map((c) => c.location))],
    [companies]
  );

  return (
    <div className="sticky top-[95px] z-40 bg-white/80 backdrop-blur-xl p-4 rounded-xl shadow-sm border border-slate-200/60 max-w-7xl mx-auto fade-up">

      <div className="flex flex-col gap-3">

        
        <div className="flex items-center gap-2 px-3 py-2.5 border border-slate-300/50 bg-slate-50/70 rounded-lg h-[44px] shadow-inner-sm">
          <Search size={16} className="text-indigo-500" strokeWidth={1.6} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search companies..."
            className="flex-1 bg-transparent outline-none text-slate-700 text-sm placeholder:text-slate-400"
          />
        </div>

        <div className="grid grid-cols-2 gap-3 md:flex md:flex-row md:items-center md:gap-4">

          <MinimalDropdown
            icon={<SlidersHorizontal size={14} />}
            value={industry === "Industry" ? "Industry" : industry}
            onChange={setIndustry}
            options={industries}
          />
          <MinimalDropdown
            icon={<MapPin size={14} />}
            value={location === "Location" ? "Location" : location}
            onChange={setLocation}
            options={locations}
          />

  
          <div className="relative w-full col-span-2 md:w-auto">
            <MinimalDropdown
              icon={<ArrowUpDown size={14} />}
              value={
                sortBy === "name-asc"
                  ? "Name A → Z"
                  : sortBy === "name-desc"
                  ? "Name Z → A"
                  : "Sort"
              }
              onChange={(v) =>
                setSortBy(
                  v === "Name A → Z"
                    ? "name-asc"
                    : v === "Name Z → A"
                    ? "name-desc"
                    : ""
                )
              }
              options={["Name A → Z", "Name Z → A"]}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default FilterBar;