import axios from 'axios';
import React,{useState,useEffect} from "react";
import { Link,useNavigate,useParams } from "react-router-dom";

const Credentails=(props)=>{
    const navigate = useNavigate();
    let {data} = useParams();
   
    const [formValues,setFormValues]=useState({
        password:"",
    })
    
    console.log(data);
  
    const login=(event)=>{
        event.preventDefault();
            axios.get("http://localhost:8081/login?data="+data+"&password="+formValues.password).then((response)=>{
                console.log(response);
                var user = response.data.data.userId;
                var seller = response.data.data.sellerId;
                console.log(user);
                console.log(seller);
                if(user!=null){
                    navigate("/userdashboard");
                }
                else if(seller!=null){
                    navigate("/sellerdashboard");
                }
                else{
                    alert("password is wrong...");
                }
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