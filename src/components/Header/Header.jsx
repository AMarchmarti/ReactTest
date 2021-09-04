import React from 'react';
import { useHistory } from 'react-router';
import Button from '../Button/Button';

const Header = () => {
	const history = useHistory();
	return (
		<div>
			<Button handleClick={() => history.goBack()} icon="bi bi-arrow-left" />
			<Button handleClick={() => history.push('/')} icon="bi bi-x" />
		</div>
	);
};

export default Header;
