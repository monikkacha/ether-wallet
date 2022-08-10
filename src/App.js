import './App.css';
import './SizeBox.css';
import { Routes, Route } from 'react-router-dom';
import CreateAccount from './screens/CreateAccount';
import Home from './screens/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './screens/Login';
import Mnemonic from './screens/Mnemonic';
import { PATH_CREATE, PATH_HOME, PATH_MNEMONIC } from './utils/PathConstant';

function App() {

  return (
    <div className="App">
      <ToastContainer
        position='bottom-center'
      />
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path={PATH_CREATE} element={<CreateAccount />} />
          <Route path={PATH_HOME} element={<Home />} />
          <Route path={PATH_MNEMONIC} element={<Mnemonic />} />
        </Routes>
      </header >
    </div >
  );
}

export default App;