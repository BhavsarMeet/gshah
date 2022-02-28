//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Error from './components/error/Error';
import LoginWithOTP from './components/LoginWithOTP/LoginWithOTP';
import Credentails from './components/credentials/Credentails';
import SellerDashboard from './components/sellerpages/SellerDashboard';
import History from './components/sellerpages/History';
import Setting from './components/sellerpages/Setting';
import Logout from './components/logout/Logout';
import Sellersignup from './components/sellerpages/SellerSignup';
import Userdashboard from './components/userpages/UserDashboard';
import ScanQr from './components/userpages/ScanQr';
import Fileuploader from './components/userpages/FileUploader';

const App = ()=> {
  return (

      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/signup" element={<Signup />} exact />
        <Route path="/scanqr" element={<ScanQr/>} exact />
        <Route path="/sellersignup" element={<Sellersignup />} exact />
        <Route path="/loginwithotp" element={<LoginWithOTP />} exact />
        <Route path="/cred" element={<Credentails/>} exact/>
        <Route path="/sellerdashboard" element={<SellerDashboard/> } exact/>
        <Route path="/history" element={<History/> } exact/>
        <Route path="/setting" element={<Setting/> } exact/>
        <Route path="/fileuploader" element={<Fileuploader/>} exact/>
        <Route path="/logout" element={<Logout/> } exact/>
        <Route path="/userdashboard" element={<Userdashboard/>} exact/>
        <Route element={<Error />} />
      </Routes>
  );
}

export default App;
