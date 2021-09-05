import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import { getTypeUsers } from '../../service/typeusers.service';
import { addUser } from '../../service/user.service';
import { TYPEUSER } from '../../utils/TypeUsers';

const basicForm = {
	name: '',
	lastName: '',
	agencyCode: '',
	email: '',
};

const Register = () => {
	const params = useParams();
	const history = useHistory();
	const [type, setType] = useState();
	const fetch = async () => {
		setType(await getTypeUsers(TYPEUSER[params.typeUser]));
	};

	const isDisabled = (values) => {
		const prueba = Object.keys(values).some((key) => !!values[key]);
		console.log('prueba :>> ', prueba);
	};

	const handleClickSubmit = async (user) => {
		try {
			await addUser({ ...user, typeId: TYPEUSER[params.typeUser] });
			history.push('/');
		} catch (e) {
			console.log('e :>> ', e);
		}
	};
	useEffect(() => {
		if (type === undefined) {
			fetch();
		}
	}, [params]);
	return (
		<>
			{type && (
				<>
					<Header />
					<Container>
						<Title title={type.name} />
						<Form initialValues={basicForm}>
							{({ values, setValue }) => {
								console.log('isDisabled :>> ', isDisabled(values));
								return (
									<>
										<Input
											placeholder={type.placeholderName}
											label={type.labelName}
											type="text"
											handleBlur={(e) => setValue('name', e.target.value)}
										/>

										<Input
											placeholder={type.placeholderLastName}
											label={type.labelLastName}
											type={type.id === 2 ? 'number' : 'text'}
											handleBlur={(e) =>
												setValue(type.id === 2 ? 'agencyCode' : 'lastName', e.target.value)
											}
										/>

										<Input
											placeholder={type.placeholderEmail}
											label={type.labelEmail}
											type="mail"
											handleBlur={(e) => setValue('email', e.target.value)}
										/>
										<Button
											type="submit"
											variant={!isDisabled(values) ? 'disabled' : 'contained'}
											disabled={!isDisabled(values)}
											handleClick={() => handleClickSubmit(values)}
											label="Send"
										/>
									</>
								);
							}}
						</Form>
					</Container>
				</>
			)}
		</>
	);
};

export default Register;
