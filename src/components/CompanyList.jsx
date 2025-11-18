import React, { useContext, useMemo, useState } from "react";
import CompanyCard from "./CompanyCard";
import Pagination from "./Pagination";
import Loader from "./Loader";
import Error from "./Error";
import { FiltersContext } from "../context/FiltersContext";
import { Layers } from "lucide-react";


const CompanyList = ({ companies, loading, error }) =>{
  const { search, industry, location, sortBy } = useContext(FiltersContext);
  const [page, setPage] = useState(1);
  const perPage = 6;


  const filtered = useMemo(() => {
    let list = [...companies];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q));
    }


if (industry !== "All" && industry !== "Industry") {
  list = list.filter((c) => c.industry === industry);
}


if (location !== "All" && location !== "Location") {
  list = list.filter((c) => c.location === location);
}

    if (sortBy === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      list.sort((a, b) => b.name.localeCompare(a.name));
    }

    return list;
  }, [companies, search, industry, location, sortBy]);

  const total = filtered.length;
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);


  if (loading) return <Loader />;
  if (error) return <Error message={error} />;


  if (filtered.length === 0) {
    return  <p className="text-center text-gray-600 mt-10">No companies found.</p>;
  }

  return (
    <div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
  {paginated.map((company) => (
    <CompanyCard key={company.id} company={company} />
  ))}
</div>
      <Pagination
        current={page}
        totalItems={total}
        perPage={perPage}
        onPageChange={setPage}
      />
    </div>
  );
}


export default CompanyList