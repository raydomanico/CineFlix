  import { useEffect, useState } from "react";
  import axios from "../api/axios";
  import requests from "../api/import.meta.env.VITE_TMDB_KEY";
  import "../styles/MovieModal.css";
  import Youtube from 'react-youtube';



  function MovieModal({ movie, onClose}) {
    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
      async function fetchTrailer() {
        try {
          const request = await axios.get(requests.fetchTrailer(movie.id));

          const video = request.data.results.find(v => v.type === "Trailer");
          setTrailer(video?.key);
        } catch (error) {
          
          console.error("Error fetching trailer:", error);
        }
      }
      fetchTrailer();
    }, [movie]);

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      }
    };
    useEffect(() =>{
      const handleKeyDown =(event)=>{
        if(event.key ==='Escape'){
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown );

  return () => {
    document.removeEventListener("keydown", handleKeyDown)};
    }, [onClose]);
    return (
      <div className="modal">
        <div className="modal_content">
          <button className="modal_close" onClick={onClose}>X</button>

          {trailer && (
            <div className="trailer_wrapper">
              <Youtube
                videoId={trailer}
                opts={opts}
                className="modal_trailer"
              />
            </div>
          )}

          <h2>{movie.title || movie.name}</h2>
          <p>{movie.overview}</p>
          <p>⭐ {movie.vote_average}</p>
          <p>📅 {movie.release_date || movie.first_air_date}</p>
        </div>
      </div>
    );
  }

  export default MovieModal;