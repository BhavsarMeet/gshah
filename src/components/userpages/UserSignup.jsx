import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const UserSignup =()=>{

    const [formValues,setFormValues]=useState({

        userName:"",
        userEmail:"",
        userPassword:"",
        userNumber:"",
       
    });

    const submitHandler=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:8081/signup",formValues,{headers:{'Access-Control-Allow-Origin':'*'}}).then((response)=>{
            console.log(response);
        })
    }
    const nameHandler=(event)=>{
        setFormValues({...formValues,userName:event.target.value})
    }
    const emailHandler=(event)=>{
        setFormValues({...formValues,userEmail:event.target.value})
    }
    const numberHandler=(event)=>{
        setFormValues({...formValues,userNumber:event.target.value})
   }
  
    const passwordHandler=(event)=>{
        setFormValues({...formValues,userPassword:event.target.value})
    }

    return (
        <>
     
        <form onSubmit={submitHandler}>    
            <label >Name:</label>
            <input 
                type="text" 
                value={formValues.name}
                onChange={nameHandler}
            />
            <br />

            <label >Email:</label>
            <input 
                type="text" 
                value={formValues.email}
                onChange={emailHandler}
            />
            <br />

            <label >Number:</label>
            <input 
                type="text" 
                value={formValues.number}
                onChange={numberHandler}
            />
            <br />

           
             <label >Password:</label>
            <input 
                type="password" 
                value={formValues.password}
                placeholder="set password"
                onChange={passwordHandler}
            />

            <input type="submit" value="signup" />

        </form>    
        <Link to="/">already have an acoount?login</Link>
        </>
    );
}

export default UserSignup;