import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound'>
            <h4><span className='error'>404</span><span> ,Page is not found</span></h4>
            <p>The requested page was not found</p>
        </div>
    );
};

export default NotFound;