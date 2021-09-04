import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
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

	const handleClickSubmit = async (user) => {
		try {
			await addUser({ ...user, type: TYPEUSER[params.typeUser] });
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
					<h3>Hotel Guest</h3>
					<Form initialValues={basicForm}>
						{({ values, setValue }) => {
							return (
								<>
									<Input
										placeholder={type.placeholderName}
										label={type.labelName}
										type="text"
										handleChange={(e) => setValue('name', e.target.value)}
									/>

									<Input
										placeholder={type.placeholderLastName}
										label={type.labelLastName}
										type={type.id === 2 ? 'number' : 'text'}
										handleChange={(e) =>
											setValue(type.id === 2 ? 'agencyCode' : 'lastName', e.target.value)
										}
									/>

									<Input
										placeholder={type.placeholderEmail}
										label={type.labelEmail}
										type="mail"
										handleChange={(e) => setValue('email', e.target.value)}
									/>
									<Button type="submit" handleClick={() => handleClickSubmit(values)} label="Send" />
								</>
							);
						}}
					</Form>
				</>
			)}
		</>
	);
};

export default Register;
