import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateAccount from './screens/CreateAccount';
import Home from './screens/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './screens/Login';

function App() {

  return (
    <div className="App">
      <ToastContainer
        position='bottom-center'
      />
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/create' element={<CreateAccount />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </header >
    </div >
  );
}

export default App;