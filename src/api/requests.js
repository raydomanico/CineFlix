const API_KEY = "***REMOVED**";

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}`,
    fetchTopRated  : `/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}`
};
export default requests;