import React from 'react';

const Input = ({ placeholder, type, label, handleChange, value }) => {
	return (
		<label className="inputGeneral">
			<input className="input" type={type} onChange={handleChange} placeholder={placeholder} value={value} />
			<span className="label">{label}</span>
		</label>
	);
};

export default Input;
