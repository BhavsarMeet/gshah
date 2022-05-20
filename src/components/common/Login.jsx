
import React,{ useState } from "react"; 
import { Link,useNavigate } from 'react-router-dom';


const Login =()=>{

    const navigate= useNavigate();
    const [formValues,setFormValues]=useState({
        inputVal:"",
    })

    const inputValHandler= (event)=>{
        setFormValues({inputVal:event.target.value})
    }

    

    const submitHandler=(event)=>{
        event.preventDefault();
        navigate("/cred/"+formValues.inputVal);
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                
                <label>Enter Email or Phone Number</label> <br />
                <input 
                    type="text"
                    value={formValues.inputVal}
                    onChange={inputValHandler} 
                />
                <br />
                <input 
                    type="submit"  
                    value="continue"
                />
            </form>


            <hr />
            <Link to="/signup">Don't have acocunt?Create one</Link>
        </>
    )
}

export default Login;