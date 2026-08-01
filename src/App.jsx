import Row from "./components/Row";
import requests from "./api/requests";
import Banner from "./components/Banner";


function App() {
  return (
    <div className="App">
      <Banner />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    </div>
  );
}

export default App;
