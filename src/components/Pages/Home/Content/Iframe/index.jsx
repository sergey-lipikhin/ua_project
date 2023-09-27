import React from 'react';

const Iframe = (props) =>  {
    return (
        
            <iframe 
                width="650"
                height="555"
                src={props.src}
                className='iframe col-lg-12 col-md-12 col-12'>
            </iframe>
       
    );
};

export default Iframe;