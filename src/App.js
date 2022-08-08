import './App.css';
import Card from './component/card';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NoAccountFoundJs from './screens/NoAccountFound';
import CreateAccount from './screens/CreateAccount';
import Home from './screens/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  useEffect(() => {
    console.log('got called first time');
  }, []);

  return (
    <div className="App">
      <ToastContainer
        position='bottom-center'
      />
      <header className="App-header">
        <Routes>
          <Route path='/' element={<NoAccountFoundJs />} />
          <Route path='/create' element={<CreateAccount />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </header >
    </div >
  );


}

export default App;