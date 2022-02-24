import React from 'react';
import { Link } from 'react-router-dom';

const Setting = () => {
    return (
        <div className='container-fuild'> 
            <div className='row'>
                <div className='col-3 pl-5'>Logo</div>
                <div className='col-6'></div>
                <div className='col-3' style={{textAlign:'right',paddingRight:20}}></div>
            </div>
            <div className='row mt-1'>
            <div className='col-2 mt-4' style={{}}>
                <div className='container border border-dark p-1'><Link to='/sellerdashboard'>inbox</Link></div>
                <div className='container border border-dark p-1'><Link to='/history'>History</Link></div>
                <div className='container border border-dark p-1'><Link to='/setting'>Setting</Link></div>
                <div className='container border border-dark p-1'><Link to='/logout'>Logout</Link></div>
            </div>
            <div className='col-10' style={{}}>
                <span>Setting</span>
            </div>
            </div>
        </div>
    );
}

export default Setting;
