import './App.css';
import Row from './Row';
import request from "./requests"

function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals" fetchUrl={request.fetchDiscover}/>
      <Row title ="Trending now" fetchUrl={request.fetchTrendingNow} />
    </div>
  );
}

export default App;
