import React from 'react';

const Link = ({ url, label, handleClick }) => {
	return (
		<a href={url} onClick={handleClick}>
			{label}
		</a>
	);
};

export default Link;
