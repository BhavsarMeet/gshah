import axios from 'axios';
import React,{useState,useEffect} from "react";
import { Link,useParams } from "react-router-dom";

const Credentails=(props)=>{
    
    let {data} = useParams();
   
    const [formValues,setFormValues]=useState({
        password:"",
    })
    
    console.log(data);
  
    const login=(event)=>{
        event.preventDefault();
            axios.get("http://localhost:8081/login?data="+data+"&password="+formValues.password).then((response)=>{
                console.log(response);
            });
    }
    const passwordHandler=(event)=>{
        setFormValues({password:event.target.value})
    }

    return (
        <>
        <form onSubmit={login}>
            <label>Password</label><br />
                <input 
                    type="text" 
                    value={formValues.password}
                    onChange={passwordHandler}
                />
            <input 
                type="submit" 
                value="login" 
            />  
        </form>        
            <hr />
            <Link to="/loginwithotp">Login with OTP</Link>
        
        </>
    )
}

export default Credentails;