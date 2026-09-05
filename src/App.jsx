import Row from "./components/Row";
import requests from "./api/import.meta.env.VITE_TMDB_KEY";
import Banner from "./components/Banner";
import Nav from "./components/Nav";


function App() {

  return (
<div className="App">
<Nav />

  <div id="banner">
      <Banner />
  </div>  
  <div id="netflix-originals">
    <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
  </div>

  <div id="trending">
    <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
  </div>
  <div id="topRated">
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
  </div>
  <div id="actionMovies"> 
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
  </div>  
  <div id="tvShows">  
        <Row title="TV Shows" fetchUrl={requests.fetchTvShows}/>
  </div>
</div>
    
  );
}

export default App;

