import React from 'react';

const Button = ({ type, handleClick, label, icon, disabled }) => {
	return (
		<button type={type} onClick={handleClick} disabled={disabled}>
			{icon && <i className={icon}></i>}
			{label}
		</button>
	);
};

export default Button;