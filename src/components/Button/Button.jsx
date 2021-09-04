import React from 'react';

const Button = ({ type, handleClick, label, icon }) => {
	return (
		<button type={type} onClick={handleClick}>
            {icon && (<i className={icon}></i>)}
            {label}
		</button>
	);
};

export default Button;
