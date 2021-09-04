import React from 'react';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';

const Register = () => {
	const initialValues = { name: '', lastName: '', email: '', type: 'hotel' };
	return (
		<>
			<Header />
			<h3>Hotel Guest</h3>
			<Form initialValues={initialValues}>
				{({ values, setValue }) => {
					return (
						<>
							<Input
								placeholder="Enter your Name"
								label="Name (required)"
								type="text"
								handleChange={(e) => setValue('name', e.target.value)}
								value={values.name}
							/>
							<Input
								placeholder="Enter your Last Name"
								label="Last Name (required)"
								type="text"
								handleChange={(e) => setValue('lastName', e.target.value)}
								value={values.lastName}
							/>
							<Input
								placeholder="Enter your email"
								label="Email (required)"
								type="mail"
								handleChange={(e) => setValue('email', e.target.value)}
								value={values.email}
							/>
							<Button type="submit" handleClick={() => console.log('object :>> ', values)} label="Send" />
						</>
					);
				}}
			</Form>
		</>
	);
};

export default Register;
