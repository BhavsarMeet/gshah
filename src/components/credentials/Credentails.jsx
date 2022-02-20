import axios from 'axios';
import react,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

const Credentails=({location})=>{
    
    const [formValues,setFormValues]=useState({
        password:"",
        data:""   
    })

    const login=(event)=>{
        event.preventDefault();
            axios.get("http://localhost:8081/login?data="+formValues.data+"&password="+formValues.password).then((response)=>{
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