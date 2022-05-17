import React from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div>
           <Link to="/usersignup">For User</Link><br/>
           <Link to="/sellersignup">For Seller</Link>
        </div>
    );
}

export default Signup;
