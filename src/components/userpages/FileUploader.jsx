import React, { useState } from 'react';

const Fileuploader = () => {
    const [files,setFiles] = useState('');
    
    const FileObject = (event) => {
        console.log(event.target.files);
    }
    const errMsg = () => {}
    return (
        <div className='container'>
            <form>
            <input type="file" multiple onChange={FileObject} />
            </form>
        </div>
    );
}

export default Fileuploader;
