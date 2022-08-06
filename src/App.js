import './App.css';
import Card from './component/card';
import { useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {

  // useEffect(() => findTheAccount(), []);

  return (

    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='/' element={<Card child={"Didn't find any account ,create new one "} btnLabel={"next"} />}>
              <Route path='create' element={<Card child={"Fuck you ,create new one "} btnLabel={"next"} />}></Route>
            </Route>
          </Routes>
        </header >
      </div >
    </BrowserRouter>
  );


}

export default App;