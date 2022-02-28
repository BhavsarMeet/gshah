import React from 'react';
import { Link } from 'react-router-dom';

const Userdashboard = () => {
    return (
        <>
            <div className='row m-2'>
            <div className='col-2' style={{}}>
                <div className='container border border-dark p-1'><Link to='/scanqr'>scan and share</Link></div>
                <div className='container border border-dark p-1'><Link to='/history'>History</Link></div>
                <div className='container border border-dark p-1'><Link to='/setting'>profile</Link></div>
                <div className='container border border-dark p-1'><Link to='/logout'>Logout</Link></div>
            </div>
            </div>
        </>
    );
}

export default Userdashboard;
