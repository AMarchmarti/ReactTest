import React from 'react';

const Button = ({type, handleClick, label}) => {
    return (
        <button type={type} onClick={handleClick}>
            {label}
        </button>
    )
}