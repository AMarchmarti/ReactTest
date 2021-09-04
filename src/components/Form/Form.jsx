import { useState } from 'react';

const Form = ({ initialValues, children }) => {
	const [values, setValues] = useState({ ...initialValues });

	const setValue = (name, value) => {
		if (name in values) {
			setValues({
				...values,
				[name]: value,
			});
		}
	};

	return children({
		values,
		setValue,
	});
};

export default Form;
