import React from 'react'
import { Link } from 'react-router-dom';

const History = (props) => {
    return (
    <div className='container-fuild'> 
        <div className='row'>
            <div className='col-3 pl-5'>Logo</div>
            <div className='col-6'></div>
            <div className='col-3' style={{textAlign:'right',paddingRight:20}}>{props.name} </div>
        </div>
        <div className='row mt-1'>
            <div className='col-2 mt-4' style={{}}>
            <div className='container border border-dark p-1'><Link to='/sellerdashboard'>inbox</Link></div>
                <div className='container border border-dark p-1'><Link to='/history'>History</Link></div>
                <div className='container border border-dark p-1'><Link to='/setting'>Setting</Link></div>
                <div className='container border border-dark p-1'><Link to='/logout'>Logout</Link></div>
            </div>
            <div className='col-10' style={{}}>
                <span>History</span>
                <div className='row bg-light border border-dark p-1'>manish paliwal</div>
                <div className='row bg-light border border-dark p-1'>meet bhavsar</div>
                <div className='row bg-light border border-dark p-1'>sukeju joshi</div>
                <div className='row bg-light border border-dark p-1'>yash panchal</div>
                <div className='row bg-light border border-dark p-1'>kaushal khunt</div>
            </div>
        </div>
    </div>
    
);}

export default History;