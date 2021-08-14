import './App.css';
import Row from './Row';
import requests from "./requests"

function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals" fetchUrl={requests.fetchDiscover}/>
      <Row title ="Trending now" fetchUrl={requests.fetchTrendingNow} />
    </div>
  );
}

export default App;
