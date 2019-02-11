import React from 'react';


function Field(props) {
    return <div className='field'>
        {props.children}
        <p className='counter'>Tries: {props.counter}</p>
    </div>
}


export default Field;
