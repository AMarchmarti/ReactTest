import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Link from '../../components/Link/Link';

const Home = () => {
	const history = useHistory();
	return (
		<>
			<h3>
				<b>Sign Up</b>
			</h3>
			<p>What kinf of user are you?</p>
			<Button type="button" handleClick={() => history.push('/hotel')} label="Pulsa aqui" />
			<Button type="button" handleClick={() => history.push('/agency')} label="Pulsa aqui2" />
			<Link url="/" label="Are you registered" />
		</>
	);
};

export default Home;
