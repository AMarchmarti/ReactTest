import React from 'react';

const Input = ({ placeholder, type, label, handleChange, value }) => {
	return (
		<label>
			<input type={type} onChange={handleChange} placeholder={placeholder} value={value} />
			<span>{label}</span>
		</label>
	);
};

export default Input;
