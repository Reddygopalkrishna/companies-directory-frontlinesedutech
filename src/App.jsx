import React from "react";
import { FiltersProvider } from "./context/FiltersContext";
import useCompanies from "./hooks/useCompanies";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import CompanyList from "./components/CompanyList";

const App =()=>{
  const { data, loading, error } = useCompanies();

  return (
    <FiltersProvider>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="max-w-6xl mx-auto w-full p-4">
          <FilterBar companies={data} />
          <CompanyList companies={data} loading={loading} error={error} />
        </main>
      </div>
    </FiltersProvider>
  );
}

export default App;