import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Link from '../../components/Link/Link';

const Home = () => {
	return (
		<>
			<h3>
				<b>Sign Up</b>
			</h3>
			<p>What kinf of user are you?</p>
			<Button type="button" handleClick={() => console.log('Hello!')} label="Pulsa aqui" />
			<Button type="button" handleClick={() => console.log('Hello2!')} label="Pulsa aqui2" />
			<Button handleClick={() => console.log('Hello2!')} icon="bi bi-arrow-left" />
			<Button handleClick={() => console.log('Hello2!')} icon="bi bi-x" />
			<Input label="Introducir texto" type="text" placeholder="Escribe aqui" />
			<Link url="/" label="Are you registered" />
		</>
	);
};

export default Home;
