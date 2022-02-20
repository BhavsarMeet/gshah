import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Error from './components/error/Error';
import LoginWithOTP from './components/LoginWithOTP/LoginWithOTP';
import Credentails from './components/credentials/Credentails';

const App = ()=> {
  return (

      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/signup" element={<Signup />} exact />
        <Route path="/loginwithotp" element={<LoginWithOTP />} exact />
        <Route path="/cred" element={<Credentails/>} exact></Route>
        <Route element={<Error />} />
      </Routes>
  );
}

export default App;
