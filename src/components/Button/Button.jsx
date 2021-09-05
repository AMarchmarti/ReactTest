import React from 'react';

const Button = ({ type, handleClick, label, disabled }) => {
	return (
		<button type={type} onClick={handleClick} disabled={disabled}>
			{label}
		</button>
	);
};

export default Button;
