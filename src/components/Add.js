import React, { useState } from "react";
import Row from "./Row";
import requests from "../request";

const API_KEY = "5018ecb4b0480cdc527da891f68ad506";

const Add = () => {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };


  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {query ? (
            <Row
              title="Search Results"
              fetchUrl={`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query='${query}'`}
            />
          ) : (
            <div>
              <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
              />
              <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
              <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
              <Row
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
              />
              <Row
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
              />
              <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
              />
              <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Add;
