import "../styles/Row.css";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import MovieCard from "./MovieCard.jsx";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
     <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  );
}

export default Row;

