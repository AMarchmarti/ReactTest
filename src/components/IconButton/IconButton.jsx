import React from 'react';

const IconButton = ({ type, handleClick, icon, disabled }) => {
	return (
		<button className="container__icon__button" type={type} onClick={handleClick} disabled={disabled}>
			{icon}
		</button>
	);
};

export default IconButton;
