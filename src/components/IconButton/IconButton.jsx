import React from 'react';

const IconButton = ({ type, handleClick, icon, disabled, className }) => {
	return (
		<button
			className={`container__icon__button ${className}`}
			type={type}
			onClick={handleClick}
			disabled={disabled}
		>
			{icon}
		</button>
	);
};

export default IconButton;
