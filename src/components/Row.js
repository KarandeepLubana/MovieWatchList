import React, { useEffect, useState } from "react";
import axios from "../axios";
import ResultCard from "./ResultCard";

const Row = ({ title, fetchUrl }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fetch data from fetchurl
    const fetchData = async () => {
      const response = await axios(fetchUrl);
      console.log(response.data.results);
      setResults(response.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <h1 className="row-title">{title}</h1>

      {results.length > 0 && (
        <ul className="results">
          {results.map((movie) => (
            <li key={movie.id}>
              <ResultCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Row;
