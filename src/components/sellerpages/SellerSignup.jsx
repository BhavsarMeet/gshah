import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sellersignup = () => {
    const navigate = useNavigate();
    const [formValues, setformValues] = useState({
        sellerName:"",
        sellerEmail:"",
        sellerNumber:"",
        sellerPassword:"",
        sellerAdress:""
    });

    const setValue = (event) => {
        const {name,value} = event.target ;
        setformValues((preval)=>{
            return{
                ...preval,
                [name] : value
            }
        });
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8082/seller/addSeller",formValues).then((response)=>{
            console.log(response);
        });
        navigate("/");
    }
    return (
        <>
            <form onSubmit={submitHandler}>    
            <label >Name:</label>
            <input 
                type="text" 
                value={formValues.name}
                onChange={setValue}
                name="sellerName"
            />
            <br />

            <label >Email:</label>
            <input 
                type="text" 
                value={formValues.email}
                onChange={setValue}
                name="sellerEmail"
            />
            <br />

            <label >Number:</label>
            <input 
                type="text" 
                value={formValues.number}
                onChange={setValue}
                name="sellerNumber"
            />
            <br />

            <label >Adress:</label>
            <input 
                type="text" 
                value={formValues.adress}
                onChange={setValue}
                name="sellerAdress"
            />
            <br />
            <label >Password:</label>
            <input 
                type="password" 
                value={formValues.password}
                placeholder="set password"
                onChange={setValue}
                name="sellerPassword"
            />

            <input type="submit" value="signup" />

        </form>    
        <Link to="/">already have an acoount?login</Link>
        </>
    );
}

export default Sellersignup;
