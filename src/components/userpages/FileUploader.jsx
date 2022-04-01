import React, { useState } from 'react';

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
        for(let i = 0;i<files.length;i++){
            console.log(files[i]);
            
        }console.log("hi");
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
