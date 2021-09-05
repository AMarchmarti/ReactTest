import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Grid from '../../components/Grid/Grid';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import { getTypeUsers } from '../../service/typeusers.service';
import { addUser } from '../../service/user.service';
import { TYPEUSER } from '../../utils/TypeUsers';
import useGet from '../../hooks/useGet';

const basicForm = {
	name: '',
	lastName: '',
	agencyCode: '',
	email: '',
};

const Register = () => {
	const params = useParams();
	const history = useHistory();
	const type = useGet(getTypeUsers, TYPEUSER[params.typeUser]);

	const isDisabled = (values) => {
		const prueba = Object.keys(values).some((key) => !!values[key]);
		console.log('prueba :>> ', prueba);
	};

	const handleClickSubmit = async (user) => {
		try {
			await addUser({ ...user, typeId: TYPEUSER[params.typeUser] });
			history.push('/complete');
		} catch (e) {
			console.log('e :>> ', e);
		}
	};
	return (
		<>
			{type && (
				<>
					<Header />
					<Grid lg="lg" sizeLg={12} direction="column" className="container">
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
										<Grid className="margin__md__top"></Grid>
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
					</Grid>
				</>
			)}
		</>
	);
};

export default Register;
