import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginWithOTP=()=>{

    const [formValue,setFormValue]=useState({
        otp:""
    });

    const getOtp=(event)=>{
        // console.log(event.target.value);
      setFormValue({otp:event.target.value})
   //use navigate here
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        console.log("here")
    }

    return (
        <>
        <form onSubmit={submitHandler}>           
        <label>enter otp</label>
           <input 
                type="text"
                value={formValue.otp}
                onChange={getOtp} 
           />
        <input type="submit" value="login" />

        </form>

        </>
    )
}

export default LoginWithOTP;