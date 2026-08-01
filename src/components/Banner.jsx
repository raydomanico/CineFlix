import { useEffect, useState } from "react";
import axios from "../api/axios";
import requests from "../api/requests";
import "../styles/Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      console.log(request.data);

    }
    fetchData();

  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <p className="banner_description">{movie?.overview}</p>
      </div>
      <div className="banner--fadeBottom"></div>

    </header>
    
    
  );
}

export default Banner;
