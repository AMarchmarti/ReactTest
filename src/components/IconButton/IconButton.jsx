import React from 'react';

const IconButton = ({ type, handleClick, icon, disabled }) => {
	return (
		<button type={type} onClick={handleClick} disabled={disabled}>
			<i className={icon}></i>
		</button>
	);
};

export default IconButton;
