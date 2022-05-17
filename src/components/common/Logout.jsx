import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const logout = () => {
        navigate("/");
    }
    const abort = () =>{
        navigate("/sellerdashboard");
    }
    return (
        <div>
            Are you sure you want to logout?<br/>
            <button onClick={logout}>yes</button>
            <button onClick={abort}>No</button>
        </div>
    );
}

export default Logout;
