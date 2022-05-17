import React, { useState } from 'react';
import axios from 'axios';

const Fileuploader = () => {
    const [files,setFiles] = useState([{value:''}]);
    let id = -1;
    
    const FileUpload = (event) => {console.log(id);
        
        setFiles((preval)=>{
            return[...preval,
            {value:event.target.value}
        ]});
    }
    const FileSubmit =(e)=>{
        e.preventDefault();
        const formValues = {
            sellerId:1,
            ownerId:2,
            files:files
        };
            axios.post("http://localhost:8081/order/sendfiles",formValues,{headers:{'Access-Control-Allow-Origin':'*'}}).then((response)=>{
            console.log(response);
        });
    }
    //const errMsg = () => {}
    return (
        <div className="container">
                <div className="row">
                    <form onSubmit={FileSubmit}>
                        <h3>Send Files</h3>
                        <div className="form-group">
                            <input type="file" multiple id='files' onChange={FileUpload}/>
                        </div>
                        
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default Fileuploader;
