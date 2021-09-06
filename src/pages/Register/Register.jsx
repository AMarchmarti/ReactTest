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

const basicFormHotel = {
	name: '',
	lastName: '',
	email: '',
};
const basicFormAgency = {
	name: '',
	agencyCode: '',
	email: '',
};

const Register = () => {
	const params = useParams();
	const history = useHistory();
	const type = useGet(getTypeUsers, TYPEUSER[params.typeUser]);

	const handleChange = (e, setValue, field) => {
		setValue(field, e.target.value);
	};

	const isDisabled = (values) => Object.keys(values).find((value) => !values[value]);

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
					<Grid size="lg" number={12} direction="column" className="container">
						<Title title={type.name} />
						<Form initialValues={type.id === 2 ? basicFormAgency : basicFormHotel}>
							{({ values, setValue }) => {
								return (
									<>
										<Input
											placeholder={type.placeholderName}
											label={type.labelName}
											type="text"
											handleChange={(e) => handleBlur(e, setValue, 'name')}
										/>

										<Input
											placeholder={type.placeholderLastName}
											label={type.labelLastName}
											type={type.id === 2 ? 'number' : 'text'}
											handleChange={(e) =>
												handleChange(e, setValue, type.id === 2 ? 'agencyCode' : 'lastName')
											}
										/>

										<Input
											placeholder={type.placeholderEmail}
											label={type.labelEmail}
											type="mail"
											handleChange={(e) => handleChange(e, setValue, 'email')}
										/>
										<Grid className="margin__md__top"></Grid>
										<Button
											type="submit"
											variant={isDisabled(values) ? 'disabled' : 'contained'}
											disabled={isDisabled(values)}
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
