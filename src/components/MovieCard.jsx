function MovieCard({movie}){
    return(
        <img
        className="row_poster"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.name || movie.title || movie.original_name}

        />
    );
}
export default MovieCard;