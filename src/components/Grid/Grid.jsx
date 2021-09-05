import React from 'react';
const SIZE_TYPE = {
	xs: 'col-xs',
	sm: 'col-sm',
	md: 'col-md',
	lg: 'col-lg',
};

const Grid = ({ children, size, number, className, direction }) => {
	const getSize = size ? `${SIZE_TYPE[size]}-${number} ` : '';
	const getDirection = direction ? direction : '';
	return <div className={`${getSize} ${getDirection} ${className}`}>{children}</div>;
};

export default Grid;
