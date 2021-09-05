import React from 'react';

const Button = ({ type, handleClick, label, disabled, variant }) => {
	return (
		<button className={`button button__${variant}`} type={type} onClick={handleClick} disabled={disabled}>
			{label}
		</button>
	);
};

export default Button;
