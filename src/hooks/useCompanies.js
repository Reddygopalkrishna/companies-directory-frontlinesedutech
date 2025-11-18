import { useState, useEffect } from "react";

export default function useCompanies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    async function fetchData() {
      try {
        const res = await fetch("/data/companies.json");
        if (!res.ok) throw new Error("Failed to load company data");

        const json = await res.json();
        if (active) {
          setData(json);
          setLoading(false);
        }
      } catch (err) {
        if (active) {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      active = false; 
    };
  }, []);

  return { data, loading, error };
}
