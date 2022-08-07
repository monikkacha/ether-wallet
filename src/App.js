import './App.css';
import Card from './component/card';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NoAccountFoundJs from './screens/NoAccountFound';
import CreateAccount from './screens/CreateAccount';

function App() {

  useEffect(() => console.log('got called first time'), []);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<NoAccountFoundJs />} />
          <Route path='create' element={<CreateAccount />} />
        </Routes>
      </header >
    </div >
  );


}

export default App;