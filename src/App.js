import './App.css';
import Card from './component/card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card child={"Didn't find any account ,create new one "} btnLabel={"Start"} />
      </header>
    </div>
  );
}

export default App;
