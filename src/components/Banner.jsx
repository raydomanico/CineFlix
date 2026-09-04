import { useEffect, useState } from "react";
import axios from "../api/axios";
import requests from "../api/requests";
import "../styles/Banner.css";
import MovieModal from "./MovieModal";


function Banner() {
  const [movie, setMovie] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      if(request.data.results?.length>0)
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
  <div className="banner-buttons">
        <button id="watch-banner-btn" onClick={()=>{
          setShowModal(true)
        }}>Watch</button>
{showModal && (
  <MovieModal movie={movie} onClose={() => setShowModal(false)} />
)}

        
        <button id="add-list-btn">My List</button>
  </div>

        <p className="banner_description">{movie?.overview}</p>
</div>
     
  <div className="banner--fadeBottom"></div>

    </header>
    
    
  );
}

export default Banner;
