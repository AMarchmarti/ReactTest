import React from 'react';

const Input = ({ placeholder, type, label, handleBlur, value }) => {
	return (
		<label className="inputGeneral col-lg-12">
			<input className="input" type={type} onBlur={handleBlur} placeholder={placeholder} value={value} />
			<span className="label">{label}</span>
		</label>
	);
};

export default Input;
