import React from 'react';

const Grid = ({ children, xs, lg, md, sm, sizeXs, sizeSm, sizeMd, sizeLg, className, direction }) => {
	return (
		<div
			className={`col-${xs}-${sizeXs} 
			col-${sm}-${sizeSm} 
			col-${md}-${sizeMd} 
			col-${lg}-${sizeLg} 
			${direction} ${className}`}
		>
			{children}
		</div>
	);
};

export default Grid;
