import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const ScanQr = () => {

    const [data, setData] = useState('No result');

    return (
        <>
            
        <div style={{width:500}}>
        <QrReader
            style={{width: '100%'}}
            onResult={(result, error) => {
                if (!!result) {
                    setData(result?.text);
                }

                if (!!error) {
                    console.info(error);
                }
            }}
        />
        </div>
        
        <p>{data}</p>
        </>
    );
}

export default ScanQr;
