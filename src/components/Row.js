import React, { useEffect, useState } from "react";
import axios from "../axios";
import ResultCard from "./ResultCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "../App.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

const Row = ({ title, fetchUrl }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fetch data from fetchurl
    const fetchData = async () => {
      const response = await axios(fetchUrl);
      // console.log(response.data.results);
      response.data.results.sort(() => Math.random() - 0.5);
      setResults(response.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <h1 className="row-title">{title}</h1>

      {results.length > 0 && (
        <Swiper
          slidesPerView={5.3}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {results.map((movie) => (
            <SwiperSlide key={movie.id}>
              <li key={movie.id}>
                <ResultCard movie={movie} />
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Row;
